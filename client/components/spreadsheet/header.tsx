import { ChevronRight, Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <div className="border-b bg-white px-3 sm:px-6 py-3">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm min-w-0">
          <span className="text-blue-600 hover:text-blue-800 cursor-pointer hidden sm:inline">
            Workspaces
          </span>
          <ChevronRight className="h-4 w-4 text-gray-400 hidden sm:inline" />
          <span className="text-blue-600 hover:text-blue-800 cursor-pointer hidden md:inline">
            Folder 2
          </span>
          <ChevronRight className="h-4 w-4 text-gray-400 hidden md:inline" />
          <span className="font-medium text-gray-900 truncate">
            Spreadsheet 3
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search within sheet"
              className="pl-10 w-48 lg:w-64 h-8 text-sm"
            />
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bell className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-medium hidden sm:inline">
              John Doe
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
