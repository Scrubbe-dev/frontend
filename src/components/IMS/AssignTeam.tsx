// AssignAnalyst.tsx

import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import CButton from "../ui/Cbutton";
import Select from "../ui/select";
import Input from "../ui/input";

// Zod schema for form validation
const schema = z.object({
  startDate: z.string().min(1, "Start Date is required."),
  endDate: z.string().min(1, "End Date is required."),
  teamMembers: z
    .array(
      z.object({
        member: z.string().min(1, "Member selection is required."),
        startTime: z.string().min(1, "Start Time is required."),
        endTime: z.string().min(1, "End Time is required."),
      })
    )
    .min(1, "At least one team member is required."),
});

type formType = z.infer<typeof schema>;
// Mock data for team member options
const teamMemberOptions = [
  { value: "alice", label: "Alice Thompson" },
  { value: "ben", label: "Ben Carter" },
  { value: "charlie", label: "Charlie Davis" },
];

type Props = {
  onClose: () => void;
};
// Main Component
const AssignAnalyst = ({ onClose }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      startDate: "",
      endDate: "",
      teamMembers: [{ member: "", startTime: "", endTime: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "teamMembers",
  });

  const onSubmit = (data: formType) => {
    console.log("Form Data:", data);
    // Here you would send the data to your API
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-full">
      {/* Header */}
      <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Assign Analyst
        </h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="py-6">
        <Controller
          name="startDate"
          control={control}
          render={({ field }) => (
            <Input
              label="Start Date"
              placeholder="mm/dd/yy"
              {...field}
              error={errors.startDate?.message}
            />
          )}
        />

        <Controller
          name="endDate"
          control={control}
          render={({ field }) => (
            <Input
              label="End Date"
              placeholder="mm/dd/yy"
              {...field}
              error={errors.endDate?.message}
            />
          )}
        />

        {/* Dynamic Team Members Section */}
        <div className="mt-4">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4"
            >
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Select Team member
                </label>
                {fields.length > 1 && (
                  <CButton
                    className=" w-fit shadow-none border border-red-500 bg-transparent hover:bg-transparent text-red-500 "
                    type="button"
                    onClick={() => remove(index)}
                  >
                    <FaTrashAlt className="inline-block mr-1" />
                    delete
                  </CButton>
                )}
              </div>

              <Controller
                name={`teamMembers.${index}.member`}
                control={control}
                render={({ field: selectField }) => (
                  <Select
                    label=""
                    options={[
                      { value: "", label: "Select team member" },
                      ...teamMemberOptions,
                    ]}
                    {...selectField}
                    error={errors.teamMembers?.[index]?.member?.message}
                  />
                )}
              />

              <div className="grid grid-cols-2 gap-3 mt-2">
                <Controller
                  name={`teamMembers.${index}.startTime`}
                  control={control}
                  render={({ field: timeField }) => (
                    <Input
                      {...timeField}
                      type="time"
                      placeholder="start"
                      error={errors.teamMembers?.[index]?.startTime?.message}
                    />
                  )}
                />
                <Controller
                  name={`teamMembers.${index}.endTime`}
                  control={control}
                  render={({ field: timeField }) => (
                    <Input
                      {...timeField}
                      type="time"
                      placeholder="end"
                      error={errors.teamMembers?.[index]?.endTime?.message}
                    />
                  )}
                />
              </div>
            </div>
          ))}
          <CButton
            type="button"
            onClick={() => append({ member: "", startTime: "", endTime: "" })}
            className="mt-2 w-fit border border-IMSLightGreen text-IMSLightGreen bg-transparent hover:bg-transparent shadow-none flex items-center text-sm font-medium "
          >
            <FaPlus className="mr-1" />
            select another member
          </CButton>
        </div>

        {/* AI Suggestion */}
        <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
          AI Suggestion : No specific recommendation for this date
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end space-x-3">
          <CButton
            className="border border-IMSLightGreen text-IMSLightGreen bg-transparent hover:bg-transparent w-fit"
            type="button"
            onClick={onClose}
          >
            Close
          </CButton>
          <CButton
            className="text-white bg-IMSLightGreen hover:bg-IMSDarkGreen w-fit"
            type="submit"
          >
            Assign
          </CButton>
        </div>
      </form>
    </div>
  );
};

export default AssignAnalyst;
