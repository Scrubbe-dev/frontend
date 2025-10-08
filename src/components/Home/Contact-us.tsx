/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Input from "../ui/input";
import TextArea from "../ui/text-area";
import CButton from "../ui/Cbutton";
import Link from "next/link";
import { BiChat, BiEnvelope } from "react-icons/bi";
import { MdPhoneInTalk } from "react-icons/md";
import { useFetch } from "@/hooks/useFetch";
import { endpoint } from "@/lib/api/endpoint";
import { toast } from "sonner";

const ContactUs = () => {
  const [type, setType] = useState<
    "technical-support" | "sales-inquiry" | "general-support"
  >("technical-support");
  const { post } = useFetch();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactUs = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const res = await post(endpoint.contact_us, formData);
    setLoading(false);
    if (res.success) {
      toast.success(res.data.message);
      setFormData({ first_name: "", last_name: "", email: "", message: "" });
    }
  };
  return (
    <div className="bg-[#00263D] min-h-screen px-4  md:px-8 py-[10rem] font-sans ">
      <div className="container mx-auto">
        <div className="text-center flex flex-col justify-center items-center mb-10 bg-gradient-to-r from-[#5A519F] to-[#8D4C9A] rounded-[30px] p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Support
          </h1>

          <p className="text-lg text-white">
            Get expert help with device fingerprinting and fraud detection. Our
            team is here to assist you 24/7.{" "}
          </p>
        </div>

        <div className=" grid lg:grid-cols-[1fr,.6fr] gap-6">
          <form onSubmit={handleContactUs} className="p-10 rounded-xl bg-white">
            <p className=" font-semibold text-xl">Send us a message</p>
            <p>
              Choose your inquiry type and we&apos;ll connect you with the right
              specialist
            </p>
            <div className="grid sm:grid-cols-3 mt-4 gap-4">
              <div
                onClick={() => setType("technical-support")}
                className={`p-4 py-6 border ${
                  type === "technical-support"
                    ? "border-greenscrubbe-300 bg-greenscrubbe-300/10"
                    : "border-zinc-300"
                } rounded-xl `}
              >
                <p className=" font-medium">Technical Support</p>
                <p>Integration, API, SDK issues</p>
              </div>
              <div
                onClick={() => setType("sales-inquiry")}
                className={`p-4 py-6 border ${
                  type === "sales-inquiry"
                    ? "border-greenscrubbe-300 bg-greenscrubbe-300/10"
                    : "border-zinc-300"
                } rounded-xl `}
              >
                <p className=" font-medium">Sales Inquiry</p>
                <p>Pricing, demos, features</p>
              </div>
              <div
                onClick={() => setType("general-support")}
                className={`p-4 py-6 border ${
                  type === "general-support"
                    ? "border-greenscrubbe-300 bg-greenscrubbe-300/10"
                    : "border-zinc-300"
                } rounded-xl `}
              >
                <p className=" font-medium">General Support</p>
                <p>Account, billing, other</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 mt-10 gap-4">
              <Input
                label="First Name"
                required
                value={formData.first_name}
                onChange={(e) => handleChange(e.target.value, "first_name")}
              />
              <Input
                label="Last Name"
                required
                value={formData.last_name}
                onChange={(e) => handleChange(e.target.value, "last_name")}
              />
              <Input
                label="Email Address"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange(e.target.value, "email")}
              />
              <Input label="Phone Number" />
              <Input label="Company's Name" />
              <Input label="Job Title" />
              <Input label="Subject" />
            </div>
            <TextArea
              label="Message"
              required
              value={formData.message}
              onChange={(e) => handleChange(e.target.value, "message")}
            />

            <div className="flex justify-end">
              <CButton isLoading={loading} type="submit" className="w-fit">
                Send Message
              </CButton>
            </div>
          </form>
          <div className="p-10 rounded-xl bg-white">
            <p className=" font-semibold text-xl">Send us a message</p>
            <div className="flex flex-col gap-3 mt-3">
              <div className="p-4 py-6 border border-greenscrubbe-300 rounded-xl bg-greenscrubbe-300/10 flex-row flex gap-3 items-center">
                <BiEnvelope size={23} />
                <div className=" space-y-2">
                  <p className=" font-medium">Email Support</p>
                  <Link href={"mailto:support@scrubbe.com"}>
                    Support@scrubbe.com
                  </Link>
                </div>
              </div>
              <div className="p-4 py-6 border border-greenscrubbe-300 rounded-xl bg-greenscrubbe-300/10 flex-row flex gap-3 items-center">
                <BiChat size={23} />
                <div className=" space-y-2">
                  <p className=" font-medium">Live Chat</p>
                  <p>Available 24/7</p>
                </div>
              </div>
              <div className="p-4 py-6 border border-greenscrubbe-300 rounded-xl bg-greenscrubbe-300/10 flex-row flex gap-3 items-center">
                <MdPhoneInTalk size={23} />
                <div className=" space-y-2">
                  <p className=" font-medium">Support Hours</p>
                  <p>Critical Issues : 24/7</p>
                  <p>General Support : Mon-Fri 9AM-6PM EST</p>
                  <p>Sales Team : Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-7">
              <p className=" font-semibold text-xl">Quick Link</p>
              <Link href={"/#"} className=" text-IMSLightGreen underline">
                Documentation
              </Link>
              <Link href={"/#"} className=" text-IMSLightGreen underline">
                API Reference
              </Link>
              <Link href={"/#"} className=" text-IMSLightGreen underline">
                Knowledge Base
              </Link>
              <Link href={"/#"} className=" text-IMSLightGreen underline">
                System Status
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
