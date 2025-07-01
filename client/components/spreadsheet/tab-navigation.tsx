import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  active: boolean;
}

interface TabNavigationProps {
  tabs: Tab[];
  onTabChange: (tabId: string) => void;
  onAddTab: () => void;
}

export function TabNavigation({
  tabs,
  onTabChange,
  onAddTab,
}: TabNavigationProps) {
  return (
    <div className="flex items-center border-t bg-white px-6 py-2">
      <div className="flex items-center gap-1">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={tab.active ? "secondary" : "ghost"}
            size="sm"
            onClick={() => onTabChange(tab.id)}
            className={`text-sm px-3 py-1.5 h-auto ${
              tab.active
                ? "bg-gray-100 text-gray-900 border-b-2 border-blue-500"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </Button>
        ))}
        <Button
          variant="ghost"
          size="sm"
          onClick={onAddTab}
          className="text-gray-500 hover:text-gray-700 h-auto p-1"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
