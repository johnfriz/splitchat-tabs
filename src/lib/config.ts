import { Home, MessageSquare, Settings } from "lucide-react";

export type NavItem = {
  title: string;
  path: string;
  icon: any;
  tabs: TabItem[];
};

export type TabItem = {
  title: string;
  id: string;
};

export const navigationConfig: NavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: Home,
    tabs: [
      { title: "Overview", id: "overview" },
      { title: "Details", id: "details" },
    ],
  },
  {
    title: "Chat",
    path: "/chat",
    icon: MessageSquare,
    tabs: [
      { title: "Messages", id: "messages" },
      { title: "Contacts", id: "contacts" },
    ],
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
    tabs: [
      { title: "General", id: "general" },
      { title: "Profile", id: "profile" },
    ],
  },
];