import CButton from "@/components/ui/Cbutton";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import TextArea from "@/components/ui/text-area";
import { endpoint } from "@/lib/api/endpoint";
import { querykeys } from "@/lib/constant";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Controller, get, useForm } from "react-hook-form";
import { z } from "zod";

const formScheme = z.object({
  title: z.string().nonempty({ message: "title is required" }),
  description: z.string().nonempty({ message: "reason is required" }),
  priority: z.string().nonempty({ message: "priority is required" }),
  impact: z.string().nonempty({ message: "impact is required" }),
  status: z.string().nonempty({ message: "status is required" }),
  proposedFix: z.string().optional(),
  rootCauseNote: z.string().optional(),
  owner: z.string().optional(),
  linkIncident: z.array(z.string()).optional(),
});

type FormType = z.infer<typeof formScheme>;

const TABS = ["General", "Incident"];

const incidentsData = [
  { id: "inc001", reason: "INC001- Server Crash", checked: false },
  { id: "inc002", reason: "INC002- App Error", checked: false },
  { id: "inc003", reason: "INC003- Network Issue", checked: false },
  { id: "inc004", reason: "INC004- Database Failure", checked: false },
  { id: "inc005", reason: "INC005- API Timeout", checked: false },
];
const ProblemForm = () => {
  const [tab, setTab] = useState(0);
  const [selectIncident, setSelectIncident] = useState<string[]>([]);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormType>({
    resolver: zodResolver(formScheme),
    mode: "onChange",
  });

  const { data: members } = useQuery<
    { firstname: string; lastname: string; email: string }[]
  >({
    queryKey: [querykeys.GET_MEMBERS],
    queryFn: async () => {
      try {
        const res = await get(endpoint.incident_ticket.get_members);
        console.log({ memeber: res });
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

  const handleCheckboxChange = (id: string) => {
    const isSelected = selectIncident.find((item) => item === id);
    console.log({ isSelected });
    if (!!isSelected) {
      setSelectIncident(selectIncident.filter((item) => item !== id));
    } else {
      setSelectIncident((prev) => [...(prev ?? []), id]);
    }
  };

  const handleSubmtForm = (value: FormType) => {
    console.log(value);
  };
  return (
    <div>
      <p className=" text-xl font-bold">Create New Problem</p>
      <div className="grid grid-cols-2 gap-8 border-b border-gray-200 mb-6">
        {TABS.map((t, i) => (
          <button
            key={t}
            className={`p-4 text-sm font-medium border-b-2 transition-colors ${
              tab === i
                ? "border-IMSLightGreen text-IMSLightGreen"
                : "border-transparent text-gray-500  dark:text-gray-400 hover:text-green"
            }`}
            // onClick={() => setTab(i)}
          >
            {t}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit(handleSubmtForm)}>
        <>
          {tab === 0 && (
            <>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <Input
                    label="Title"
                    placeholder="Enter problem title"
                    {...field}
                    error={errors.title?.message}
                    className=" text-black dark:text-white"
                  />
                )}
              />
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextArea
                    label="Description"
                    rows={4}
                    {...field}
                    placeholder="Describe the problem "
                    className="w-full bg-transparent dark:!text-white !text-black border border-gray-300 rounded-md p-2 text-sm "
                    error={errors.description?.message}
                  />
                )}
              />

              <Controller
                name="owner"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Owner"
                    options={[
                      { label: "Team member or group", value: "" },
                    ].concat(
                      members?.map((member) => ({
                        label: member.email,
                        value: member.email,
                      })) ?? []
                    )}
                    error={errors.owner?.message}
                    className=" text-black dark:text-white"
                  />
                )}
              />
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select
                    options={[
                      { label: "Select status ", value: "" },
                      { label: "Open", value: "OPEN" },
                      { label: "Acknowledge", value: "ACKNOWLEDGED" },
                      { label: "RCA Found", value: "RCA_FOUND" },
                      { label: "Resolved", value: "RESOLVED" },
                    ]}
                    {...field}
                    label="Status"
                    error={errors.status?.message}
                    className=" text-black dark:text-white"
                  />
                )}
              />
              <Controller
                name="priority"
                control={control}
                render={({ field }) => (
                  <Select
                    label="Priority"
                    options={[
                      { label: "Select Priority", value: "" },
                      { label: "Low", value: "LOW" },
                      { label: "Medium", value: "MEDIUM" },
                      { label: "High", value: "HIGH" },
                      { label: "Critical", value: "CRITICAL" },
                    ]}
                    {...field}
                    error={errors.priority?.message}
                    className=" text-black dark:text-white"
                  />
                )}
              />
              <Controller
                name="impact"
                control={control}
                render={({ field }) => (
                  <Select
                    label="Impact"
                    options={[
                      { label: "Select Impact", value: "" },
                      { label: "Service", value: "SERVICE" },
                      { label: "Department", value: "DEPARTMENT" },
                      { label: "Enterprice", value: "ENTERPRICE" },
                    ]}
                    {...field}
                    error={errors.impact?.message}
                    className=" text-black dark:text-white"
                  />
                )}
              />

              <div className=" flex justify-end gap-5">
                <CButton
                  onClick={() => {}}
                  className=" w-fit px-6 bg-transparent border border-IMSLightGreen text-IMSLightGreen hover:text-white shadow-none"
                >
                  Close
                </CButton>
                <CButton
                  disabled={!isValid}
                  onClick={() => setTab(1)}
                  className=" w-fit px-6"
                >
                  Next
                </CButton>
              </div>
            </>
          )}
          {tab === 1 && (
            <>
              <div>
                <div>
                  <p>Select Incidents to link</p>
                  <div className="space-y-4 mb-6 p-3 bg-neutral-100 rounded-md mt-3">
                    {incidentsData.map((incident) => (
                      <div
                        key={incident.id}
                        className="flex items-center space-x-3"
                      >
                        <input
                          type="checkbox"
                          id={incident.id}
                          checked={selectIncident.includes(incident.id)}
                          onChange={() => handleCheckboxChange(incident.id)}
                          className="h-5 w-5 text-green-500 rounded-md border-gray-300 focus:ring-green-400"
                        />
                        <label
                          htmlFor={incident.id}
                          className="text-gray-700 select-none cursor-pointer text-base"
                        >
                          {incident.reason}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Controller
                  name="rootCauseNote"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      label="Root Cause Notes:"
                      rows={4}
                      {...field}
                      placeholder="Enter root cause analysis"
                      className="w-full bg-transparent dark:!text-white !text-black border border-gray-300 rounded-md p-2 text-sm "
                      error={errors.rootCauseNote?.message}
                    />
                  )}
                />
                <Controller
                  name="proposedFix"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      label="Proposed Fix:"
                      rows={4}
                      {...field}
                      placeholder="Enter Proposed Fix"
                      className="w-full bg-transparent dark:!text-white !text-black border border-gray-300 rounded-md p-2 text-sm "
                      error={errors.proposedFix?.message}
                    />
                  )}
                />

                <div className=" flex justify-end gap-5">
                  <CButton
                    onClick={() => setTab(0)}
                    className=" w-fit px-6 bg-transparent border border-IMSLightGreen text-IMSLightGreen hover:text-white shadow-none"
                  >
                    Back
                  </CButton>
                  <CButton type="submit" className=" w-fit px-6">
                    Create New Problem
                  </CButton>
                </div>
              </div>
            </>
          )}
        </>
      </form>
    </div>
  );
};

export default ProblemForm;
