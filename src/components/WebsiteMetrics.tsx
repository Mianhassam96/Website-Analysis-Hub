import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Globe, Link2, Key, BarChart2 } from "lucide-react";

interface WebsiteMetricsProps {
  url: string;
  metrics: {
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
  };
}

export const WebsiteMetrics = ({ url, metrics }: WebsiteMetricsProps) => {
  return (
    <div className="space-y-6">
      <Card className="border-[#9b87f5]/20 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-[#7E69AB] flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Website Analysis Results
          </CardTitle>
          <CardDescription>{url}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Contact Information */}
            <Card className="border-[#9b87f5]/20">
              <CardHeader>
                <CardTitle className="text-lg text-[#7E69AB]">Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {metrics.contactInfo.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#9b87f5]" />
                    <span>{metrics.contactInfo.phone}</span>
                  </div>
                )}
                {metrics.contactInfo.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#9b87f5]" />
                    <span>{metrics.contactInfo.email}</span>
                  </div>
                )}
                {metrics.contactInfo.address && (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#9b87f5]" />
                    <span>{metrics.contactInfo.address}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Authority Metrics */}
            <Card className="border-[#9b87f5]/20">
              <CardHeader>
                <CardTitle className="text-lg text-[#7E69AB]">Domain Authority</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>DA Score</span>
                  <span className="font-bold text-[#7E69AB]">{metrics.domainAuthority}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>PA Score</span>
                  <span className="font-bold text-[#7E69AB]">{metrics.pageAuthority}</span>
                </div>
              </CardContent>
            </Card>

            {/* Backlinks */}
            <Card className="border-[#9b87f5]/20">
              <CardHeader>
                <CardTitle className="text-lg text-[#7E69AB] flex items-center gap-2">
                  <Link2 className="h-4 w-4" />
                  Backlinks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[#7E69AB]">{metrics.backlinks.toLocaleString()}</div>
                <p className="text-sm text-muted-foreground">Total backlinks found</p>
              </CardContent>
            </Card>

            {/* Keywords */}
            <Card className="border-[#9b87f5]/20">
              <CardHeader>
                <CardTitle className="text-lg text-[#7E69AB] flex items-center gap-2">
                  <Key className="h-4 w-4" />
                  Top Keywords
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {metrics.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#9b87f5]/10 rounded-full text-sm text-[#7E69AB]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* SEO Performance */}
            <Card className="border-[#9b87f5]/20">
              <CardHeader>
                <CardTitle className="text-lg text-[#7E69AB] flex items-center gap-2">
                  <BarChart2 className="h-4 w-4" />
                  SEO Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Keyword Rank</span>
                  <span className="font-bold text-[#7E69AB]">#{metrics.seoMetrics.keywordRank}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Organic Traffic</span>
                  <span className="font-bold text-[#7E69AB]">
                    {metrics.seoMetrics.organicTraffic.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Total Keywords</span>
                  <span className="font-bold text-[#7E69AB]">
                    {metrics.seoMetrics.totalKeywords.toLocaleString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};