/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { SearchIcon } from "lucide-react";
import CButton from "../ui/Cbutton";
import Input from "../ui/input";
import { CellContext } from "@tanstack/react-table";
import { Table } from "../ui/table";
import clsx from "clsx";
import AdvanceFilter from "./AdvanceFilter";
import React, { useState, useRef, useEffect, ReactNode } from "react";
import Pagination from "../alert-setting/Pagination";
import NotificationSettings from "./NotificationSettings";
import CreateIncident from "./CreateIncident";
import MangePlaybook from "./MangePlaybook";
import TicketDetails from "./TicketDetails";
import IncidentAnalysis from "./IncidentAnalysis";
import { useQuery } from "@tanstack/react-query";
import { querykeys } from "@/lib/constant";
import { useFetch } from "@/hooks/useFetch";
import { endpoint } from "@/lib/api/endpoint";
import moment from "moment";
import EmptyState from "@/components/ui/EmptyState";
import TableLoader from "../ui/LoaderUI/TableLoader";
import Integrations from "./Integrations";
import Modal from "../ui/Modal";
export type Ticket = {
  id: string;
  ticketId: string;
  reason: string;
  userName: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  status: "OPEN" | "CLOSED" | "in-progress" | "on-hold";
  assignedToEmail: string;
  score: number;
  createdAt: string;
  recommendedActions: string[];
  riskScore: number;
  businessId: string;
  slaStatus: string;
  template: string;
};

// const ticketData: Ticket[] = [
//   {
//     id: "INC52527",
//     reason: "User reported a bug",
//     username: "John Doe",
//     priority: "medium",
//     status: "closed",
//     assignedTo: "Admin 1",
//     score: 5,
//     createdAt: "2025-05-26 09:00:00",
//   },
//   {
//     id: "INC52527",
//     reason: "User reported a bug",
//     username: "John Doe",
//     priority: "high",
//     status: "open",
//     assignedTo: "Admin 1",
//     score: 5,
//     createdAt: "2025-05-26 09:00:00",
//   },
//   {
//     id: "INC52527",
//     reason: "User reported a bug",
//     username: "John Doe",
//     priority: "low",
//     status: "open",
//     assignedTo: "Admin 1",
//     score: 5,
//     createdAt: "2025-05-26 09:00:00",
//   },
//   {
//     id: "INC52527",
//     reason: "User reported a bug",
//     username: "John Doe",
//     priority: "high",
//     status: "in-progress",
//     assignedTo: "Admin 1",
//     score: 5,
//     createdAt: "2025-05-26 09:00:00",
//   },
//   {
//     id: "INC52527",
//     reason: "User reported a bug",
//     username: "John Doe",
//     priority: "high",
//     status: "on-hold",
//     assignedTo: "Admin 1",
//     score: 5,
//     createdAt: "2025-05-26 09:00:00",
//   },
//   {
//     id: "INC52527",
//     reason: "User reported a bug",
//     username: "John Doe",
//     priority: "high",
//     status: "open",
//     assignedTo: "Admin 1",
//     score: 5,
//     createdAt: "2025-05-26 09:00:00",
//   },
//   {
//     id: "INC52527",
//     reason: "User reported a bug",
//     username: "John Doe",
//     priority: "high",
//     status: "open",
//     assignedTo: "Admin 1",
//     score: 5,
//     createdAt: "2025-05-26 09:00:00",
//   },
// ];

const columns = [
  {
    accessorKey: "ticketId",
    header: () => <span className="font-semibold">Incident ID</span>,
    cell: (info: CellContext<Ticket, unknown>) => info.getValue(),
  },

  {
    accessorKey: "userName",
    header: () => <span className="font-semibold">Username</span>,
    cell: (info: CellContext<Ticket, unknown>) => info.getValue(),
  },
  {
    accessorKey: "reason",
    header: () => <span className="font-semibold">Reason</span>,
    cell: (info: CellContext<Ticket, unknown>) => (
      <div className=" truncate text-nowrap max-w-lg">
        {info.getValue() as string}
      </div>
    ),
  },
  {
    accessorKey: "priority",
    header: () => <span className="font-semibold">Priority</span>,
    cell: (info: CellContext<Ticket, unknown>) => (
      <div className="flex items-center gap-2">
        {priorityColors((info.getValue() as string) ?? "low")}
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
    accessorKey: "assignedToEmail",
    header: () => <span className="font-semibold">Assigned To</span>,
    cell: (info: CellContext<Ticket, unknown>) => info.getValue(),
  },
  {
    accessorKey: "riskScore",
    header: () => <span className="font-semibold">Risk Score</span>,
    cell: (info: CellContext<Ticket, unknown>) => info.getValue(),
  },
  {
    accessorKey: "createdAt",
    header: () => <span className="font-semibold">Created At</span>,
    cell: (info: CellContext<Ticket, unknown>) =>
      moment(info.getValue() as string).format("YYYY-MM-DD"),
  },
];

const statusColors = (status: string) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={clsx(
          "px-3 py-1 rounded-md capitalize",
          status === "OPEN"
            ? "bg-red-100 text-red-500"
            : status === "CLOSED"
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
          priority === "HIGH"
            ? "bg-red-100 text-red-500"
            : priority === "MEDIUM"
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
  const [openStatusFilter, setOpenStatusFilter] = useState<boolean>(false);
  const [openIntegration, setOpenIntegration] = useState(false);

  // const { notification } = useNotificationProvider();

  const statusFilterRef = useRef<HTMLDivElement>(null);
  const { get } = useFetch();
  const { data, isLoading } = useQuery({
    queryKey: [querykeys.INCIDENT_TICKET],
    queryFn: async () => {
      try {
        const res = await get(endpoint.incident_ticket.get);
        console.log({ res });
        if (res.success) {
          return res.data;
        }
        return [];
      } catch (error) {
        console.log(error);
        return [];
      }
    },
  });

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

  let content: ReactNode;
  if (isLoading) {
    content = <TableLoader />;
  }
  if (!isLoading && (!data || data?.length < 1)) {
    content = (
      <EmptyState
        title="You have no incident ticket yet"
        action={
          <CButton
            onClick={() => setIsCreateIncidentOpen(true)}
            className="w-fit border-colorScBlue hover:text-white border bg-transparent text-colorScBlue"
          >
            New Incident
          </CButton>
        }
      />
    );
  }
  if (data?.length > 0) {
    content = (
      <div>
        <Table
          data={data?.map((value: any) => ({ ...value, status: "open" }))}
          columns={columns}
          onRowClick={handleRowClick}
        />
        <div className="flex justify-end mt-10">
          <Pagination page={1} totalPages={10} onPageChange={() => {}} />
        </div>
      </div>
    );
  }
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
            {/* {notification.length > 0 && (
              <span className=" bg-red-500 text-white h-5 w-5 text-sm rounded-full flex justify-center items-center">
                {notification.length}
              </span>
            )} */}
          </CButton>
          <CButton
            onClick={() => setIsCreateIncidentOpen(true)}
            className="w-fit border-colorScBlue hover:text-white border bg-transparent text-colorScBlue"
          >
            New Incident
          </CButton>
          <CButton
            onClick={() => setOpenIntegration(true)}
            className="w-fit border-colorScBlue hover:text-white border bg-transparent text-colorScBlue"
          >
            Integration
          </CButton>{" "}
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

        {content}
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

        <Modal
          isOpen={openIntegration}
          onClose={() => setOpenIntegration(false)}
        >
          <Integrations />
        </Modal>
      </div>
    </div>
  );
};

export default IncidentTicketPage;
