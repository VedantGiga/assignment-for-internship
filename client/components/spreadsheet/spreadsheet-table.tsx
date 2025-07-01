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
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ExternalLink } from "lucide-react";
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
    <div className="flex-1 overflow-auto">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-b-2">
            <TableHead className="w-12">
              <Checkbox
                checked={data.length > 0 && selectedRows.size === data.length}
                onCheckedChange={handleSelectAll}
                aria-label="Select all"
              />
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              ABC
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wide min-w-[200px]">
              Answer a question
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Extract
            </TableHead>
            <TableHead className="w-12"></TableHead>
            <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Submitted
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Status
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Submitter
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              URL
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Assigned
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Priority
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Due Date
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Est. Value
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} className="hover:bg-gray-50 border-b group">
              <TableCell>
                <Checkbox
                  checked={selectedRows.has(row.id)}
                  onCheckedChange={(checked) =>
                    handleSelectRow(row.id, checked as boolean)
                  }
                  aria-label={`Select row ${row.id}`}
                />
              </TableCell>
              <TableCell className="text-center">
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-medium">
                  {row.id}
                </div>
              </TableCell>
              <TableCell className="font-medium text-sm">
                {row.description}
              </TableCell>
              <TableCell>
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <MoreHorizontal className="h-4 w-4 text-gray-500" />
                </div>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                {row.submitted}
              </TableCell>
              <TableCell>
                <StatusBadge status={row.status} />
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                {row.submitter}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800">
                  <span className="truncate max-w-[100px]">{row.url}</span>
                  <ExternalLink className="h-3 w-3 flex-shrink-0" />
                </div>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                {row.assigned}
              </TableCell>
              <TableCell>
                <PriorityBadge priority={row.priority} />
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                {row.dueDate}
              </TableCell>
              <TableCell className="text-sm font-medium">
                {row.estValue}
              </TableCell>
            </TableRow>
          ))}

          {/* Empty rows for spreadsheet feel */}
          {Array.from({ length: 15 }, (_, i) => (
            <TableRow key={`empty-${i}`} className="hover:bg-gray-50 border-b">
              <TableCell></TableCell>
              <TableCell className="text-center">
                <div className="w-8 h-8 bg-gray-50 rounded flex items-center justify-center text-xs text-gray-400">
                  {data.length + i + 1}
                </div>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
