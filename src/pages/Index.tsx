import { WebsiteAnalyzer } from "@/components/WebsiteAnalyzer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

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

          {/* Contact Form Section */}
          <Card className="border-[#9b87f5]/20 shadow-lg shadow-[#9b87f5]/10">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl text-[#7E69AB]">Get in Touch</CardTitle>
              <CardDescription className="text-base">
                Have questions? Contact us for personalized SEO consultation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      className="border-[#9b87f5]/20 focus:border-[#9b87f5]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="border-[#9b87f5]/20 focus:border-[#9b87f5]"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="border-[#9b87f5]/20 focus:border-[#9b87f5]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium">
                      Website URL
                    </label>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://yourwebsite.com"
                      className="border-[#9b87f5]/20 focus:border-[#9b87f5]"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-medium">
                    Address
                  </label>
                  <Textarea
                    id="address"
                    placeholder="Enter your full address"
                    className="border-[#9b87f5]/20 focus:border-[#9b87f5]"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
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