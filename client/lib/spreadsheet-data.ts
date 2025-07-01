export type StatusType =
  | "complete"
  | "in-progress"
  | "blocked"
  | "need-to-start";
export type PriorityType = "high" | "medium" | "low";
export type RowType = "financial-overview" | "job-request";

export interface SpreadsheetRow {
  id: string;
  selected: boolean;
  rowType: RowType;
  description: string;
  submitted: string;
  status: StatusType;
  submitter: string;
  url: string;
  assigned: string;
  priority: PriorityType;
  dueDate: string;
  estValue: string;
}

export const mockData: SpreadsheetRow[] = [
  {
    id: "1",
    selected: false,
    description: "Launch social media campaign for product...",
    submitted: "19-10-2024",
    status: "complete",
    submitter: "Irfan Khan",
    url: "www.irfankhandigital...",
    assigned: "Sophie O'Connry",
    priority: "medium",
    dueDate: "20-11-2024",
    estValue: "2,500,000",
  },
  {
    id: "2",
    selected: false,
    description: "Update press kit for company rebrand",
    submitted: "19-10-2024",
    status: "need-to-start",
    submitter: "Irfan Khan",
    url: "www.irfankhandigital...",
    assigned: "Tania Pensley",
    priority: "high",
    dueDate: "30-10-2024",
    estValue: "3,500,000",
  },
  {
    id: "3",
    selected: false,
    description: "Finalize user testing feedback for app...",
    submitted: "05-12-2024",
    status: "in-progress",
    submitter: "Mark Johnson",
    url: "www.markjohnstone...",
    assigned: "Rachel Lee",
    priority: "medium",
    dueDate: "16-12-2024",
    estValue: "4,750,000",
  },
  {
    id: "4",
    selected: false,
    description: "Design new features for the website",
    submitted: "10-01-2025",
    status: "complete",
    submitter: "Emily Green",
    url: "www.emilygreen...",
    assigned: "Tom Wright",
    priority: "low",
    dueDate: "15-01-2025",
    estValue: "6,900,000",
  },
  {
    id: "5",
    selected: false,
    description: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrownco...",
    assigned: "Kevin Smith",
    priority: "low",
    dueDate: "30-01-2025",
    estValue: "2,800,000",
  },
];

export const tabsData = [
  { id: "all-orders", label: "All Orders", active: true },
  { id: "pending", label: "Pending", active: false },
  { id: "reviewed", label: "Reviewed", active: false },
  { id: "arrived", label: "Arrived", active: false },
];
