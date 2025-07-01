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
    <div className="flex items-center justify-between px-4 py-1.5 border-b border-gray-200 bg-white min-h-[44px]">
      <div className="flex items-center gap-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 h-8 px-2 text-sm text-gray-700 hover:bg-gray-100 font-normal"
            >
              Tool bar
              <ChevronDown className="h-3.5 w-3.5" />
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
          className="gap-1 h-8 px-2 text-sm text-gray-700 hover:bg-gray-100 font-normal"
        >
          <EyeOff className="h-3.5 w-3.5" />
          Hide fields
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onSort}
          className="gap-1 h-8 px-2 text-sm text-gray-700 hover:bg-gray-100 font-normal"
        >
          <ArrowUpDown className="h-3.5 w-3.5" />
          Sort
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onFilter}
          className="gap-1 h-8 px-2 text-sm text-gray-700 hover:bg-gray-100 font-normal"
        >
          <Filter className="h-3.5 w-3.5" />
          Filter
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onCellView}
          className="gap-1 h-8 px-2 text-sm text-gray-700 hover:bg-gray-100 font-normal"
        >
          <Grid3X3 className="h-3.5 w-3.5" />
          Cell view
        </Button>
      </div>

      <div className="flex items-center gap-0">
        <Button
          variant="ghost"
          size="sm"
          onClick={onImport}
          className="gap-1 h-8 px-2 text-sm text-gray-700 hover:bg-gray-100 font-normal"
        >
          <Upload className="h-3.5 w-3.5" />
          Import
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onExport}
          className="gap-1 h-8 px-2 text-sm text-gray-700 hover:bg-gray-100 font-normal"
        >
          <Download className="h-3.5 w-3.5" />
          Export
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onShare}
          className="gap-1 h-8 px-2 text-sm text-gray-700 hover:bg-gray-100 font-normal"
        >
          <Share className="h-3.5 w-3.5" />
          Share
        </Button>

        <Button
          variant="default"
          size="sm"
          onClick={onNewAction}
          className="gap-1 bg-green-600 hover:bg-green-700 h-8 px-2 text-sm text-white font-normal ml-1"
        >
          <Plus className="h-3.5 w-3.5" />
          New Action
        </Button>
      </div>
    </div>
  );
}
