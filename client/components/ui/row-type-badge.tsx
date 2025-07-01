import { Badge } from "./badge";
import { cn } from "@/lib/utils";
import type { RowType } from "@/lib/spreadsheet-data";

interface RowTypeBadgeProps {
  rowType: RowType;
  className?: string;
}

const rowTypeConfig = {
  "financial-overview": {
    label: "Financial Overview",
    className: "bg-blue-50 text-blue-700 border-blue-200",
  },
  "job-request": {
    label: "Job Request",
    className: "bg-gray-50 text-gray-700 border-gray-200",
  },
};

export function RowTypeBadge({ rowType, className }: RowTypeBadgeProps) {
  const config = rowTypeConfig[rowType];

  return (
    <Badge
      variant="outline"
      className={cn(
        "font-normal px-2 py-0.5 text-xs border",
        config.className,
        className,
      )}
    >
      {config.label}
    </Badge>
  );
}
