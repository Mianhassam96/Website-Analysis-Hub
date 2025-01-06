export class FirecrawlService {
  async crawlWebsite(url: string): Promise<{ success: boolean; error?: string; data?: any }> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch website content');
      }
      
      const html = await response.text();
      return {
        success: true,
        data: {
          html
        }
      };
    } catch (error) {
      console.error('Error crawling website:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to crawl website'
      };
    }
  }
}