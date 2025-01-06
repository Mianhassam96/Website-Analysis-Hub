import { WebsiteAnalyzer } from "@/components/WebsiteAnalyzer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { Rocket, BarChart2, Link2 } from "lucide-react";

const Index = () => {
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow p-6 bg-gradient-to-br from-[#9b87f5]/5 to-[#D6BCFA]/10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6 py-12">
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-transparent bg-clip-text">
              Website Analysis Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unlock your website's potential with our comprehensive analysis tools
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-[#9b87f5]/20 shadow-md hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-lg text-[#7E69AB] flex items-center gap-2">
                  <Rocket className="h-5 w-5 group-hover:text-[#9b87f5] transition-colors" />
                  Performance Analysis
                </CardTitle>
                <CardDescription>Optimize your site speed</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-[#9b87f5]/20 shadow-md hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-lg text-[#7E69AB] flex items-center gap-2">
                  <BarChart2 className="h-5 w-5 group-hover:text-[#9b87f5] transition-colors" />
                  SEO Metrics
                </CardTitle>
                <CardDescription>Track your rankings</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-[#9b87f5]/20 shadow-md hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-lg text-[#7E69AB] flex items-center gap-2">
                  <Link2 className="h-5 w-5 group-hover:text-[#9b87f5] transition-colors" />
                  Backlink Analysis
                </CardTitle>
                <CardDescription>Monitor your link profile</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Main Analysis Tool */}
          <Card className="border-[#9b87f5]/20 shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-transparent bg-clip-text">
                Website Analyzer
              </CardTitle>
              <CardDescription className="text-lg">
                Enter your website URL to start the analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <WebsiteAnalyzer />
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="border-[#9b87f5]/20 shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-[#7E69AB]">Get in Touch</CardTitle>
              <CardDescription>
                Need help with your website analysis? Contact us
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Input
                      placeholder="Full Name"
                      required
                      className="border-[#9b87f5]/20 focus:border-[#9b87f5]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="border-[#9b87f5]/20 focus:border-[#9b87f5]"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="border-[#9b87f5]/20 focus:border-[#9b87f5]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="url"
                      placeholder="Website URL"
                      className="border-[#9b87f5]/20 focus:border-[#9b87f5]"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="How can we help you?"
                    required
                    className="border-[#9b87f5]/20 focus:border-[#9b87f5]"
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 transition-opacity"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;