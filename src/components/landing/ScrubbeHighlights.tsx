import React from "react";
import { CheckCircle } from "lucide-react";

export default function ScrubbeHighlights() {
  return (
    <div className="min-w-[320px] max-w-7xl mx-auto bg-gray-50 rounded-lg p-8 shadow-sm">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          What Scrubbe can do for your business
        </h2>

        <ul className="space-y-6 mb-8">
          <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
            <span className="ml-3 text-xl font-medium text-gray-800">
              Start securing smarter. Monitor, detect, and respond—all in one
              place
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
            <span className="ml-3 text-xl font-medium text-gray-800">
              Automate your defense. Scrubbe handles the noise so you can focus
              on growth
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
            <span className="ml-3 text-xl font-medium text-gray-800">
              Plug into Scrubbe. One line of code, full-stack security power
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
            <span className="ml-3 text-xl font-medium text-gray-800">
              Connect your stack. Scrubbe takes care of the rest
            </span>
          </li>
        </ul>

        <a
          href="#"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors duration-200"
        >
          Talk to an expert
        </a>
      </div>
    </div>
  );
}
