import { navigationConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  return (
    <div className="border-r bg-background h-screen w-[60px] flex flex-col items-center py-4">
      {navigationConfig.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-md mb-2",
              "hover:bg-accent transition-colors",
              isActive && "bg-accent"
            )}
          >
            <Icon className={cn("w-5 h-5", isActive ? "text-accent-foreground" : "text-muted-foreground")} />
          </Link>
        );
      })}
    </div>
  );
}