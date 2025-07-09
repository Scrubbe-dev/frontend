"use client";
import { SearchIcon } from "lucide-react";
import CButton from "../ui/Cbutton";
import Input from "../ui/input";
import { CellContext } from "@tanstack/react-table";
import { Table } from "../ui/table";
import clsx from "clsx";
import AdvanceFilter from "./AdvanceFilter";
import React, { useState, useRef, useEffect } from "react";
import Pagination from "../alert-setting/Pagination";
import NotificationSettings from "./NotificationSettings";
import CreateIncident from "./CreateIncident";
import MangePlaybook from "./MangePlaybook";
import TicketDetails from "./TicketDetails";
import IncidentAnalysis from "./IncidentAnalysis";

export type Ticket = {
  id: string;
  reason: string;
  username: string;
  priority: "high" | "medium" | "low";
  status: "open" | "closed" | "in-progress" | "on-hold";
  assignedTo: string;
  score: number;
  createdAt: string;
};

const ticketData: Ticket[] = [
  {
    id: "INC52527",
    reason: "User reported a bug",
    username: "John Doe",
    priority: "medium",
    status: "closed",
    assignedTo: "Admin 1",
    score: 5,
    createdAt: "2025-05-26 09:00:00",
  },
  {
    id: "INC52527",
    reason: "User reported a bug",
    username: "John Doe",
    priority: "high",
    status: "open",
    assignedTo: "Admin 1",
    score: 5,
    createdAt: "2025-05-26 09:00:00",
  },
  {
    id: "INC52527",
    reason: "User reported a bug",
    username: "John Doe",
    priority: "low",
    status: "open",
    assignedTo: "Admin 1",
    score: 5,
    createdAt: "2025-05-26 09:00:00",
  },
  {
    id: "INC52527",
    reason: "User reported a bug",
    username: "John Doe",
    priority: "high",
    status: "in-progress",
    assignedTo: "Admin 1",
    score: 5,
    createdAt: "2025-05-26 09:00:00",
  },
  {
    id: "INC52527",
    reason: "User reported a bug",
    username: "John Doe",
    priority: "high",
    status: "on-hold",
    assignedTo: "Admin 1",
    score: 5,
    createdAt: "2025-05-26 09:00:00",
  },
  {
    id: "INC52527",
    reason: "User reported a bug",
    username: "John Doe",
    priority: "high",
    status: "open",
    assignedTo: "Admin 1",
    score: 5,
    createdAt: "2025-05-26 09:00:00",
  },
  {
    id: "INC52527",
    reason: "User reported a bug",
    username: "John Doe",
    priority: "high",
    status: "open",
    assignedTo: "Admin 1",
    score: 5,
    createdAt: "2025-05-26 09:00:00",
  },
];

const columns = [
  {
    accessorKey: "id",
    header: () => <span className="font-semibold">Incident ID</span>,
    cell: (info: CellContext<Ticket, unknown>) => info.getValue(),
  },

  {
    accessorKey: "username",
    header: () => <span className="font-semibold">Username</span>,
    cell: (info: CellContext<Ticket, unknown>) => info.getValue(),
  },
  {
    accessorKey: "reason",
    header: () => <span className="font-semibold">Reason</span>,
    cell: (info: CellContext<Ticket, unknown>) => info.getValue(),
  },
  {
    accessorKey: "priority",
    header: () => <span className="font-semibold">Priority</span>,
    cell: (info: CellContext<Ticket, unknown>) => (
      <div className="flex items-center gap-2">
        {priorityColors(info.getValue() as string)}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <span className="font-semibold">Status</span>,
    cell: (info: CellContext<Ticket, unknown>) => (
      <div className="flex items-center gap-2">
        {statusColors(info.getValue() as string)}
      </div>
    ),
  },
  {
    accessorKey: "assignedTo",
    header: () => <span className="font-semibold">Assigned To</span>,
    cell: (info: CellContext<Ticket, unknown>) => info.getValue(),
  },
  {
    accessorKey: "score",
    header: () => <span className="font-semibold">Score</span>,
    cell: (info: CellContext<Ticket, unknown>) => info.getValue(),
  },
  {
    accessorKey: "createdAt",
    header: () => <span className="font-semibold">Created At</span>,
    cell: (info: CellContext<Ticket, unknown>) => info.getValue(),
  },
];

const statusColors = (status: string) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={clsx(
          "px-3 py-1 rounded-md capitalize",
          status === "open"
            ? "bg-red-100 text-red-500"
            : status === "closed"
            ? "bg-green-100 text-green-500"
            : status === "in-progress"
            ? "bg-indigo-100 text-indigo-500"
            : "bg-yellow-100 text-yellow-500"
        )}
      >
        {status}
      </div>
    </div>
  );
};

const priorityColors = (priority: string) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={clsx(
          "px-3 py-1 rounded-md capitalize",
          priority === "high"
            ? "bg-red-100 text-red-500"
            : priority === "medium"
            ? "bg-yellow-100 text-yellow-500"
            : "bg-gray-100 text-gray-500"
        )}
      >
        {priority}
      </div>
    </div>
  );
};

const IncidentTicketPage = () => {
  const [isAdvanceFilterOpen, setIsAdvanceFilterOpen] = useState(false);
  const [isNotificationSettingsOpen, setIsNotificationSettingsOpen] =
    useState(false);
  const [isCreateIncidentOpen, setIsCreateIncidentOpen] = useState(false);
  const [isManagePlaybookOpen, setIsManagePlaybookOpen] = useState(false);
  const [isTicketDetailsOpen, setIsTicketDetailsOpen] = useState(false);
  const [isIncidentAnalysisOpen, setIsIncidentAnalysisOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  // const [statusFilter, setStatusFilter] = useState<string>("");
  const [openStatusFilter, setOpenStatusFilter] = useState<boolean>(false);
  const statusFilterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openStatusFilter) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        statusFilterRef.current &&
        !statusFilterRef.current.contains(event.target as Node)
      ) {
        setOpenStatusFilter(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openStatusFilter]);

  const handleRowClick = (ticket: Ticket) => {
    console.log(ticket);
    setSelectedTicket(ticket);
    setIsTicketDetailsOpen(true);
  };
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold dark:text-white text-black">
          Incident Ticket Management
        </div>
      </div>

      <div className="mt-5 dark:bg-dark bg-white p-6  space-y-5 h-full rounded-xl">
        <div className="flex gap-2">
          <CButton className="w-fit">Incident Tickets</CButton>
          <CButton
            onClick={() => setIsNotificationSettingsOpen(true)}
            className="w-fit border-colorScBlue hover:text-white border bg-transparent text-colorScBlue"
          >
            Notifications{" "}
            <span className=" bg-red-500 text-white h-5 w-5 text-sm rounded-full flex justify-center items-center">
              1
            </span>
          </CButton>
          <CButton
            onClick={() => setIsCreateIncidentOpen(true)}
            className="w-fit border-colorScBlue hover:text-white border bg-transparent text-colorScBlue"
          >
            New Incident
          </CButton>
          <CButton
            onClick={() => setIsIncidentAnalysisOpen(true)}
            className="w-fit border-colorScBlue hover:text-white border bg-transparent text-colorScBlue"
          >
            Analytics
          </CButton>
          <CButton className="w-fit border-colorScBlue hover:text-white border bg-transparent text-colorScBlue">
            Reports
          </CButton>
          <CButton
            onClick={() => setIsManagePlaybookOpen(true)}
            className="w-fit border-colorScBlue hover:text-white border bg-transparent text-colorScBlue"
          >
            Manage Playbooks
          </CButton>
        </div>

        <div className="flex justify-between items-start mb-5">
          <div className="relative w-1/2">
            <Input placeholder="Search Tickets" />
            <div className="absolute right-2 top-2/4 -translate-y-2/3 pb-2">
              <SearchIcon size={20} className="dark:text-white text-black" />
            </div>
          </div>

          <div className="flex gap-2 ">
            <div className="relative" ref={statusFilterRef}>
              <CButton
                onClick={() => setOpenStatusFilter(!openStatusFilter)}
                className="w-fit border-colorScBlue hover:text-white border bg-transparent text-colorScBlue"
              >
                Filter by Status
              </CButton>
              {/* click outside to close */}
              {openStatusFilter && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 text-sm rounded-md shadow-lg">
                  {[
                    { label: "Open", value: "open" },
                    { label: "Closed", value: "closed" },
                    { label: "In Progress", value: "in-progress" },
                    { label: "On Hold", value: "on-hold" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        // setStatusFilter(option.value);
                        setOpenStatusFilter(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 text-gray-900 first:rounded-t-md last:rounded-b-md"
                      type="button"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <CButton
              onClick={() => setIsAdvanceFilterOpen(true)}
              className="w-fit border-colorScBlue hover:text-white border bg-transparent text-colorScBlue"
            >
              More Filter
            </CButton>
          </div>
        </div>

        <Table
          data={ticketData}
          columns={columns}
          onRowClick={handleRowClick}
        />
        <div className="flex justify-end">
          <Pagination page={1} totalPages={10} onPageChange={() => {}} />
        </div>
        <AdvanceFilter
          isOpen={isAdvanceFilterOpen}
          onClose={() => setIsAdvanceFilterOpen(false)}
        />
        {/* Notification center */}
        <NotificationSettings
          isOpen={isNotificationSettingsOpen}
          onClose={() => setIsNotificationSettingsOpen(false)}
        />
        <CreateIncident
          isOpen={isCreateIncidentOpen}
          onClose={() => setIsCreateIncidentOpen(false)}
        />
        <MangePlaybook
          isOpen={isManagePlaybookOpen}
          onClose={() => setIsManagePlaybookOpen(false)}
        />
        {selectedTicket && (
          <TicketDetails
            isOpen={isTicketDetailsOpen}
            onClose={() => setIsTicketDetailsOpen(false)}
            ticket={selectedTicket}
          />
        )}
        <IncidentAnalysis
          isOpen={isIncidentAnalysisOpen}
          onClose={() => setIsIncidentAnalysisOpen(false)}
        />
      </div>
    </div>
  );
};

export default IncidentTicketPage;
