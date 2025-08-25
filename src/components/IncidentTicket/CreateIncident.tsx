import React, { useEffect } from "react";
import Modal from "../ui/Modal";
import CButton from "../ui/Cbutton";
import Select from "../ui/select";
import Input from "../ui/input";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useFetch } from "@/hooks/useFetch";
import { endpoint } from "@/lib/api/endpoint";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { querykeys } from "@/lib/constant";
import { useRouter, useSearchParams } from "next/navigation";
import TextArea from "../ui/text-area";

type CreateIncidentProps = {
  isOpen: boolean;
  onClose: () => void;
};

const formScheme = z.object({
  template: z.string().nonempty({ message: "template is required" }),
  reason: z.string().nonempty({ message: "reason is required" }),
  priority: z.string().nonempty({ message: "priority is required" }),
  assignedTo: z.string().optional(),
  username: z.string().nonempty({ message: "username is required" }),
});

type FormType = z.infer<typeof formScheme>;

const CreateIncident = ({ isOpen, onClose }: CreateIncidentProps) => {
  const { post, get } = useFetch();
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const description = searchParams.get("description");
  const priority = searchParams.get("priority");
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormType>({
    resolver: zodResolver(formScheme),
  });

  const removeQuery = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete("modal");
    newSearchParams.delete("description");
    newSearchParams.delete("priority");
    newSearchParams.delete("title");

    router.replace(`?${newSearchParams.toString()}`);
  };

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["CREATE-INCIDENT"],
    mutationFn: async ({ data }: { data: FormType }) => {
      try {
        const res = await post(endpoint.incident_ticket.create, data);
        if (res.success) {
          toast.success("Incident ticket created successfully");
          queryClient.refetchQueries({ queryKey: [querykeys.INCIDENT_TICKET] });
          removeQuery();
          onClose();
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to create incident ticket");
      }
    },
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
    enabled: isOpen == true ? true : false,
  });

  console.log({ members });

  const createIncidentTicket = async (value: FormType) => {
    mutateAsync({ data: value });
  };

  useEffect(() => {
    if (Boolean(modal) === true) {
      setValue("priority", String(priority));
      setValue("reason", String(description));
    }
  }, [modal, description, priority]);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={handleSubmit(createIncidentTicket)}
        className="p-4 space-y-5"
      >
        <h1 className="text-2xl font-bold dark:text-white text-black">
          Create New Incident
        </h1>
        <Controller
          name="template"
          control={control}
          render={({ field }) => (
            <Select
              label="Incident Type"
              options={[
                { label: "SELECT INCIDENT TYPE", value: "" },
                { label: "None", value: "NONE" },
                { label: "Malware", value: "MALWARE" },
                { label: "Phishing", value: "PHISHING" },
              ]}
              {...field}
              error={errors.template?.message}
              className=" text-black dark:text-white"
            />
          )}
        />
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <Input
              label="Affected User"
              placeholder=""
              {...field}
              error={errors.username?.message}
              className=" text-black dark:text-white"
            />
          )}
        />

        <Controller
          name="reason"
          control={control}
          render={({ field }) => (
            <TextArea
              label="Description"
              rows={4}
              {...field}
              placeholder=""
              className="w-full bg-transparent dark:!text-white !text-black border border-gray-300 rounded-md p-2 text-sm "
              error={errors.reason?.message}
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
                { label: "SELECT PRIORITY", value: "" },
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
        {/* <Select
          label="Status"
          options={[
            { label: "Open", value: "open" },
            { label: "Closed", value: "closed" },
            { label: "In Progress", value: "in-progress" },
            { label: "Resolved", value: "resolved" },
          ]}
        /> */}

        {/* [
                { label: "SELECT ASSIGNEE", value: "" },
                {
                  label: "Olamide Morakinyo",
                  value: "olamidemoraks@gmail.com",
                },
                { label: "David Shiloh", value: "morakinyodavid00@gmail.com" },
              ] */}
        <Controller
          name="assignedTo"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              label="Assignee"
              options={[{ label: "SELECT ASSIGNEE", value: "" }].concat(
                members?.map((member) => ({
                  label: member.email,
                  value: member.email,
                })) ?? []
              )}
              error={errors.assignedTo?.message}
              className=" text-black dark:text-white"
            />
          )}
        />

        <div className="flex gap-2 justify-end">
          <CButton
            type="button"
            className="w-fit border border-gray-300 hover:text-white text-colorScBlue dark:border-gray-700 bg-transparent"
            onClick={onClose}
            isLoading={isPending}
          >
            Close
          </CButton>
          <CButton type="submit" isLoading={isPending} className="w-fit">
            Create Incident
          </CButton>
        </div>
      </form>
    </Modal>
  );
};

export default CreateIncident;
