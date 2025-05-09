import { FC } from "react";

const GCP: FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans leading-relaxed min-w-[320px] max-w-[1440px] mx-auto">
      <main className="max-w-5xl mx-auto px-4 py-10 space-y-12">
        {/* Overview */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            <span className="text-yellow-500">🗂</span> Overview
          </h2>
          <p className="text-lg">
            Scrubbe integrates with Google Cloud Platform (GCP) services to
            monitor user activity through SIEM and process incidents via SOAR
            using a service account with scoped permissions.
          </p>
        </section>

        {/* Supported Services */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            ✅ Supported GCP Services
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-indigo-100 text-indigo-700">
                <tr>
                  <th className="px-4 py-2 text-left">Service</th>
                  <th className="px-4 py-2 text-left">Logs/Events Monitored</th>
                  <th className="px-4 py-2 text-left">Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2">IAM</td>
                  <td className="px-4 py-2">User logins, role changes</td>
                  <td className="px-4 py-2">Cloud Audit Logs via Pub/Sub</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Cloud Storage</td>
                  <td className="px-4 py-2">Object creation, deletion</td>
                  <td className="px-4 py-2">Audit Logs → Pub/Sub</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">BigQuery</td>
                  <td className="px-4 py-2">Dataset access, queries</td>
                  <td className="px-4 py-2">Audit Logs → Pub/Sub</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Compute Engine</td>
                  <td className="px-4 py-2">Instance operations</td>
                  <td className="px-4 py-2">Audit Logs → Pub/Sub</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">GKE</td>
                  <td className="px-4 py-2">
                    API server logs, container activity
                  </td>
                  <td className="px-4 py-2">GKE Audit Logs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Prerequisites */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            🔐 Prerequisites
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>GCP project with Logging, IAM, and Monitoring access</li>
            <li>
              Scrubbe account –{" "}
              <a
                href="https://scrubbe.com/signup"
                className="text-indigo-500 underline"
              >
                Create one
              </a>
            </li>
            <li>Scrubbe API key from dashboard</li>
            <li>Permission to create service accounts and Pub/Sub topics</li>
          </ul>
        </section>

        {/* Setup Steps */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            ⚙️ Step-by-Step Setup
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-indigo-600 mb-2">
                Step 1: Create Service Account
              </h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>
                  Go to{" "}
                  <a
                    href="https://console.cloud.google.com/iam-admin/serviceaccounts"
                    className="text-indigo-500 underline"
                  >
                    IAM & Admin → Service Accounts
                  </a>
                </li>
                <li>
                  Create a new service account:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    scrubbe-monitor
                  </code>
                </li>
                <li>
                  Assign roles:
                  <ul className="ml-4 list-disc">
                    <li>Viewer</li>
                    <li>Logging Viewer</li>
                    <li>Monitoring Viewer</li>
                    <li>Security Reviewer</li>
                    <li>Pub/Sub Subscriber</li>
                  </ul>
                </li>
                <li>Download the JSON key securely</li>
              </ol>
            </div>

            <div>
              <h4 className="text-xl font-medium text-indigo-600 mb-2">
                Step 2: Enable APIs
              </h4>
              <p>
                Enable the following APIs in the{" "}
                <a
                  href="https://console.cloud.google.com/apis/library"
                  className="text-indigo-500 underline"
                >
                  API Library
                </a>
                :
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>Cloud Logging API</li>
                <li>Monitoring API</li>
                <li>Cloud Pub/Sub API</li>
                <li>Resource Manager API</li>
                <li>IAM API</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-indigo-600 mb-2">
                Step 3: Create Pub/Sub Topic
              </h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>
                  Create topic:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    scrubbe-logs
                  </code>
                </li>
                <li>
                  Create pull subscription:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    scrubbe-sub
                  </code>
                </li>
                <li>
                  Add subscriber role:
                  <pre className="bg-gray-800 text-green-300 text-sm p-4 rounded overflow-x-auto">
                    {`gcloud pubsub topics add-iam-policy-binding scrubbe-logs \\
  --member="serviceAccount:scrubbe-monitor@PROJECT_ID.iam.gserviceaccount.com" \\
  --role="roles/pubsub.subscriber"`}
                  </pre>
                </li>
              </ol>
            </div>

            <div>
              <h4 className="text-xl font-medium text-indigo-600 mb-2">
                Step 4: Setup Audit Log Sink
              </h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Go to Logging → Logs Router → Create Sink</li>
                <li>
                  Destination: Pub/Sub →{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    scrubbe-logs
                  </code>
                </li>
                <li>
                  Filter:
                  <pre className="bg-gray-800 text-green-300 text-sm p-4 rounded overflow-x-auto">
                    {`logName:("cloudaudit.googleapis.com" OR "activity" OR "data_access")`}
                  </pre>
                </li>
              </ol>
            </div>

            <div>
              <h4 className="text-xl font-medium text-indigo-600 mb-2">
                Step 5: Connect to Scrubbe
              </h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>
                  Go to{" "}
                  <a
                    href="https://scrubbe.com/dashboard"
                    className="text-indigo-500 underline"
                  >
                    scrubbe.com/dashboard
                  </a>
                </li>
                <li>Upload your JSON key</li>
                <li>Enter your GCP Project ID</li>
                <li>
                  Select services to monitor and click &ldquo;Connect&ldquo;
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Incidents & SOAR */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            🚨 Incident Detection & SOAR
          </h3>

          <p className="mb-2">
            Scrubbe analyzes GCP logs and detects threats using custom detection
            rules:
          </p>

          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mb-6">
            <thead className="bg-indigo-100 text-indigo-700">
              <tr>
                <th className="px-4 py-2 text-left">Rule</th>
                <th className="px-4 py-2 text-left">Source</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2">External email granted admin</td>
                <td className="px-4 py-2">IAM Logs</td>
                <td className="px-4 py-2">Alert + Slack Notify</td>
              </tr>
              <tr>
                <td className="px-4 py-2">BigQuery export detected</td>
                <td className="px-4 py-2">BigQuery Logs</td>
                <td className="px-4 py-2">Alert + Revoke Token</td>
              </tr>
            </tbody>
          </table>

          <p className="mb-2">You can also automate response:</p>
          <pre className="bg-gray-800 text-green-300 text-sm p-4 rounded overflow-x-auto">
            {`trigger:
  source: gcp.audit.iam
  condition: user_email NOT IN trusted_users

action:
  - notify: security-team
  - revoke-role: user_id
  - ticket: create-jira-ticket`}
          </pre>
        </section>

        {/* Troubleshooting */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            🧪 Troubleshooting
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>No logs showing? Ensure log sinks route to Pub/Sub</li>
            <li>Permission errors? Check IAM roles on service account</li>
            <li>Metrics missing? Verify Cloud Monitoring is enabled</li>
          </ul>
        </section>

        {/* Security & Support */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            🔒 Security & 💬 Support
          </h3>
          <p>Scrubbe encrypts credentials (AES-256) and complies with:</p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>SOC 2</li>
            <li>GDPR</li>
            <li>ISO 27001</li>
          </ul>

          <p>Need help?</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Email:{" "}
              <a
                href="mailto:support@scrubbe.com"
                className="text-indigo-500 underline"
              >
                support@scrubbe.com
              </a>
            </li>
            <li>
              Community:{" "}
              <a
                href="https://scrubbe.com/community"
                className="text-indigo-500 underline"
              >
                scrubbe.com/community
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default GCP;
