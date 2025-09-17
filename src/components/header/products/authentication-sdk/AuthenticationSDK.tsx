"use client";
import React from "react";
import Hero from "./Hero";
import AuthenticationFeature from "./AuthenticationFeature";
import FAQ from "./FAQ";
import { useRouter } from "next/navigation";
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
const AuthenticationSDK = () => {
  const router = useRouter();
  return (
    <div className="bg-white">
      <Hero />
      <AuthenticationFeature />
      <FAQ faqData={faqData} />
      <div
        className={`w-full  bg-cover bg-center  bg-gradient-to-r from-[#6A5ACD] to-[#352D67]`}
      >
        <article className=" rounded-2xl p-4 md:p-6 text-center py-4">
          <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-white mb-1">
            Ready to Get Started?{" "}
          </h2>
          <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-white max-w-3xl mx-auto mb-4">
            Join thousands of developers who trust Scrubbe Auth for their
            authentication needs. Secure, flexible, and easy to implement
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => router.push("/auth/signin")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg text-center transition-colors"
            >
              Sign up for Free
            </button>
            <button className="bg-transparent border border-blue-600 text-blue-600 bg-white font-medium py-3 px-8 rounded-lg text-center transition-colors">
              Go the Doc
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AuthenticationSDK;
