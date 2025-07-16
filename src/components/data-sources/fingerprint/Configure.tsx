"use client";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CodeHighlighter from "@/lib/highlightjs/CodeHighlighter";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import ActiveProject from "./ActiveProject";
import { ChevronLeft } from "lucide-react";
import { useFingerprintDisplay } from "@/lib/fingerprint/fingerprintdisplay";
import Switch from "@/components/ui/Switch";

// Zod schema for form validation
const apiConfigSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  environment: z.string().min(1, "Environment is required"),
  domains: z.string().optional(),
  description: z.string().optional(),
});

type AzureConfigForm = z.infer<typeof apiConfigSchema>;

const Configure: React.FC = () => {
  const [showFingerprint, setShowFingerprint] = useState(false);
  const [viewAsJson, setViewAsJson] = useState(false);
  const { formattedItems, fingerprint } = useFingerprintDisplay();
  console.log(formattedItems);
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<AzureConfigForm>({
    resolver: zodResolver(apiConfigSchema),
  });

  const onSubmit = async (data: AzureConfigForm) => {
    try {
      console.log("Form data:", data);
      // Handle save logic here
      // await saveAzureConfiguration(data);
    } catch (error) {
      console.error("Error saving configuration:", error);
    }
  };

  const handleGoBack = () => {
    setShowFingerprint(false);
  };

  return (
    <>
      {!showFingerprint && (
        <div className="flex w-[1200px]">
          <div className="w-full h-full bg-white p-6 flex-[.4]">
            <h1 className="text-xl font-semibold text-gray-900 mb-6">
              Fingerprint Configuration
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="gap-y-4 flex flex-col justify-between h-full"
            >
              {/* Client ID and Client Secret Row */}
              <div className="flex flex-col flex-1 gap-2">
                <Controller
                  name="projectName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      label="Project Name"
                      placeholder="Customer Portal"
                      {...field}
                      error={errors.projectName?.message}
                      className="!text-black"
                      labelClassName="!text-black"
                    />
                  )}
                />
                <Controller
                  name="environment"
                  control={control}
                  render={({ field }) => (
                    <Select
                      label="Environment"
                      options={[
                        { value: "development", label: "Development" },
                        { value: "production", label: "Production" },
                        { value: "staging", label: "Staging" },
                      ]}
                      {...field}
                      error={errors.environment?.message}
                      className="!text-black"
                      labelClassName="!text-black"
                    />
                  )}
                />

                <Controller
                  name="domains"
                  control={control}
                  render={({ field }) => (
                    <Input
                      label="Domains (optional)"
                      placeholder="app.customer.com"
                      {...field}
                      error={errors.domains?.message}
                      className="!text-black"
                      labelClassName="!text-black"
                    />
                  )}
                />
                <div className="space-y-2">
                  <p className=" font-medium text-sm ">Description(optional)</p>
                  <textarea
                    rows={4}
                    placeholder="Device Fingerprint Location Tracker"
                    className="w-full bg-transparent text-white border border-gray-300 rounded-md p-2 text-sm "
                  />
                </div>

                {/* Ingestion Schedule Section */}
              </div>

              {/* Save Button */}
              <div className="mb-10 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {isSubmitting ? "Saving..." : "Save"}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-md bg-transparent  font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    isSubmitting ? " cursor-not-allowed" : ""
                  }`}
                >
                  Generate API keys
                </button>
              </div>
            </form>
          </div>
          <div className="flex-[.6]">
            <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200">
              <h2 className="text-xl font-medium text-gray-700 mb-2">
                SDK Integration{" "}
              </h2>
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                How to Integrate{" "}
              </h3>
              <CodeHighlighter
                language="json"
                code={`import { useState } from "react"; 
import { Controller, useForm } from "react-hook-form";
  `}
              />
              <p className=" text-sm mt-4">
                Captured data will appear in your fingerprint dashboard
              </p>
            </div>

            <ActiveProject />

            <div className="flex justify-end gap-3 p-4">
              <p
                onClick={() => setShowFingerprint(true)}
                className=" text-colorScBlue underline hover:font-medium font-medium cursor-pointer"
              >
                View Fingerprints
              </p>
              <p className=" text-colorScBlue underline hover:font-medium font-medium">
                View Alerts
              </p>
            </div>
          </div>
        </div>
      )}

      {showFingerprint && (
        <div className="w-full h-full bg-white p-6">
          <div
            onClick={handleGoBack}
            className="flex gap-2 items-center text-gray-500 hover:text-black mb-3 cursor-pointer"
          >
            <ChevronLeft />
            back
          </div>
          {viewAsJson ? (
            <>
              <div className=" w-[600px]">
                <CodeHighlighter
                  language="json"
                  code={JSON.stringify(fingerprint?.data).replaceAll(
                    ",",
                    ",\n"
                  )}
                />
              </div>
            </>
          ) : (
            <>
              <p className=" text-2xl font-medium">
                Instantiated Module: Network Fingerprint Reply
              </p>
              <div className="overflow-x-auto rounded-lg border border-blue-200 mt-3">
                <table className="w-full min-w-[500px]  ">
                  <tbody className=" text-sm md:text-base">
                    <tr className="border-b border-blue-300">
                      <td className="py-3 px-4 font-medium text-gray-700 bg-blue-50 w-1/4 sm:w-1/3">
                        VPN Status
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {formattedItems[0].value}
                      </td>
                    </tr>
                    <tr className="border-b border-blue-300">
                      <td className="py-3 px-4 font-medium text-gray-700 bg-blue-50">
                        Device Type
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {formattedItems[1].value}
                      </td>
                    </tr>
                    <tr className="border-b border-blue-300">
                      <td className="py-3 px-4 font-medium text-gray-700 bg-blue-50">
                        Timestamp
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {formattedItems[4].value}
                      </td>
                    </tr>
                    <tr className="border-b border-blue-300">
                      <td className="py-3 px-4 font-medium text-gray-700 bg-blue-50">
                        OS Model
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {formattedItems[5].value}
                      </td>
                    </tr>
                    <tr className="border-b border-blue-300">
                      <td className="py-3 px-4 font-medium text-gray-700 bg-blue-50">
                        IP address
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {formattedItems[6].value}
                      </td>
                    </tr>
                    <tr className="border-b border-blue-300">
                      <td className="py-3 px-4 font-medium text-gray-700 bg-blue-50">
                        Region/City
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {formattedItems[7].value}-{formattedItems[8].value}
                      </td>
                    </tr>
                    <tr className="border-b border-blue-300">
                      <td className="py-3 px-4 font-medium text-gray-700 bg-blue-50">
                        Browser Information
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {formattedItems[9].value}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-700 bg-blue-50">
                        Device Trust Score
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {formattedItems[11].value}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-700 bg-blue-50">
                        Fingerprint ID
                      </td>
                      <td className="py-3 px-4 text-gray-700">fp_wut345jut</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2 ">
              View as JSON{" "}
              <Switch checked={viewAsJson} onChange={setViewAsJson} />
            </div>
            <p className=" text-colorScBlue underline hover:font-medium font-medium">
              View Alerts
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Configure;
