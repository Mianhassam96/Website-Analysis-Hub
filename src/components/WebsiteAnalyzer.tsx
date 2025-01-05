import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { AnalyticsService } from "@/services/AnalyticsService";
import { WebsiteMetrics } from "@/components/WebsiteMetrics";

interface AnalysisResult {
  domainAuthority: number;
  pageAuthority: number;
  spamScore: number;
  backlinks: number;
  referringDomains: number;
  keywordRankings: number;
}

export const WebsiteAnalyzer = () => {
  const { toast } = useToast();
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setProgress(0);
    setResult(null);

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 90));
      }, 500);

      const analysisResult = await AnalyticsService.analyzeWebsite(url);
      clearInterval(progressInterval);
      setProgress(100);
      setResult(analysisResult);

      toast({
        title: "Analysis Complete",
        description: "Website analysis has been completed successfully.",
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: error instanceof Error ? error.message : "Failed to analyze website",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleAnalyze} className="space-y-4">
        <div className="flex gap-4">
          <Input
            type="url"
            placeholder="Enter website URL (e.g., https://example.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" disabled={isAnalyzing}>
            {isAnalyzing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze"
            )}
          </Button>
        </div>

        {isAnalyzing && <Progress value={progress} className="w-full" />}
      </form>

      {result && <WebsiteMetrics metrics={result} />}
    </div>
  );
};