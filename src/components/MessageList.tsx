import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Message = {
  id: number;
  user: string;
  message: string;
  time: string;
};

type MessageListProps = {
  data: Message[];
};

export default function MessageList({ data }: MessageListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Messages</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((message) => (
            <div
              key={message.id}
              className="flex flex-col space-y-1 border-b pb-3 last:border-0"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{message.user}</span>
                <span className="text-sm text-muted-foreground">
                  {message.time}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{message.message}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}