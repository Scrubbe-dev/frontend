import type React from "react";

const Azure: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-w-[320px] max-w-[1440px] mx-auto">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-10">
          <h2 className="text-4xl font-bold text-blue-600">
            Azure Integration Guide
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Connect Azure services to Scrubbe for real-time monitoring and
            automated incident response.
          </p>
        </header>

        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            <span className="text-yellow-500">🗂</span> Overview
          </h2>
          <p className="mb-4">
            Scrubbe integrates with the following Azure services:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Azure Active Directory (AAD)</li>
            <li>Cosmos DB</li>
            <li>Blob Storage</li>
            <li>Azure Metrics</li>
            <li>Azure Monitor</li>
          </ul>
        </section>

        {/* Prerequisites */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🔐 Prerequisites</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Active Azure subscription with admin access</li>
            <li>
              Scrubbe account and workspace (
              <a href="https://scrubbe.com" className="text-blue-500 underline">
                Sign up
              </a>
              )
            </li>
            <li>Scrubbe API Key (Dashboard → Settings → Integrations)</li>
          </ul>
        </section>

        {/* Supported Services Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">✅ Supported Services</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="px-4 py-2 border">Service</th>
                  <th className="px-4 py-2 border">Data Collected</th>
                  <th className="px-4 py-2 border">Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">Azure AD</td>
                  <td className="px-4 py-2 border">Audit logs, sign-ins</td>
                  <td className="px-4 py-2 border">Microsoft Graph API</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border">Cosmos DB</td>
                  <td className="px-4 py-2 border">Access/query logs</td>
                  <td className="px-4 py-2 border">
                    Event Hub / Log Analytics
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Blob Storage</td>
                  <td className="px-4 py-2 border">File activity logs</td>
                  <td className="px-4 py-2 border">Diagnostic Logs</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border">Azure Metrics</td>
                  <td className="px-4 py-2 border">Performance, usage</td>
                  <td className="px-4 py-2 border">
                    Azure Monitor Metrics API
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Azure Monitor</td>
                  <td className="px-4 py-2 border">System/application logs</td>
                  <td className="px-4 py-2 border">
                    Event Hub / Log Analytics
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">⚙️ Step-by-Step Setup</h2>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            1. Connect Azure Active Directory
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              Go to Azure Portal → Azure Active Directory → App Registrations
            </li>
            <li>
              Click <strong>New Registration</strong>
            </li>
            <li>
              Name:{" "}
              <code className="bg-gray-100 px-1 rounded">
                Scrubbe Monitoring
              </code>
            </li>
            <li>
              Redirect URI (optional):{" "}
              <code className="bg-gray-100 px-1 rounded">
                https://api.scrubbe.com/auth/callback
              </code>
            </li>
            <li>
              Click <strong>Register</strong>
            </li>
          </ol>

          <h4 className="mt-4 font-medium">Create Client Secret</h4>
          <ul className="list-disc list-inside">
            <li>Certificates & Secrets → New client secret</li>
            <li>Save the generated value securely</li>
          </ul>

          <h4 className="mt-4 font-medium">Assign API Permissions</h4>
          <ul className="list-disc list-inside">
            <li>API Permissions → Add a permission → Microsoft Graph</li>
            <li>
              Add:
              <ul className="ml-4 list-disc">
                <li>
                  <code>AuditLog.Read.All</code>
                </li>
                <li>
                  <code>Directory.Read.All</code>
                </li>
                <li>
                  <code>User.Read.All</code>
                </li>
              </ul>
            </li>
            <li>
              Click <strong>Grant Admin Consent</strong>
            </li>
          </ul>

          <h4 className="mt-4 font-medium">Connect in Scrubbe</h4>
          <ul className="list-disc list-inside">
            <li>Go to Scrubbe → Integrations → Azure → Active Directory</li>
            <li>Enter Tenant ID, Client ID, and Secret</li>
            <li>
              Click <strong>Connect</strong>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-2">
            2. Connect Cosmos DB
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Enable diagnostic logs under Cosmos DB → Diagnostic Settings
            </li>
            <li>Forward to Log Analytics or Event Hub</li>
            <li>In Scrubbe: Add Resource ID and credentials</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-2">
            3. Connect Blob Storage
          </h3>
          <ul className="list-disc list-inside">
            <li>Enable activity logs for read/write/delete</li>
            <li>Export to Log Analytics or Event Hub</li>
            <li>Connect in Scrubbe dashboard</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-2">
            4. Connect Azure Metrics
          </h3>
          <ul className="list-disc list-inside">
            <li>Configure metrics export via Azure Monitor</li>
            <li>Scrubbe will auto-detect incoming metrics</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-2">
            5. Connect Azure Monitor
          </h3>
          <ul className="list-disc list-inside">
            <li>Enable diagnostics for all services (VMs, NSGs, etc.)</li>
            <li>Forward logs to Log Analytics or Event Hub</li>
            <li>Connect in Scrubbe via Workspace ID or Event Hub</li>
          </ul>
        </section>

        {/* Architecture */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
          <p className="mb-2">
            Scrubbe uses secure, event-driven data ingestion:
          </p>
          <ul className="list-disc list-inside">
            <li>REST API over HTTPS (no WebSockets)</li>
            <li>Microsoft Graph API for Azure AD</li>
            <li>Log Analytics and Event Hubs for real-time logs</li>
          </ul>
        </section>

        {/* SOAR Playbook */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            🚨 Automating Incidents in SOAR
          </h2>
          <p>
            Create playbooks in Scrubbe to respond to Azure threats
            automatically:
          </p>
          <pre className="bg-gray-100 p-4 rounded mt-2 text-sm overflow-x-auto">
            <code>{`trigger:
  source: azure.ad.signin
  condition: location != "trusted"
action:
  - notify: security-team
  - revoke-access: user_id`}</code>
          </pre>
        </section>

        {/* Troubleshooting */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">🧪 Troubleshooting</h2>
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Issue</th>
                <th className="px-4 py-2 border">Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">No logs appearing</td>
                <td className="px-4 py-2 border">
                  Ensure diagnostic logs are enabled and correctly routed
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border">Permission denied</td>
                <td className="px-4 py-2 border">
                  Recheck Graph API permissions and secret
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Missing incidents</td>
                <td className="px-4 py-2 border">
                  Test with sample logs and enable SOAR playbooks
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Footer */}
        <section className="text-sm text-gray-600 mt-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            🔒 Security & 💬 Support
          </h3>
          <p>
            All credentials are encrypted (AES-256). Scrubbe is compliant with{" "}
            <strong>SOC 2, GDPR, ISO 27001</strong>.
          </p>
          <p className="mt-4">
            Need help? Email{" "}
            <a
              href="mailto:support@scrubbe.com"
              className="text-blue-500 underline"
            >
              support@scrubbe.com
            </a>{" "}
            or join the{" "}
            <a
              href="https://scrubbe.com/community"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scrubbe Community
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default Azure;
