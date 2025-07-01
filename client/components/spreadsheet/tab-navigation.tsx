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
    <div className="flex items-center border-t border-gray-200 bg-white px-6 py-0">
      <div className="flex items-center">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            size="sm"
            onClick={() => onTabChange(tab.id)}
            className={`text-sm px-4 py-2 h-auto rounded-none border-b-2 ${
              tab.active
                ? "text-blue-600 border-blue-600 bg-transparent"
                : "text-gray-600 border-transparent hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </Button>
        ))}
        <Button
          variant="ghost"
          size="sm"
          onClick={onAddTab}
          className="text-gray-500 hover:text-gray-700 h-auto p-2 ml-1"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
