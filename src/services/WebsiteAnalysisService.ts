import FirecrawlApp from '@mendable/firecrawl-js';

interface WebsiteAnalysisResult {
  domainAuthority: number;
  pageAuthority: number;
  backlinks: number;
  keywords: string[];
  contactInfo: {
    phone?: string;
    email?: string;
    address?: string;
  };
  seoMetrics: {
    keywordRank: number;
    organicTraffic: number;
    totalKeywords: number;
  };
}

export class WebsiteAnalysisService {
  private static API_KEY_STORAGE_KEY = 'firecrawl_api_key';
  private static firecrawlApp: FirecrawlApp | null = null;

  static async analyzeWebsite(url: string): Promise<WebsiteAnalysisResult> {
    const apiKey = localStorage.getItem(this.API_KEY_STORAGE_KEY);
    if (!apiKey) {
      throw new Error('API key not found. Please set your Firecrawl API key.');
    }

    if (!this.firecrawlApp) {
      this.firecrawlApp = new FirecrawlApp({ apiKey });
    }

    try {
      const crawlResponse = await this.firecrawlApp.crawlUrl(url, {
        limit: 10,
        scrapeOptions: {
          formats: ['html'],
          selectors: [
            { name: 'contact-email', selector: 'a[href^="mailto:"]' },
            { name: 'contact-phone', selector: 'a[href^="tel:"]' },
            { name: 'contact-address', selector: 'address' }
          ]
        }
      });

      if (!crawlResponse.success) {
        throw new Error('Failed to analyze website');
      }

      // Get the HTML content from the first document
      const htmlContent = crawlResponse.data?.[0]?.html || '';

      // Extract contact information using regex patterns
      const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
      const phonePattern = /(\+\d{1,3}[-.]?)?\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}/g;
      const addressPattern = /\d+\s+([a-zA-Z]+\s*)+,\s*[a-zA-Z]+,\s*[A-Z]{2}\s*\d{5}/g;

      const emails = htmlContent.match(emailPattern) || [];
      const phones = htmlContent.match(phonePattern) || [];
      const addresses = htmlContent.match(addressPattern) || [];

      // Extract meta keywords
      const keywordsMatch = htmlContent.match(/<meta\s+name="keywords"\s+content="([^"]+)"/i);
      const keywords = keywordsMatch ? 
        keywordsMatch[1].split(',').map(k => k.trim()) : 
        [];

      // Calculate metrics based on content analysis
      const backlinksCount = (htmlContent.match(/<a\s+href="http/g) || []).length;
      const contentLength = htmlContent.length;

      // Calculate domain and page authority based on various factors
      const domainAuthority = Math.min(
        Math.floor((backlinksCount * 0.3 + contentLength / 1000) * 0.5),
        100
      );
      const pageAuthority = Math.min(
        Math.floor((backlinksCount * 0.2 + contentLength / 800) * 0.4),
        100
      );

      // Calculate SEO metrics based on content analysis
      const keywordDensity = keywords.length > 0 ? 
        keywords.reduce((acc, keyword) => {
          const regex = new RegExp(keyword, 'gi');
          const matches = htmlContent.match(regex);
          return acc + (matches ? matches.length : 0);
        }, 0) / contentLength : 0;

      return {
        domainAuthority,
        pageAuthority,
        backlinks: backlinksCount,
        keywords: keywords.slice(0, 5),
        contactInfo: {
          email: emails[0],
          phone: phones[0],
          address: addresses[0]
        },
        seoMetrics: {
          keywordRank: Math.max(1, Math.floor(100 - (keywordDensity * 1000))),
          organicTraffic: Math.floor(domainAuthority * backlinksCount * 10),
          totalKeywords: keywords.length
        }
      };
    } catch (error) {
      console.error('Error analyzing website:', error);
      throw error;
    }
  }
}