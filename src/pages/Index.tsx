import { WebsiteAnalyzer } from "@/components/WebsiteAnalyzer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">MultiMian Analytics Hub</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive website analysis and SEO optimization tools
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Website Analysis Tool</CardTitle>
            <CardDescription>
              Enter a website URL to analyze its SEO metrics and performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <WebsiteAnalyzer />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;