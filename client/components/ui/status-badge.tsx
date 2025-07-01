import { Badge } from "./badge";
import { cn } from "@/lib/utils";
import type { StatusType } from "@/lib/spreadsheet-data";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const statusConfig = {
  complete: {
    label: "Complete",
    className: "bg-status-complete text-status-complete-foreground",
  },
  "in-progress": {
    label: "In progress",
    className: "bg-status-in-progress text-status-in-progress-foreground",
  },
  blocked: {
    label: "Blocked",
    className: "bg-status-blocked text-status-blocked-foreground",
  },
  "need-to-start": {
    label: "Need to start",
    className: "bg-status-need-to-start text-status-need-to-start-foreground",
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];

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
