import React, { ReactNode, useEffect, useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaBook, FaTools } from "react-icons/fa";
import { PiListChecksBold } from "react-icons/pi";
import { GrAnnounce } from "react-icons/gr";
import { IoCheckmarkCircle, IoSearch } from "react-icons/io5";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import Select from "../ui/select";
import TextArea from "../ui/text-area";
import Input from "../ui/input";
import useAuthStore from "@/lib/stores/auth.store";
import CButton from "../ui/Cbutton";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Ticket } from "./IncidateTicketPage";
import { FiX } from "react-icons/fi";

const resolutionSteps = [
  {
    name: "Basic Details",
    value: "basic",
    Icon: BsInfoCircleFill,
  },
  {
    name: "Root Cause Analysis",
    value: "analysis",
    Icon: IoSearch,
  },
  {
    name: "Resolution Details",
    value: "resolution",
    Icon: FaTools,
  },
  {
    name: "Knowledge Base Draft",
    value: "draft",
    Icon: FaBook,
  },
  {
    name: "Follow-Up Actions",
    value: "follow-up",
    Icon: PiListChecksBold,
  },
  {
    name: "Stakeholder Communication",
    value: "stakeholder",
    Icon: GrAnnounce,
  },
  {
    name: "Review & Submit",
    value: "review",
    Icon: IoCheckmarkCircle,
  },
];
type PostMortemProps = {
  ticket: Ticket;
};
const PostMortem = ({ ticket }: PostMortemProps) => {
  const [steps, setSteps] = useState("basic");

  let content: ReactNode;

  switch (steps) {
    case "basic":
      content = <BasicDetails setSteps={setSteps} ticket={ticket} />;
      break;
    case "analysis":
      content = <Analysis setSteps={setSteps} ticket={ticket} />;
      break;
    case "resolution":
      content = <Resolution setSteps={setSteps} ticket={ticket} />;
      break;
    case "draft":
      content = <Draft setSteps={setSteps} ticket={ticket} />;
      break;
    case "follow-up":
      content = <Followup setSteps={setSteps} ticket={ticket} />;
      break;
    case "stakeholder":
      content = <Stakeholder />;
      break;
    case "review":
      content = <Review />;
      break;
    default:
      break;
  }
  return (
    <div className="flex min-h-[600px]">
      <div className="min-w-[200px] border-r dark:border-neutral-600 border-neutral-200">
        <p className=" text-lg font-semibold dark:text-white ">
          Resolution Steps
        </p>

        <div className="w-full mt-5">
          {resolutionSteps.map(({ Icon, name, value }) => (
            <div
              onClick={() => setSteps(value)}
              key={value}
              className={` cursor-pointer ${
                value == steps ? " dark:bg-white/20" : ""
              } dark:text-white flex flex-row gap-3 items-center p-3 w-full`}
            >
              <Icon size={18} />
              <p className=" text-sm">{name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-3 w-full">{content}</div>
    </div>
  );
};

type Props = {
  setSteps: (step: string) => void;
  ticket: Ticket;
};

export default PostMortem;

const BasicDetails = ({ setSteps, ticket }: Props) => {
  const formScheme = z.object({
    template: z.string().nonempty({ message: "template is required" }),
    incidentId: z.string().nonempty(),
    reason: z.string().nonempty({ message: "reason is required" }),
    priority: z.string().nonempty({ message: "priority is required" }),
    reporter: z.string().nonempty({ message: "username is required" }),
    impactedSystem: z.string().optional(),
  });
  type FormType = z.infer<typeof formScheme>;
  const { user } = useAuthStore();
  const {
    control,
    setValue,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formScheme),
  });

  useEffect(() => {
    if (user && ticket) {
      setValue("reporter", `${user.firstName} ${user.lastName}`);
      setValue("priority", ticket.priority);
      setValue("incidentId", ticket.ticketId);
      setValue("reason", ticket.reason);
    }
  }, [setValue, user, ticket]);

  return (
    <div className=" w-full">
      <h1 className="text-2xl font-bold dark:text-white text-black">
        Basic Details
      </h1>
      <Controller
        name="template"
        control={control}
        render={({ field }) => (
          <Input
            label="Incident ID"
            {...field}
            error={errors.template?.message}
            className=" text-black dark:text-white"
            readOnly
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
            className="w-full bg-transparent !text-black border border-gray-300 rounded-md p-2 text-sm "
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
      <Controller
        name="impactedSystem"
        control={control}
        render={({ field }) => (
          <Input
            label="Impacted System"
            placeholder=""
            {...field}
            error={errors.impactedSystem?.message}
            className=" text-black dark:text-white"
          />
        )}
      />

      <Controller
        name="reporter"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Reporter"
            readOnly
            error={errors.reporter?.message}
            className=" text-black dark:text-white"
          />
        )}
      />

      <div className="flex gap-2 justify-end">
        {/* <CButton
            type="button"
            className="w-fit border border-gray-300 hover:text-white text-colorScBlue dark:border-gray-700 bg-transparent"
          >
            Close
          </CButton> */}
        <CButton
          type="button"
          className="w-fit"
          onClick={() => setSteps("analysis")}
        >
          Next <ArrowRight />
        </CButton>
        {/* <CButton
          type="submit"
          className="w-fit"
          onClick={handleSubmit(handleNext)}
        >
          Next <ArrowRight />
        </CButton> */}
      </div>
    </div>
  );
};
const Analysis = ({ setSteps }: Props) => {
  const [selectedWhy, setSelectedWhy] = useState<number | null>();
  const [gaps, setGaps] = useState(["Alert Missing", "Monitoring Gap"]);

  const handleRemoveGap = (index: number) => {
    setGaps((prev: string[]) => {
      const value = prev.filter((_, idx) => index !== idx);
      return value;
    });
  };
  return (
    <div>
      <h1 className="text-2xl font-bold dark:text-white text-black">
        Root Cause Analysis
      </h1>
      <Select
        options={[
          { value: "", label: "Select Category" },
          { value: "SOFTWARE_BUG", label: "Software Bug" },
          { value: "NETWORK_ISSUE", label: "Network Issue" },
          { value: "HUMAN_ERROR", label: "Human Error" },
          { value: "DATA_BREACH", label: "Data Breach" },
        ]}
        label="Cause Category"
      />

      <TextArea label="Root Cause" />
      <div className=" space-y-2">
        <p className=" dark:text-white">5 Whys</p>
        <div className=" space-y-2 ">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="">
                <div
                  onClick={() => setSelectedWhy(index)}
                  className=" dark:text-white cursor-pointer font-medium p-3 rounded-md bg-neutral-50 dark:bg-subDark border dark:border-none border-neutral-200"
                >
                  Why {index + 1}:{" "}
                </div>
                {selectedWhy == index && (
                  <div className="p-3  border dark:border-zinc-600 rounded-b-lg">
                    <TextArea />
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>

      <div className=" space-y-2 mt-3">
        <p className=" dark:text-white">Detection Gap</p>
        <div className="flex gap-2">
          {gaps.map((gap, index) => (
            <div
              className=" rounded-full px-4 py-2 text-green-600 bg-green-100 dark:bg-green-500/10 text-xs flex items-center gap-2"
              key={gap}
            >
              {gap}
              <div
                className=" cursor-pointer"
                onClick={() => handleRemoveGap(index)}
              >
                <X size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 justify-end">
        <CButton
          type="button"
          className="w-fit border border-gray-300 hover:text-white text-colorScBlue dark:border-gray-700 bg-transparent"
          onClick={() => setSteps("basic")}
        >
          <ArrowLeft /> Previous
        </CButton>
        <CButton
          type="button"
          className="w-fit"
          onClick={() => setSteps("resolution")}
        >
          Next <ArrowRight />
        </CButton>
      </div>
    </div>
  );
};

const Resolution = ({ setSteps }: Props) => {
  return (
    <div className=" space-y-3">
      <h1 className="text-2xl font-bold dark:text-white text-black">
        Resolution Details
      </h1>

      <TextArea label="Temporary Fix" />
      <TextArea label="Permanent Fix" />

      <div className="flex gap-2 justify-end">
        <CButton
          type="button"
          className="w-fit border border-gray-300 hover:text-white text-colorScBlue dark:border-gray-700 bg-transparent"
          onClick={() => setSteps("analysis")}
        >
          <ArrowLeft /> Previous
        </CButton>
        <CButton
          type="button"
          className="w-fit"
          onClick={() => setSteps("draft")}
        >
          Next <ArrowRight />
        </CButton>
      </div>
    </div>
  );
};

const Draft = ({ setSteps }: Props) => {
  const [tabs, setTabs] = useState<"internal" | "customer">("internal");
  return (
    <div>
      <h1 className="text-2xl font-bold dark:text-white text-black">
        Knowledge Base Draft
      </h1>
      <div className="flex gap-3 border-b border-gray-300 dark:border-gray-600 mt-3">
        <div
          className={`px-3 py-2 cursor-pointer ${
            tabs == "internal"
              ? "border-b-2 border-colorScBlue text-colorScBlue"
              : " dark:text-white"
          }`}
          onClick={() => setTabs("internal")}
        >
          Internal KB
        </div>
        <div
          className={`px-3 py-2 cursor-pointer ${
            tabs == "customer"
              ? "border-b-2 border-colorScBlue text-colorScBlue"
              : " dark:text-white"
          }`}
          onClick={() => setTabs("customer")}
        >
          Customer-Facing KB
        </div>
      </div>

      <div className="mt-3">
        {tabs === "internal" && (
          <div>
            <Input label="Title" />
            <TextArea label="Summary" />
            <TextArea label="Identification Steps" />
            <TextArea label="Resolution Steps" />
            <TextArea label="Preventive Measures" />
            <TextArea label="Preventive Measures" />
          </div>
        )}
        {tabs === "customer" && (
          <div>
            <Input label="Title" />
            <TextArea label="Summary" />
          </div>
        )}
      </div>

      <div className="flex gap-2 justify-end">
        <CButton
          type="button"
          className="w-fit border border-gray-300 hover:text-white text-colorScBlue dark:border-gray-700 bg-transparent"
          onClick={() => setSteps("resolution")}
        >
          <ArrowLeft /> Previous
        </CButton>
        <CButton
          type="button"
          className="w-fit"
          onClick={() => setSteps("follow-up")}
        >
          Next <ArrowRight />
        </CButton>
      </div>
    </div>
  );
};
const Followup = ({ setSteps }: Props) => {
  return (
    <div>
      <div className="flex gap-2 justify-end">
        <CButton
          type="button"
          className="w-fit border border-gray-300 hover:text-white text-colorScBlue dark:border-gray-700 bg-transparent"
          onClick={() => setSteps("draft")}
        >
          <ArrowLeft /> Previous
        </CButton>
        <CButton
          type="button"
          className="w-fit"
          onClick={() => setSteps("stakeholder")}
        >
          Next <ArrowRight />
        </CButton>
      </div>
    </div>
  );
};
const Stakeholder = () => {
  const [channel, setChannel] = useState("Slack");
  const [stakeholders, setStakeholders] = useState(["Customers", "Regulators"]);
  const [messageContent, setMessageContent] = useState(
    "Payment gateway issue resolved as of August 8, 2025. All services are fully operational."
  );
  const [messagePreview, setMessagePreview] = useState("");

  useEffect(() => {
    setMessagePreview(`Slack Message:\n${messageContent}`);
  }, [messageContent]);

  const removeStakeholder = (stakeholderToRemove: string) => {
    setStakeholders(stakeholders.filter((s) => s !== stakeholderToRemove));
  };

  return (
    <div className="">
      <div className="">
        <h1 className="text-2xl font-bold dark:text-white text-black">
          Stakeholder Communications
        </h1>

        {/* Form Section */}
        <div className="mb-6 space-y-6 mt-3">
          {/* Communication Channel */}
          <div>
            <label
              className="block text-sm font-medium mb-1.5"
              htmlFor="channel"
            >
              Communication Channel <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Select
                id="channel"
                label="Communication Channel"
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
                options={[
                  {
                    value: "",
                    label: "Select Channel",
                  },
                  {
                    value: "Slack",
                    label: "Slack",
                  },
                  {
                    value: "Email",
                    label: "Email",
                  },
                  {
                    value: "SMS",
                    label: "SMS",
                  },
                ]}
              />
            </div>
          </div>

          {/* Target Stakeholders */}
          <div>
            <label
              className="block text-sm font-medium mb-1.5 dark:text-white"
              htmlFor="stakeholders"
            >
              Target Stakeholders
            </label>
            <div className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-md">
              {stakeholders.map((s, index) => (
                <span
                  key={index}
                  className="flex items-center space-x-1 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full"
                >
                  <span>{s}</span>
                  <button
                    onClick={() => removeStakeholder(s)}
                    className="text-blue-800 hover:text-blue-600 focus:outline-none"
                  >
                    <FiX size={12} />
                  </button>
                </span>
              ))}
              {/* Input for adding more stakeholders would go here */}
            </div>
          </div>

          {/* Message Content */}
          <div>
            <TextArea
              id="message"
              label=" Message Content"
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
            />
          </div>
        </div>

        {/* Communication Preview */}
        <div className="mb-6 p-4 bg-gray-50 rounded-md border border-gray-200">
          <h2 className="text-sm font-semibold mb-2">Communication Preview</h2>
          <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
            {messagePreview}
          </pre>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 mb-8">
          <CButton className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <span>Generate Stakeholder Message with AI</span>
          </CButton>
          <CButton className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
            <span>Send RCA to Stakeholders</span>
          </CButton>
        </div>

        {/* Communication History */}
      </div>
    </div>
  );
};
const Review = () => {
  return <div></div>;
};
