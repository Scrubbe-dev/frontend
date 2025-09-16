"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Filter, Plus, SearchIcon } from "lucide-react";
import CButton from "../ui/Cbutton";
import { PiExport } from "react-icons/pi";
import clsx from "clsx";
import { CellContext } from "@tanstack/react-table";
import { Ticket } from "./IncidateTicketPage";
import { useFetch } from "@/hooks/useFetch";
import { useQuery } from "@tanstack/react-query";
import { querykeys } from "@/lib/constant";
import { endpoint } from "@/lib/api/endpoint";
import { useRouter } from "next/navigation";
import moment from "moment";
import { Table } from "../ui/table";
import TableLoader from "../ui/LoaderUI/TableLoader";
import EmptyState from "../ui/EmptyState";
import Input from "../ui/input";
import { Button } from "@heroui/react";
import { usePostMortermForm } from "@/lib/stores/post-morterm";

const priorityColors = (priority: string) => {
  return (
    <div className="flex items-center gap-2 ">
      <div
        className={clsx(
          "px-3 py-1 text-xs rounded-md capitalize",
          priority === "CRITICAL"
            ? "bg-red-100 text-red-500"
            : priority === "HIGH"
            ? "text-orange-500 bg-orange-100"
            : priority === "MEDIUM"
            ? "bg-yellow-100 text-yellow-500"
            : priority === "LOW"
            ? "bg-blue-100 text-blue-500"
            : "bg-gray-100 text-gray-500"
        )}
      >
        {priority}
      </div>
    </div>
  );
};

const statusColors = (status: string) => {
  return (
    <div className="flex items-center text-sm gap-2">
      <div
        className={clsx(
          "px-3 py-1 rounded-md capitalize text-xs",
          status === "OPEN"
            ? "bg-red-100 text-red-500"
            : status === "CLOSED"
            ? "bg-gray-100 text-gray-500"
            : status === "ACKNOWLEDGED"
            ? "bg-cyan-100 text-cyan-500"
            : status === "INVESTIGATION"
            ? "bg-amber-100 text-amber-500"
            : status === "MITIGATED"
            ? "bg-orange-100 text-orange-500"
            : status === "RESOLVED"
            ? "bg-emerald-100 text-emerald-500"
            : "bg-gray-100 text-gray-500"
        )}
      >
        {status}
      </div>
    </div>
  );
};

const Postmortems = () => {
  const { get } = useFetch();
  const { setIncidentData } = usePostMortermForm();
  const { data, isLoading } = useQuery({
    queryKey: [querykeys.POSTMORTEM_TICKET],
    queryFn: async () => {
      try {
        const res = await get(
          `${endpoint.incident_ticket.get_postmortems}?status=RESOLVED`
        );
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
    refetchOnWindowFocus: false,
  });

  const incidentTickets = data?.data;

  const router = useRouter();

  const columns = [
    {
      accessorKey: "ticketId",
      header: () => <span className="font-semibold">Incident ID</span>,
      cell: (info: CellContext<Ticket, unknown>) => info.getValue(),
    },

    {
      accessorKey: "reason",
      header: () => <span className="font-semibold">Title</span>,
      cell: (info: CellContext<Ticket, unknown>) => (
        <div className=" truncate text-nowrap max-w-sm">
          {info.getValue() as string}
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
      accessorKey: "priority",
      header: () => <span className="font-semibold">Priority</span>,
      cell: (info: CellContext<Ticket, unknown>) => (
        <div className="flex items-center gap-2">
          {priorityColors((info.getValue() as string) ?? "low")}
        </div>
      ),
    },
    {
      accessorKey: "createdAt",
      header: () => <span className="font-semibold">Date Opened</span>,
      cell: (info: CellContext<Ticket, unknown>) =>
        moment(info.getValue() as string).fromNow(),
    },

    {
      accessorKey: "Action",
      header: () => <span className="font-semibold">Action</span>,
      cell: (info: CellContext<Ticket, unknown>) => {
        const id = info.row.original.ticketId;
        const handleViewDetails = () => {
          setIncidentData(info.row.original);
          router.push("/incident/postmortems/" + id);
        };
        return (
          <div className=" max-w-sm">
            <Button
              onClick={handleViewDetails}
              size="sm"
              className=" text-black"
            >
              View Details
            </Button>
          </div>
        );
      },
    },
  ];

  const statusFilterRef = useRef<HTMLDivElement>(null);
  const [openStatusFilter, setOpenStatusFilter] = useState<boolean>(false);

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

  let content: ReactNode;
  if (isLoading) {
    content = <TableLoader />;
  } else if (!isLoading && (!incidentTickets || incidentTickets?.length < 1)) {
    content = (
      <EmptyState
        title="You have no incident ticket yet"
        action={
          <CButton
            onClick={() => router.push("/portal/tickets")}
            className="w-fit  bg-IMSLightGreen text-white hover:bg-IMSGreen shadow-none"
          >
            Create New Incident <Plus />
          </CButton>
        }
      />
    );
  } else if (!isLoading && (incidentTickets || incidentTickets?.length > 0)) {
    content = (
      <div className=" bg-white p-4">
        <div className="flex justify-between items-start mb-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Resolved Incident
          </h2>

          <div className="flex gap-2 ">
            <div className="relative" ref={statusFilterRef}>
              <CButton
                onClick={() => setOpenStatusFilter(!openStatusFilter)}
                className="w-fit border-green hover:bg-green hover:text-white dark:text-white border bg-transparent text-green"
              >
                Filter by Priority <Filter />
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
          </div>
        </div>
        <Table data={incidentTickets} columns={columns} />
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="text-xl font-bold dark:text-white text-black">
        Postmortems
      </div>

      <div className="flex justify-between items-start my-5">
        <div className="relative w-1/2">
          <Input placeholder="Search Tickets" />
          <div className="absolute right-2 top-2/4 -translate-y-2/3 pb-2">
            <SearchIcon size={18} className="dark:text-white text-black" />
          </div>
        </div>

        <CButton className="w-fit  bg-IMSLightGreen text-white hover:bg-IMSGreen shadow-none">
          Export <PiExport />
        </CButton>
      </div>

      {content}
    </div>
  );
};

export default Postmortems;
