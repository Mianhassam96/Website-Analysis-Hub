import { useState } from "react";
import { WebsiteMetrics } from "./WebsiteMetrics";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const WebsiteAnalyzer = () => {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const { toast } = useToast();

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);

    try {
      // Simulated API call - replace with actual API integration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock data - replace with actual API response
      const mockResults = {
        domainAuthority: 65,
        pageAuthority: 58,
        backlinks: 15420,
        keywords: ["seo", "digital marketing", "web analytics", "content strategy", "sem"],
        contactInfo: {
          phone: "+1 (555) 123-4567",
          email: "contact@example.com",
          address: "123 Tech Street, Digital City, DC 12345"
        },
        seoMetrics: {
          keywordRank: 12,
          organicTraffic: 45000,
          totalKeywords: 2840
        }
      };

      setAnalysisResults(mockResults);
      toast({
        title: "Analysis Complete",
        description: "Website analysis has been completed successfully.",
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "Failed to analyze the website. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleAnalyze} className="flex gap-4">
        <Input
          type="url"
          placeholder="Enter website URL (e.g., https://example.com)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="flex-grow border-[#9b87f5]/20 focus:border-[#9b87f5]"
        />
        <Button
          type="submit"
          disabled={isAnalyzing}
          className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 transition-opacity"
        >
          {isAnalyzing ? "Analyzing..." : "Analyze"}
        </Button>
      </form>

      {analysisResults && <WebsiteMetrics url={url} metrics={analysisResults} />}
    </div>
  );
};