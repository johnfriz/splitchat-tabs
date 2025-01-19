import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type ProfileData = {
  name: string;
  email: string;
  avatar: string;
  role: string;
  joinDate: string;
};

export default function ProfileInfo({ data }: { data: ProfileData }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-start space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={data.avatar} alt={data.name} />
            <AvatarFallback>{data.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-3">
            <div>
              <p className="font-medium">{data.name}</p>
              <p className="text-sm text-muted-foreground">{data.email}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm">
                <span className="font-medium">Role:</span> {data.role}
              </p>
              <p className="text-sm">
                <span className="font-medium">Member since:</span> {data.joinDate}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}