import React, { useState } from "react";

const faqData = [
  {
    question: "What is the Scrubbe Authentication SDK?",
    answer: `The Scrubbe Authentication SDK enables developers to securely integrate authentication into their applications using
token-based access. It supports API keys, OAuth 2.0, and GitHub sign-in—tailored for
both technical and nontechnical users.`,
    iscode: false,
  },
  {
    question: "What languages or frameworks are supported?",
    answer: `Currently supported SDKs include:
• Node.js
• React (Frontend JavaScript)
• TypeScript
• Go (coming soon)`,
    iscode: true,
  },
  {
    question: "How do I install the SDK?",
    answer: `You can install the SDK using your preferred package
manager :
• npm
npm install @scrubbe/auth-sdk
• yarn
yarn add @scrubbe/auth-sdk
• pnpm
pnpm add @scrubbe/auth-sdk`,
    iscode: true,
  },
  {
    question: "How do I authenticate using an API key?",
    answer: `Use your API key in request headers like this:
Authorization: Bearer YOUR_API_KEY
Or in JavaScript:
scrubbe.auth("YOUR_API_KEY");`,
    iscode: true,
  },
  {
    question: "How do I enable GitHub login for my team?",
    answer: `1. Go to your Scrubbe dashboard
2. Navigate to Settings > Authentication
3. Enable GitHub Sign-In
4. Input your GitHub OAuth credentials`,
    iscode: true,
  },
  {
    question: "Can I authenticate with OAuth 2.0?",
    answer: `Yes. Scrubbe supports OAuth 2.0 for secure, scalable tokenbased
authentication. You can configure Scrubbe-managed
OAuth or bring your own identity provider.
`,
    iscode: true,
  },
  {
    question: "Does Scrubbe support multi-tenant authentication?",
    answer: `Yes. Scrubbe is designed for multi-tenant SaaS environments.
Tenants have logically separated user accounts and
permissions under a shared authentication infrastructure.`,
    iscode: true,
  },
  {
    question: "How is session management handled?",
    answer: `Scrubbe uses secure JWT-based sessions with:
• Short TTL for access tokens (e.g. 15 minutes)
• Long TTL for refresh tokens (e.g. 7 days)
• Built-in token renewal methods in the SDK`,
    iscode: true,
  },
  {
    question: "Can I restrict access by role or user type?",
    answer: `Yes. Scrubbe supports full Role-Based Access Control
(RBAC):
Js
scrubbe.auth().hasRole("admin");
You can also manage roles in the dashboard under Users &
Access.`,
    iscode: true,
  },
  {
    question: "Where can I find example integration code?",
    answer: `Each SDK includes a /docs folder with examples for:
• Initial authentication
• Token refresh flow
• Secure credential storage
Additionally, code samples are available in our GitHub
Example Repository (link to be provided).`,
    iscode: true,
  },
];

const FAQ = () => {
  return (
    <div className=" max-w-[1440px] h-full mx-auto flex flex-col items-center gap-y-6 relative z-10 px-4 md:px-6 lg:px-20 xl:px-20 py-20 bg-white">
      <div className="text-center mb-4">
        <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-gray-800 mb-2">
          Frequently Asked Questions{" "}
        </h2>
        <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
        <p className="text-gray-600 text-sm sm:text-base md:max-w-2xl mx-auto ">
          Got questions? We&apos;ve got answers. Browse our frequently asked
          questions to find what you&apos;re looking for.
        </p>
      </div>

      <div className="mx-auto my-10  rounded-lg bg-white ">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            iscode={item.iscode}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;

const AccordionItem = ({
  question,
  answer,
  iscode,
}: {
  question: string;
  answer: string;
  iscode: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200   mt-3 rounded-md">
      <button
        className="flex w-full items-center justify-between text-left focus:outline-none overflow-hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`text-lg font-medium text-gray-800 py-3 md:px-8 px-5 w-full flex items-center gap-2 justify-between rounded-t-md ${
            isOpen ? "bg-subDark !text-white" : ""
          }`}
        >
          {question}
          <svg
            className={`h-5 w-5 transform transition-transform duration-300 ${
              isOpen ? "rotate-180 text-white" : "text-gray-400"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      {iscode ? (
        <pre
          className={`mt-2 overflow-hidden max-w-5xl text-gray-600 transition-all duration-300 ease-in-out px-5 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="pb-2 text-sm">{answer}</p>
        </pre>
      ) : (
        <div
          className={`mt-2 overflow-hidden max-w-5xl text-gray-600 transition-all duration-300 ease-in-out px-5 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="pb-2 text-sm">{answer}</p>
        </div>
      )}
    </div>
  );
};
