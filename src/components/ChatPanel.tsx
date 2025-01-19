import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function ChatPanel() {
  return (
    <div className="h-full flex flex-col">
      <div className="border-b p-4">
        <h2 className="font-semibold">Chat</h2>
      </div>
      <div className="flex-1 p-4 overflow-auto">
        {/* Chat messages will go here */}
      </div>
      <div className="border-t p-4">
        <form className="flex gap-2">
          <Input placeholder="Type a message..." className="flex-1" />
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}