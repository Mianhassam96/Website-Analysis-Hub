import { useState } from "react";
import { WebsiteMetrics } from "./WebsiteMetrics";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { WebsiteAnalysisService } from "@/services/WebsiteAnalysisService";

export const WebsiteAnalyzer = () => {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [apiKey, setApiKey] = useState(localStorage.getItem('firecrawl_api_key') || '');
  const { toast } = useToast();

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your Firecrawl API key to analyze websites.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);

    try {
      localStorage.setItem('firecrawl_api_key', apiKey);
      const results = await WebsiteAnalysisService.analyzeWebsite(url);
      setAnalysisResults(results);
      toast({
        title: "Analysis Complete",
        description: "Website analysis has been completed successfully.",
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: error instanceof Error ? error.message : "Failed to analyze the website. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="apiKey" className="text-sm font-medium">
            Firecrawl API Key
          </label>
          <Input
            id="apiKey"
            type="password"
            placeholder="Enter your Firecrawl API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="border-[#9b87f5]/20 focus:border-[#9b87f5]"
          />
        </div>
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
      </div>

      {analysisResults && <WebsiteMetrics url={url} metrics={analysisResults} />}
    </div>
  );
};