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
    className: "bg-green-100 text-green-800 border border-green-200",
  },
  "in-progress": {
    label: "In progress",
    className: "bg-yellow-100 text-yellow-800 border border-yellow-200",
  },
  blocked: {
    label: "Blocked",
    className: "bg-red-100 text-red-800 border border-red-200",
  },
  "need-to-start": {
    label: "Need to start",
    className: "bg-blue-100 text-blue-800 border border-blue-200",
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
