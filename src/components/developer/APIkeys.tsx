"use client";
import React from "react";
import { Table } from "../ui/table";
import Input from "../ui/input";
import Select from "../ui/select";
import CButton from "../ui/Cbutton";
import Modal from "../ui/Modal";
import { CellContext } from "@tanstack/react-table";

interface IAPIKey {
  name: string;
  environment: string;
  endpoint: string;
  responseTime: string;
  status: string;
  action: string;
}

const apiKeys = [
  {
    name: "Production Key",
    environment: "Production",
    endpoint: "2024-01-01",
    responseTime: "2 min ago",
    status: "Active",
  },
  {
    name: "Staging Key",
    environment: "Staging",
    endpoint: "2024-01-01",
    responseTime: "1 hour ago",
    status: "Active",
  },
  {
    name: "Development Key",
    environment: "Development",
    endpoint: "2024-01-01",
    responseTime: "5 min ago",
    status: "Active",
  },
];

const columns = [
  {
    accessorKey: "name",
    header: () => <span className="font-semibold">Key Name</span>,
    cell: (info: CellContext<IAPIKey, unknown>) => info.getValue(),
  },
  {
    accessorKey: "environment",
    header: () => <span className="font-semibold">Environment</span>,
    cell: (info: CellContext<IAPIKey, unknown>) => info.getValue(),
  },
  {
    accessorKey: "endpoint",
    header: () => <span className="font-semibold">Endpoint</span>,
    cell: (info: CellContext<IAPIKey, unknown>) => info.getValue(),
  },
  {
    accessorKey: "responseTime",
    header: () => <span className="font-semibold">Response Time</span>,
    cell: (info: CellContext<IAPIKey, unknown>) => info.getValue(),
  },
  {
    accessorKey: "status",
    header: () => <span className="font-semibold">Status</span>,
    cell: (info: CellContext<IAPIKey, unknown>) => (
      <span className="px-2 py-1 rounded font-semibold text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
        {info.getValue() as string}
      </span>
    ),
  },
  {
    accessorKey: "action",
    header: () => <span className="font-semibold">Action</span>,
    cell: () => (
      <button className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded font-medium text-xs border border-gray-200 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition">
        Rotate
      </button>
    ),
  },
];

const permissionsOptions = [
  { value: "read", label: "Read API" },
  { value: "write", label: "Write API" },
  { value: "admin", label: "Admin API" },
];

const APIkeys = () => {
  const [openGenerate, setOpenGenerate] = React.useState(false);
  const [keyName, setKeyName] = React.useState("");
  const [environment, setEnvironment] = React.useState("Production");
  const [permissions, setPermissions] = React.useState<string[]>(["read"]);

  // Add an action property to each row for the Rotate button
  const data = apiKeys.map((row) => ({ ...row, action: "Rotate" }));

  const columnsWithAction = columns.map((col) =>
    col.accessorKey === "action"
      ? {
          ...col,
          cell: () => (
            <button
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded font-medium text-xs border border-gray-200 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              //   onClick={() => setOpenGenerate(true)}
            >
              Rotate
            </button>
          ),
        }
      : col
  );

  const handlePermissionChange = (perm: string) => {
    setPermissions((prev) =>
      prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
    );
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-dark min-h-screen">
      <h2 className="text-2xl font-semibold mb-6 dark:text-white">API Keys</h2>
      <div className="bg-white dark:bg-subDark rounded-2xl p-8 shadow-sm  ">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold dark:text-white">
            API Key Management
          </h3>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            onClick={() => setOpenGenerate(true)}
          >
            Generate New Key
          </button>
        </div>
        <Table columns={columnsWithAction} data={data} />
      </div>
      <Modal isOpen={openGenerate} onClose={() => setOpenGenerate(false)}>
        <div className="p-4 min-w-[340px] md:min-w-[480px]">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">
            Generate New API Key
          </h2>
          <div className="space-y-4">
            <Input
              label="Key Name"
              placeholder="Enter Key name"
              value={keyName}
              onChange={(e) => setKeyName(e.target.value)}
            />
            <Select
              label="Environment"
              options={[
                { value: "Production", label: "Production" },
                { value: "Staging", label: "Staging" },
                { value: "Development", label: "Development" },
              ]}
              value={environment}
              onChange={(e) => setEnvironment(e.target.value)}
            />
            <div>
              <div className="font-medium mb-2 dark:text-white">
                Permissions
              </div>
              <div className="flex flex-col gap-2">
                {permissionsOptions.map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-gray-200"
                  >
                    <input
                      type="checkbox"
                      checked={permissions.includes(opt.value)}
                      onChange={() => handlePermissionChange(opt.value)}
                      className="accent-blue-600 w-5 h-5 rounded"
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-8">
            <CButton
              className="border w-fit border-colorScBlue bg-transparent text-colorScBlue hover:text-white"
              onClick={() => setOpenGenerate(false)}
            >
              Cancel
            </CButton>
            <CButton className="w-fit" onClick={() => setOpenGenerate(false)}>
              Generate Key
            </CButton>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default APIkeys;
