import { WebsiteAnalyzer } from "@/components/WebsiteAnalyzer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow p-6 bg-gradient-to-br from-[#9b87f5]/10 to-[#D6BCFA]/20">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-transparent bg-clip-text">
              MultiMian Analytics Hub
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive website analysis and SEO optimization tools
            </p>
          </div>

          <Card className="border-[#9b87f5]/20 shadow-lg shadow-[#9b87f5]/10">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl text-[#7E69AB]">Website Analysis Tool</CardTitle>
              <CardDescription className="text-base">
                Enter a website URL to analyze its SEO metrics and performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <WebsiteAnalyzer />
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-[#9b87f5]/20 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-[#7E69AB]">Domain Authority</CardTitle>
                <CardDescription>Measure your website's authority</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-[#9b87f5]/20 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-[#7E69AB]">Keyword Analysis</CardTitle>
                <CardDescription>Discover high-ranking keywords</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-[#9b87f5]/20 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-[#7E69AB]">Backlink Checker</CardTitle>
                <CardDescription>Track your backlink profile</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;