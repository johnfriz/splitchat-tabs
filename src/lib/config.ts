import { Home, MessageSquare, Settings } from "lucide-react";
import { ComponentType } from "react";

// Component configurations
export type ComponentConfig = {
  type: string;
  props?: Record<string, any>;
  data?: any;
};

export type TabContent = {
  component: ComponentType<any>;
  config: ComponentConfig;
};

export type TabItem = {
  title: string;
  id: string;
  content: TabContent[];
};

export type NavItem = {
  title: string;
  path: string;
  icon: any;
  tabs: TabItem[];
};

// Mock data for components
export const mockData = {
  overview: {
    stats: [
      { label: "Total Users", value: 1234 },
      { label: "Active Sessions", value: 56 },
      { label: "Revenue", value: "$12,345" },
    ],
    recentActivity: [
      { id: 1, action: "User Login", timestamp: "2024-02-20T10:00:00" },
      { id: 2, action: "Purchase", timestamp: "2024-02-20T09:45:00" },
      { id: 3, action: "New Registration", timestamp: "2024-02-20T09:30:00" },
    ],
  },
  messages: {
    conversations: [
      { id: 1, user: "John Doe", message: "Hello there!", time: "10:00 AM" },
      { id: 2, user: "Jane Smith", message: "Good morning!", time: "09:45 AM" },
    ],
  },
  settings: {
    preferences: {
      theme: "dark",
      notifications: true,
      language: "en",
    },
  },
};

// Component definitions
import StatsCard from "../components/StatsCard";
import ActivityList from "../components/ActivityList";
import MessageList from "../components/MessageList";
import PreferencesForm from "../components/PreferencesForm";

export const navigationConfig: NavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: Home,
    tabs: [
      {
        title: "Overview",
        id: "overview",
        content: [
          {
            component: StatsCard,
            config: {
              type: "stats",
              data: mockData.overview.stats,
            },
          },
          {
            component: ActivityList,
            config: {
              type: "activity",
              data: mockData.overview.recentActivity,
            },
          },
        ],
      },
      {
        title: "Details",
        id: "details",
        content: [],
      },
    ],
  },
  {
    title: "Chat",
    path: "/chat",
    icon: MessageSquare,
    tabs: [
      {
        title: "Messages",
        id: "messages",
        content: [
          {
            component: MessageList,
            config: {
              type: "messages",
              data: mockData.messages.conversations,
            },
          },
        ],
      },
      {
        title: "Contacts",
        id: "contacts",
        content: [],
      },
    ],
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
    tabs: [
      {
        title: "General",
        id: "general",
        content: [
          {
            component: PreferencesForm,
            config: {
              type: "preferences",
              data: mockData.settings.preferences,
            },
          },
        ],
      },
      {
        title: "Profile",
        id: "profile",
        content: [],
      },
    ],
  },
];