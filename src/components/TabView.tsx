import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabItem } from "@/lib/config";
import { useState } from "react";

export default function TabView({ tabs }: { tabs: TabItem[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <div className="border-b px-6 py-2">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}