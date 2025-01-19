import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { TabItem } from "@/lib/config";
import { useState } from "react";

export default function TabView({ tabs }: { tabs: TabItem[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <div className="flex flex-col h-full">
      <div className="border-b px-6 py-2">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className="mt-4 space-y-4"
            >
              {tab.content.map((item, index) => {
                const Component = item.component;
                return (
                  <Component
                    key={`${tab.id}-component-${index}`}
                    {...item.config.props}
                    data={item.config.data}
                  />
                );
              })}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}