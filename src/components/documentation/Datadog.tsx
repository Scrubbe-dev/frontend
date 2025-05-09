import { FC } from "react";
import Link from "next/link";

const Datadog: FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-w-[320px] max-w-[1440px] mx-auto">
      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-10 space-y-12">
        {/* Overview Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span>📡</span> Overview
          </h2>
          <p className="text-lg">
            This guide shows you how to connect your Datadog account to Scrubbe
            so you can monitor logs, metrics, and events for security incidents
            and automate responses through SOAR workflows.
          </p>
        </section>

        {/* Supported Sources Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span>📋</span> Supported Datadog Sources
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Datadog Logs (via Forwarding Pipelines)</li>
            <li>Metrics and Events (via Datadog API)</li>
            <li>Security Signals (Cloud SIEM)</li>
            <li>Monitors and Alerts (via Webhook)</li>
          </ul>
        </section>

        {/* Prerequisites Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span>🔧</span> Prerequisites
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Datadog account with admin or integration-level access</li>
            <li>
              Scrubbe account –{" "}
              <Link
                href="https://scrubbe.com/signup"
                className="text-purple-500 underline"
              >
                Sign up here
              </Link>
            </li>
            <li>Scrubbe API Key (from your Scrubbe dashboard)</li>
            <li>Datadog API and App keys</li>
          </ul>
        </section>

        {/* Setup Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span>⚙️</span> Step-by-Step Setup
          </h3>
          <div className="space-y-8">
            {/* Step 1 */}
            <div>
              <h4 className="text-xl font-medium text-purple-600 mb-2">
                Step 1: Generate Datadog API and App Keys
              </h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>
                  Go to{" "}
                  <Link
                    href="https://app.datadoghq.com/account/settings#api"
                    className="text-purple-500 underline"
                  >
                    Datadog API settings
                  </Link>
                </li>
                <li>
                  Click &quot;New Key&quot; under API and Application Keys
                </li>
                <li>
                  Label them{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    scrubbe-integration
                  </code>
                </li>
                <li>Copy the generated keys for use in Scrubbe</li>
              </ol>
            </div>

            {/* Step 2 */}
            <div>
              <h4 className="text-xl font-medium text-purple-600 mb-2">
                Step 2: Connect Datadog to Scrubbe
              </h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>
                  Log in to your Scrubbe account at{" "}
                  <Link
                    href="https://scrubbe.com/dashboard"
                    className="text-purple-500 underline"
                  >
                    scrubbe.com/dashboard
                  </Link>
                </li>
                <li>Navigate to &quot;Integrations&quot; → Datadog</li>
                <li>Paste your Datadog API and App keys</li>
                <li>Select services/log groups to monitor</li>
                <li>
                  Click <strong>Connect</strong> to authenticate and sync
                </li>
              </ol>
            </div>

            {/* Step 3 */}
            <div>
              <h4 className="text-xl font-medium text-purple-600 mb-2">
                Step 3: Set Up Webhook for Alerts
              </h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Go to Monitors → Manage Webhooks</li>
                <li>
                  Create a new webhook with the following:
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>
                      <strong>Name:</strong> Scrubbe Alert
                    </li>
                    <li>
                      <strong>URL:</strong>{" "}
                      <code className="bg-gray-100 px-2 py-1 rounded break-words">
                        https://api.scrubbe.com/datadog/webhook
                      </code>
                    </li>
                    <li>
                      <strong>Payload:</strong> Custom JSON or default alert
                      format
                    </li>
                  </ul>
                </li>
                <li>Attach this webhook to your monitors as needed</li>
              </ol>
            </div>
          </div>
        </section>

        {/* SIEM & SOAR Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span>🛡</span> SIEM & SOAR Automation
          </h3>
          <p className="mb-4">
            Scrubbe will process the logs, events, and metrics from Datadog
            using built-in rules or your custom logic to detect threats and
            trigger remediation workflows.
          </p>

          <div className="bg-white shadow rounded p-4">
            <pre className="bg-gray-900 text-green-300 text-sm p-4 rounded overflow-auto">
              {`trigger:
  source: datadog.alerts
  condition: alert_type == "security" and status == "triggered"

action:
  - notify: security_team
  - block: ip_address
  - run_playbook: isolate-endpoint`}
            </pre>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span>🧪</span> Troubleshooting
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>API errors?</strong> Double-check your API and App keys
            </li>
            <li>
              <strong>Webhook not firing?</strong> Ensure it&#39;s attached to
              an active monitor
            </li>
            <li>
              <strong>Missing logs?</strong> Check your log pipeline or agent
              forwarding rules
            </li>
          </ul>
        </section>

        {/* Security & Support Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span>🔒</span> Security & <span>💬</span> Support
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>All communication is encrypted via TLS</li>
            <li>API access is secured by key-scoped authentication</li>
            <li>
              Logs are sanitized and stored per your data retention policy
            </li>
          </ul>

          <p className="mt-4">Need help?</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Email:{" "}
              <Link
                href="mailto:support@scrubbe.com"
                className="text-purple-500 underline"
              >
                support@scrubbe.com
              </Link>
            </li>
            <li>
              Docs:{" "}
              <Link
                href="https://scrubbe.com/docs"
                className="text-purple-500 underline"
              >
                scrubbe.com/docs
              </Link>
            </li>
            <li>
              Community:{" "}
              <Link
                href="https://scrubbe.com/community"
                className="text-purple-500 underline"
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

export default Datadog;
