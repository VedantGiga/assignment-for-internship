import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { StatusBadge } from "@/components/ui/status-badge";
import { PriorityBadge } from "@/components/ui/priority-badge";
import { RowTypeBadge } from "@/components/ui/row-type-badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ExternalLink, Plus } from "lucide-react";
import type { SpreadsheetRow } from "@/lib/spreadsheet-data";

interface SpreadsheetTableProps {
  data: SpreadsheetRow[];
  onRowUpdate: (id: string, updates: Partial<SpreadsheetRow>) => void;
}

export function SpreadsheetTable({ data, onRowUpdate }: SpreadsheetTableProps) {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(data.map((row) => row.id)));
      data.forEach((row) => {
        onRowUpdate(row.id, { selected: true });
      });
    } else {
      setSelectedRows(new Set());
      data.forEach((row) => {
        onRowUpdate(row.id, { selected: false });
      });
    }
  };

  const handleSelectRow = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedRows(newSelected);
    onRowUpdate(id, { selected: checked });
  };

  return (
    <div className="flex-1 overflow-auto bg-white">
      <div className="min-w-[1200px]">
        <Table className="spreadsheet-table">
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b border-gray-200 bg-gray-50 h-9">
              <TableHead className="w-10 h-9 px-2 py-1">
                <Checkbox
                  checked={data.length > 0 && selectedRows.size === data.length}
                  onCheckedChange={handleSelectAll}
                  aria-label="Select all"
                  className="h-4 w-4"
                />
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-600 h-9 px-2 py-1">
                <div className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-center font-medium text-xs">
                  ABC
                </div>
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-600 h-9 px-2 py-1">
                <div className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded text-center font-medium text-xs">
                  Answer a question
                </div>
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-600 h-9 px-2 py-1">
                <div className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-center font-medium text-xs">
                  Extract
                </div>
              </TableHead>
              <TableHead className="w-6 h-9 px-1"></TableHead>
              <TableHead className="text-xs font-medium text-gray-600 h-9 px-2 py-1">
                Submitted
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-600 h-9 px-2 py-1">
                Status
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-600 h-9 px-2 py-1">
                Submitter
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-600 h-9 px-2 py-1">
                URL
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-600 h-9 px-2 py-1">
                Assigned
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-600 h-9 px-2 py-1">
                Priority
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-600 h-9 px-2 py-1">
                Due Date
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-600 h-9 px-2 py-1">
                Est. Value
              </TableHead>
              <TableHead className="w-6 h-9 px-1 py-1">
                <Button variant="ghost" size="icon" className="h-5 w-5">
                  <Plus className="h-3 w-3 text-gray-400" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                className="hover:bg-gray-50 border-b border-gray-100 h-11"
              >
                <TableCell className="px-2 py-1">
                  <Checkbox
                    checked={selectedRows.has(row.id)}
                    onCheckedChange={(checked) =>
                      handleSelectRow(row.id, checked as boolean)
                    }
                    aria-label={`Select row ${row.id}`}
                    className="h-4 w-4"
                  />
                </TableCell>
                <TableCell className="px-2 py-1">
                  <RowTypeBadge rowType={row.rowType} />
                </TableCell>
                <TableCell className="font-normal text-sm text-gray-900 px-2 py-1 max-w-[280px]">
                  <div className="truncate">{row.description}</div>
                </TableCell>
                <TableCell className="px-2 py-1">
                  <div className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center">
                    <MoreHorizontal className="h-3 w-3 text-gray-500" />
                  </div>
                </TableCell>
                <TableCell className="px-1 py-1">
                  <Button variant="ghost" size="icon" className="h-5 w-5">
                    <MoreHorizontal className="h-3 w-3" />
                  </Button>
                </TableCell>
                <TableCell className="text-sm text-gray-700 px-2 py-1 font-normal">
                  {row.submitted}
                </TableCell>
                <TableCell className="px-2 py-1">
                  <StatusBadge status={row.status} />
                </TableCell>
                <TableCell className="text-sm text-gray-700 px-2 py-1 font-normal">
                  {row.submitter}
                </TableCell>
                <TableCell className="px-2 py-1">
                  <div className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                    <span className="truncate max-w-[120px] font-normal">
                      {row.url}
                    </span>
                    <ExternalLink className="h-3 w-3 flex-shrink-0" />
                  </div>
                </TableCell>
                <TableCell className="text-sm text-gray-700 px-2 py-1 font-normal">
                  {row.assigned}
                </TableCell>
                <TableCell className="px-2 py-1">
                  <PriorityBadge priority={row.priority} />
                </TableCell>
                <TableCell className="text-sm text-gray-700 px-2 py-1 font-normal">
                  {row.dueDate}
                </TableCell>
                <TableCell className="text-sm font-normal text-gray-900 px-2 py-1">
                  {row.estValue}
                </TableCell>
                <TableCell className="px-2 py-1"></TableCell>
              </TableRow>
            ))}

            {/* Empty rows for spreadsheet feel */}
            {Array.from({ length: 20 }, (_, i) => (
              <TableRow
                key={`empty-${i}`}
                className="hover:bg-gray-50 border-b border-gray-100 h-11"
              >
                <TableCell className="px-2 py-1"></TableCell>
                <TableCell className="px-2 py-1"></TableCell>
                <TableCell className="px-2 py-1"></TableCell>
                <TableCell className="px-2 py-1"></TableCell>
                <TableCell className="px-1 py-1"></TableCell>
                <TableCell className="px-2 py-1"></TableCell>
                <TableCell className="px-2 py-1"></TableCell>
                <TableCell className="px-2 py-1"></TableCell>
                <TableCell className="px-2 py-1"></TableCell>
                <TableCell className="px-2 py-1"></TableCell>
                <TableCell className="px-2 py-1"></TableCell>
                <TableCell className="px-2 py-1"></TableCell>
                <TableCell className="px-2 py-1"></TableCell>
                <TableCell className="px-2 py-1"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
