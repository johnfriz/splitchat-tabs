import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type StatsCardProps = {
  data: Array<{
    label: string;
    value: string | number;
  }>;
};

export default function StatsCard({ data }: StatsCardProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {data.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}