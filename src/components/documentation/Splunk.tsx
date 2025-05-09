import { FC } from "react";
import Link from "next/link";

const Splunk: FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-w-[320px] max-w-[1440px] mx-auto">
      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 md:py-10 space-y-10 md:space-y-12">
        {/* Overview Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            <span className="text-yellow-500">🗂</span> Overview
          </h2>
          <p className="text-base md:text-lg">
            This guide helps you connect your Splunk instance to Scrubbe to
            stream logs and alerts for security event monitoring and automated
            incident response.
          </p>
        </section>

        {/* Supported Data Sources */}
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            ✅ Supported Splunk Data Sources
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>HTTP Event Collector (HEC)</li>
            <li>Search Queries (via REST API)</li>
            <li>Alerts and Notable Events (via Webhooks)</li>
            <li>Universal Forwarder (for on-prem Splunk)</li>
          </ul>
        </section>

        {/* Prerequisites */}
        <section>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            🔐 Prerequisites
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>Splunk Enterprise or Cloud Instance</li>
            <li>Admin access to Splunk or access to configure HEC/token</li>
            <li>
              Scrubbe account –{" "}
              <Link
                href="https://scrubbe.com/signup"
                className="text-indigo-500 underline"
              >
                Sign up here
              </Link>
            </li>
            <li>Scrubbe API key (from your dashboard)</li>
          </ul>
        </section>

        {/* Step-by-Step Setup */}
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-6">
            ⚙️ Step-by-Step Setup
          </h3>
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-lg md:text-xl font-medium text-indigo-600 mb-3">
                Step 1: Enable HTTP Event Collector (HEC)
              </h4>
              <ol className="list-decimal list-inside space-y-1 ml-1">
                <li>Log into your Splunk instance</li>
                <li>Go to Settings → Data Inputs → HTTP Event Collector</li>
                <li>Click &quot;New Token&quot;</li>
                <li>
                  Set a name like{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    scrubbe-integration
                  </code>
                </li>
                <li>Select a source type (e.g., _json)</li>
                <li>Enable indexer acknowledgment if required</li>
                <li>
                  Copy the HEC token and endpoint (e.g.,
                  `https://splunk.yourdomain.com:8088`)
                </li>
              </ol>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-lg md:text-xl font-medium text-indigo-600 mb-3">
                Step 2: Connect to Scrubbe
              </h4>
              <ol className="list-decimal list-inside space-y-1 ml-1">
                <li>
                  Go to{" "}
                  <Link
                    href="https://scrubbe.com/dashboard"
                    className="text-indigo-500 underline"
                  >
                    scrubbe.com/dashboard
                  </Link>
                </li>
                <li>Navigate to &quot;Add Integration&quot; → Splunk</li>
                <li>Paste your HEC endpoint and token</li>
                <li>Select log sources and indexes to monitor</li>
                <li>
                  Click <strong>Save</strong> and test connection
                </li>
              </ol>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-lg md:text-xl font-medium text-indigo-600 mb-3">
                Step 3: (Optional) Configure Webhooks for Alerts
              </h4>
              <ol className="list-decimal list-inside space-y-1 ml-1">
                <li>Go to Settings → Alert Actions → Webhook</li>
                <li>
                  Set webhook URL:
                  <code className="bg-gray-100 px-2 py-1 rounded mx-1 break-words">
                    https://api.scrubbe.com/splunk/webhook
                  </code>
                </li>
                <li>Include a token or signature in headers if needed</li>
                <li>Enable it in any existing alert configuration</li>
              </ol>
            </div>
          </div>
        </section>

        {/* SIEM & SOAR Integration */}
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            🚨 SIEM & SOAR Integration
          </h3>
          <p className="mb-4">
            Once integrated, Scrubbe ingests real-time logs from Splunk and
            applies detection rules to trigger automated responses based on your
            security policy.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mb-6">
              <thead className="bg-indigo-100 text-indigo-700">
                <tr>
                  <th className="px-4 py-2 text-left">Rule</th>
                  <th className="px-4 py-2 text-left">Data Source</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2">Brute-force login attempts</td>
                  <td className="px-4 py-2">search index=auth</td>
                  <td className="px-4 py-2">Alert + Auto-block IP</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Privileged user activity</td>
                  <td className="px-4 py-2">index=main role=admin</td>
                  <td className="px-4 py-2">
                    Notify Slack + Start SOAR playbook
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <pre className="bg-gray-800 text-green-300 text-sm p-4 rounded overflow-x-auto">
            {`trigger:
  source: splunk.index.auth
  condition: count(login_failures) > 5 within 1m

action:
  - block: ip
  - notify: sec-team
  - ticket: open`}
          </pre>
        </section>

        {/* Troubleshooting */}
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            🧪 Troubleshooting
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>
              <strong>No logs appearing?</strong> Ensure your HEC token is
              active and endpoint is reachable
            </li>
            <li>
              <strong>Access denied?</strong> Check Splunk role permissions for
              the token
            </li>
            <li>
              <strong>Webhook not firing?</strong> Test the payload with
              Scrubbe&apos;s webhook testing tool
            </li>
          </ul>
        </section>

        {/* Security & Support */}
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            🔒 Security & 💬 Support
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Encrypted communication over TLS</li>
            <li>All logs are token-authenticated</li>
            <li>Scrubbe is SOC 2, GDPR, ISO 27001 compliant</li>
          </ul>

          <p className="mt-4">Need help?</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Email:{" "}
              <Link
                href="mailto:support@scrubbe.com"
                className="text-indigo-500 underline"
              >
                support@scrubbe.com
              </Link>
            </li>
            <li>
              Docs:{" "}
              <Link
                href="https://scrubbe.com/docs"
                className="text-indigo-500 underline"
              >
                scrubbe.com/docs
              </Link>
            </li>
            <li>
              Community:{" "}
              <Link
                href="https://scrubbe.com/community"
                className="text-indigo-500 underline"
              >
                scrubbe.com/community
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Splunk;
