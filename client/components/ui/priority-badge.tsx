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
    className: "bg-priority-high text-priority-high-foreground",
  },
  medium: {
    label: "Medium",
    className: "bg-priority-medium text-priority-medium-foreground",
  },
  low: {
    label: "Low",
    className: "bg-priority-low text-priority-low-foreground",
  },
};

export function PriorityBadge({ priority, className }: PriorityBadgeProps) {
  const config = priorityConfig[priority];

  return (
    <Badge
      variant="outline"
      className={cn(
        "border-0 font-medium px-2 py-1 text-xs",
        config.className,
        className,
      )}
    >
      {config.label}
    </Badge>
  );
}
