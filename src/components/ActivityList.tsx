import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Activity = {
  id: number;
  action: string;
  timestamp: string;
};

type ActivityListProps = {
  data: Activity[];
};

export default function ActivityList({ data }: ActivityListProps) {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between border-b pb-2 last:border-0"
            >
              <span className="text-sm font-medium">{activity.action}</span>
              <span className="text-sm text-muted-foreground">
                {new Date(activity.timestamp).toLocaleTimeString()}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}