import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { navigationConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import TabView from "./TabView";
import ChatPanel from "./ChatPanel";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const currentRoute = navigationConfig.find((item) => item.path === location.pathname);

  return (
    <div className="h-screen w-full">
      <div className="grid h-full grid-cols-[auto_1fr]">
        <Navigation />
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={40} minSize={30}>
            <ChatPanel />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={60}>
            <div className="h-full flex flex-col">
              <TabView tabs={currentRoute?.tabs || []} />
              <div className="flex-1 p-6 overflow-auto">
                {children}
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}