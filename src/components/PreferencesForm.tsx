import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Preferences = {
  theme: string;
  notifications: boolean;
  language: string;
};

type PreferencesFormProps = {
  data: Preferences;
};

export default function PreferencesForm({ data }: PreferencesFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Theme</span>
            <span className="text-muted-foreground">{data.theme}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Notifications</span>
            <span className="text-muted-foreground">
              {data.notifications ? "Enabled" : "Disabled"}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Language</span>
            <span className="text-muted-foreground">{data.language}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}