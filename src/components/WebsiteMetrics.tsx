import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WebsiteMetricsProps {
  metrics: {
    domainAuthority: number;
    pageAuthority: number;
    spamScore: number;
    backlinks: number;
    referringDomains: number;
    keywordRankings: number;
  };
}

export const WebsiteMetrics = ({ metrics }: WebsiteMetricsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MetricCard
        title="Domain Authority"
        value={metrics.domainAuthority}
        description="DA Score (0-100)"
      />
      <MetricCard
        title="Page Authority"
        value={metrics.pageAuthority}
        description="PA Score (0-100)"
      />
      <MetricCard
        title="Spam Score"
        value={metrics.spamScore}
        description="Spam likelihood"
      />
      <MetricCard
        title="Backlinks"
        value={metrics.backlinks}
        description="Total backlinks"
      />
      <MetricCard
        title="Referring Domains"
        value={metrics.referringDomains}
        description="Unique referring domains"
      />
      <MetricCard
        title="Keyword Rankings"
        value={metrics.keywordRankings}
        description="Total keyword rankings"
      />
    </div>
  );
};

const MetricCard = ({
  title,
  value,
  description,
}: {
  title: string;
  value: number;
  description: string;
}) => (
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);