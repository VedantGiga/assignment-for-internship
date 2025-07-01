import { Badge } from "./badge";
import { cn } from "@/lib/utils";
import type { PriorityType } from "@/lib/spreadsheet-data";

interface PriorityBadgeProps {
  priority: PriorityType;
  className?: string;
}

const priorityConfig = {
  high: {
    label: "High",
    className: "bg-red-100 text-red-800 border border-red-200",
  },
  medium: {
    label: "Medium",
    className: "bg-yellow-100 text-yellow-800 border border-yellow-200",
  },
  low: {
    label: "Low",
    className: "bg-green-100 text-green-800 border border-green-200",
  },
};

export function PriorityBadge({ priority, className }: PriorityBadgeProps) {
  const config = priorityConfig[priority];

  return (
    <Badge
      variant="outline"
      className={cn(
        "font-normal px-2 py-0.5 text-xs rounded",
        config.className,
        className,
      )}
    >
      {config.label}
    </Badge>
  );
}
