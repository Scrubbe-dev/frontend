import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@heroui/react";

interface FormData {
  fullName: string;
  company: string;
  email: string;
}

export default function ScrubbeHighlights() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    company: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Log the form values when Contact Sales is clicked
    console.log("Form submitted with values:", formData);
    // You could add additional form handling logic here
  };

  return (
    <section className="min-w-[320px] max-w-7xl mx-auto bg-gray-50 rounded-lg px-4 md:px-8 py-8 md:py-12 shadow-sm">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="w-full flex flex-col items-center justify-center gap-4 mb-8">
          <h2 className="font-sans text-slate-600 tracking-wider text-2xl md:text-3xl xl:text-4xl font-semibold px-4 text-center">
            What Scrubbe can do for your business
          </h2>
          <div className="bg-emerald-500 h-1 w-16 rounded-full"></div>
        </div>

        {/* Content container - flex column on mobile, row on desktop */}
        <div className="flex flex-col lg:flex-row gap-[4rem] md:gap-[6rem] mt-8">
          {/* Left side - Benefits list */}
          <div className="w-full lg:w-1/2">
            <ul className="space-y-4 md:space-y-6 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <span className="ml-3 text-lg md:text-xl font-medium text-gray-800">
                  Start securing smarter. Monitor, detect, and respond—all in
                  one place
                </span>
              </li>

              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <span className="ml-3 text-lg md:text-xl font-medium text-gray-800">
                  Automate your defense. Scrubbe handles the noise so you can
                  focus on growth
                </span>
              </li>

              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <span className="ml-3 text-lg md:text-xl font-medium text-gray-800">
                  Plug into Scrubbe. One line of code, full-stack security power
                </span>
              </li>

              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <span className="ml-3 text-lg md:text-xl font-medium text-gray-800">
                  Connect your stack. Scrubbe takes care of the rest
                </span>
              </li>
            </ul>

            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-800 text-white 
                                   font-Inter font-semibold text-md rounded-sm mx-auto block transition-colors duration-200"
            >
              Talk to an expert
            </Button>
          </div>

          {/* Right side - Contact form with nice border */}
          <aside className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-sm border-2 border-blue-500 border-opacity-40">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Contact our sales team
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600"
                  placeholder="Your company"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600"
                  placeholder="your.name@company.com"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="bg-red-600 hover:bg-red-800 text-white 
                                   font-Inter font-semibold text-md rounded-sm mx-auto block transition-colors duration-200"
              >
                Contact Sales
              </Button>
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
}
