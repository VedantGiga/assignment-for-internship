import { useState } from "react";
import { Header } from "./header";
import { Toolbar } from "./toolbar";
import { SpreadsheetTable } from "./spreadsheet-table";
import { TabNavigation } from "./tab-navigation";
import {
  mockData,
  tabsData,
  type SpreadsheetRow,
} from "@/lib/spreadsheet-data";

export function SpreadsheetLayout() {
  const [data, setData] = useState<SpreadsheetRow[]>(mockData);
  const [tabs, setTabs] = useState(tabsData);

  const handleRowUpdate = (id: string, updates: Partial<SpreadsheetRow>) => {
    setData((prev) =>
      prev.map((row) => (row.id === id ? { ...row, ...updates } : row)),
    );
  };

  const handleTabChange = (tabId: string) => {
    setTabs((prev) =>
      prev.map((tab) => ({ ...tab, active: tab.id === tabId })),
    );
    console.log("Tab changed to:", tabId);
  };

  const handleAddTab = () => {
    console.log("Add new tab");
  };

  const toolbarActions = {
    onSort: () => console.log("Sort clicked"),
    onFilter: () => console.log("Filter clicked"),
    onHideFields: () => console.log("Hide fields clicked"),
    onCellView: () => console.log("Cell view clicked"),
    onImport: () => console.log("Import clicked"),
    onExport: () => console.log("Export clicked"),
    onShare: () => console.log("Share clicked"),
    onNewAction: () => console.log("New action clicked"),
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      <Header />
      <Toolbar {...toolbarActions} />
      <div className="flex-1 flex flex-col min-h-0">
        <SpreadsheetTable data={data} onRowUpdate={handleRowUpdate} />
      </div>
      <TabNavigation
        tabs={tabs}
        onTabChange={handleTabChange}
        onAddTab={handleAddTab}
      />
    </div>
  );
}
