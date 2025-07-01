import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  EyeOff,
  ArrowUpDown,
  Filter,
  Grid3X3,
  Download,
  Upload,
  Share,
  Plus,
} from "lucide-react";

interface ToolbarProps {
  onSort: () => void;
  onFilter: () => void;
  onHideFields: () => void;
  onCellView: () => void;
  onImport: () => void;
  onExport: () => void;
  onShare: () => void;
  onNewAction: () => void;
}

export function Toolbar({
  onSort,
  onFilter,
  onHideFields,
  onCellView,
  onImport,
  onExport,
  onShare,
  onNewAction,
}: ToolbarProps) {
  return (
    <div className="flex items-center justify-between px-3 sm:px-6 py-3 border-b bg-white overflow-x-auto">
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="gap-1">
              Tool bar
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={onSort}>
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Sort
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onFilter}>
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onHideFields}>
              <EyeOff className="h-4 w-4 mr-2" />
              Hide fields
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onCellView}>
              <Grid3X3 className="h-4 w-4 mr-2" />
              Cell view
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="ghost"
          size="sm"
          onClick={onHideFields}
          className="gap-1"
        >
          <EyeOff className="h-4 w-4" />
          Hide fields
        </Button>

        <Button variant="ghost" size="sm" onClick={onSort} className="gap-1">
          <ArrowUpDown className="h-4 w-4" />
          Sort
        </Button>

        <Button variant="ghost" size="sm" onClick={onFilter} className="gap-1">
          <Filter className="h-4 w-4" />
          Filter
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onCellView}
          className="gap-1"
        >
          <Grid3X3 className="h-4 w-4" />
          Cell view
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={onImport} className="gap-1">
          <Upload className="h-4 w-4" />
          Import
        </Button>

        <Button variant="ghost" size="sm" onClick={onExport} className="gap-1">
          <Download className="h-4 w-4" />
          Export
        </Button>

        <Button variant="ghost" size="sm" onClick={onShare} className="gap-1">
          <Share className="h-4 w-4" />
          Share
        </Button>

        <Button
          variant="default"
          size="sm"
          onClick={onNewAction}
          className="gap-1 bg-green-600 hover:bg-green-700"
        >
          <Plus className="h-4 w-4" />
          New Action
        </Button>
      </div>
    </div>
  );
}
