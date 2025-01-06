import { useState } from "react";
import { WebsiteMetrics } from "./WebsiteMetrics";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { WebsiteAnalysisService } from "@/services/WebsiteAnalysisService";
import { Search, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const WebsiteAnalyzer = () => {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const { toast } = useToast();

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);

    try {
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
    <div className="space-y-8 max-w-4xl mx-auto px-4">
      <Card className="border-[#9b87f5]/20 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-transparent bg-clip-text">
            Website Analysis Tool
          </CardTitle>
          <CardDescription className="text-lg">
            Enter a website URL to analyze its SEO metrics and performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAnalyze} className="flex gap-4 items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="url"
                placeholder="Enter website URL (e.g., https://example.com)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="pl-10 border-[#9b87f5]/20 focus:border-[#9b87f5] h-12 text-lg"
              />
            </div>
            <Button
              type="submit"
              disabled={isAnalyzing}
              className="h-12 px-6 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-5 w-5" />
                  Analyze
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {analysisResults && <WebsiteMetrics url={url} metrics={analysisResults} />}
    </div>
  );
};