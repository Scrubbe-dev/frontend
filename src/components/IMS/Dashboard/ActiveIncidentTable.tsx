"use client";
import { CellContext } from "@tanstack/react-table";
import React from "react";
import { Ticket } from "../IncidateTicketPage";
import clsx from "clsx";
import { Table } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { useFetch } from "@/hooks/useFetch";
import { endpoint } from "@/lib/api/endpoint";
import { querykeys } from "@/lib/constant";
import moment from "moment";
import Select from "@/components/ui/select";

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
const ActiveIncidentTable = () => {
  const { get } = useFetch();
  const { data } = useQuery({
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
    refetchOnWindowFocus: false,
  });

  const columns = [
    {
      accessorKey: "ticketId",
      header: () => <span className="font-semibold">Incident ID</span>,
      cell: (info: CellContext<Ticket, unknown>) => info.getValue(),
    },

    {
      accessorKey: "reason",
      header: () => <span className="font-semibold">Short Description</span>,
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
      accessorKey: "createdAt",
      header: () => <span className="font-semibold">Date Opened</span>,
      cell: (info: CellContext<Ticket, unknown>) =>
        moment(info.getValue() as string).fromNow(),
    },
    {
      accessorKey: "assignedToEmail",
      header: () => <span className="font-semibold">Assigned to</span>,
      cell: (info: CellContext<Ticket, unknown>) => {
        console.log({ info });
        const currentId = info.row.original.id;

        const teams = [
          {
            first_name: "Jane",
            last_name: "morakinyo",
            id: "1",
            email: "olamidemoraks@gmail.com",
          },
          {
            first_name: "david",
            last_name: "morakinyo",
            id: "1",
            email: "olamidemoraks@gmail.com",
          },
          {
            first_name: "david",
            last_name: "morakinyo",
            id: "1",
            email: "olamidemoraks@gmail.com",
          },
          {
            first_name: "david",
            last_name: "morakinyo",
            id: "1",
            email: "olamidemoraks@gmail.com",
          },
        ];

        const handleOnchange = (value: string) => {
          reassignTicketToTeam(currentId, value);
        };

        return (
          <div className=" max-w-sm">
            <Select
              options={teams.map((item) => ({
                label: item.first_name + " " + item.last_name,
                value: item.id,
              }))}
              onChange={(e) => handleOnchange(e.target.value)}
            />
          </div>
        );
      },
    },
  ];

  const reassignTicketToTeam = (id: string, teamId: string) => {
    console.log(id, teamId);
  };

  return (
    <div className=" bg-white p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Active Incidents Feed
      </h2>
      <Table data={data} columns={columns} />
    </div>
  );
};

export default ActiveIncidentTable;
