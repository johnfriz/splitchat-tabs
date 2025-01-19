import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Switch } from "./ui/switch";

type SecuritySettings = {
  twoFactorEnabled: boolean;
  loginNotifications: boolean;
  deviceHistory: {
    device: string;
    lastAccess: string;
    location: string;
  }[];
};

export default function SecuritySettings({ data }: { data: SecuritySettings }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="font-medium">Two-factor Authentication</p>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account
              </p>
            </div>
            <Switch checked={data.twoFactorEnabled} />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="font-medium">Login Notifications</p>
              <p className="text-sm text-muted-foreground">
                Get notified of new login attempts
              </p>
            </div>
            <Switch checked={data.loginNotifications} />
          </div>
          <div className="space-y-3">
            <p className="font-medium">Recent Devices</p>
            <div className="space-y-2">
              {data.deviceHistory.map((device, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-sm border-b pb-2 last:border-0"
                >
                  <span>{device.device}</span>
                  <div className="text-right">
                    <p className="text-muted-foreground">{device.location}</p>
                    <p className="text-xs text-muted-foreground">
                      {device.lastAccess}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}