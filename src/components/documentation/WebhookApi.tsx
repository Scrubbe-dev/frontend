import Link from "next/link";
import type React from "react";

const WebhookApi: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-w-[320px] max-w-[1440px] mx-auto">
      <main className="max-w-5xl mx-auto px-4 py-10 space-y-12">
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            🔗 Overview
          </h2>
          <p className="text-base md:text-lg">
            This guide walks you through integrating your systems with Scrubbe
            using our Webhook API. Use this if you want to send real-time
            events, alerts, logs, or user activity from any application to
            Scrubbe for monitoring, alerting, and automated incident response.
          </p>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            📦 What You Need
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              A Scrubbe account —{" "}
              <Link
                href="https://scrubbe.com/signup"
                className="text-purple-500 underline"
              >
                Sign up here
              </Link>
            </li>
            <li>Scrubbe API key from your dashboard</li>
            <li>
              An app or service that can send outbound HTTP POST requests (e.g.,
              Zapier, GitHub, custom app, etc.)
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            🛠 Setup Steps
          </h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-lg md:text-xl font-medium text-purple-600 mb-2">
                Step 1: Get Your Scrubbe Webhook URL
              </h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>
                  Log into{" "}
                  <Link
                    href="https://scrubbe.com/dashboard"
                    className="text-purple-500 underline"
                  >
                    scrubbe.com/dashboard
                  </Link>
                </li>
                <li>
                  Go to the <strong>Integrations</strong> tab
                </li>
                <li>
                  Select <strong>Webhook</strong> from the integration list
                </li>
                <li>
                  Copy your unique Webhook URL (e.g.{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    https://api.scrubbe.com/webhook/{"{your-client-id}"}
                  </code>
                  )
                </li>
              </ol>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-medium text-purple-600 mb-2">
                Step 2: Configure Your Source App
              </h4>
              <p className="mb-2">
                From your system, send an HTTP POST request to the Scrubbe
                Webhook endpoint with a JSON payload. Example:
              </p>
              <div className="bg-white shadow rounded p-4 overflow-auto">
                <pre className="bg-gray-900 text-green-300 text-sm p-4 rounded overflow-x-auto">
                  {`POST https://api.scrubbe.com/webhook/{your-client-id}
Content-Type: application/json
Authorization: Bearer {your-api-key}

{
  "event_type": "user.login",
  "source": "my-app",
  "severity": "info",
  "timestamp": "2025-04-21T12:30:00Z",
  "payload": {
    "username": "john.doe",
    "ip": "192.168.0.1",
    "location": "NYC",
    "device": "Chrome on MacOS"
  }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-medium text-purple-600 mb-2">
                Step 3: Validate Delivery
              </h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>
                  Visit the <strong>Activity Logs</strong> section in your
                  Scrubbe dashboard
                </li>
                <li>
                  Check for incoming events under the{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">Webhook</code>{" "}
                  integration
                </li>
                <li>Validate the payload was parsed correctly</li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            ⚠️ Required Payload Structure
          </h3>
          <p className="mb-2">
            Scrubbe expects the following top-level JSON structure:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <code>event_type</code>: Type of event (e.g., login, file.upload,
              threat.alert)
            </li>
            <li>
              <code>source</code>: System origin
            </li>
            <li>
              <code>severity</code>: info, warning, or critical
            </li>
            <li>
              <code>timestamp</code>: ISO 8601 timestamp
            </li>
            <li>
              <code>payload</code>: Freeform object with event data
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            🤖 Using Webhooks with SOAR
          </h3>
          <p>
            Scrubbe automatically routes webhook events into your incident
            detection engine and can trigger automations based on content.
            Example playbook:
          </p>
          <div className="bg-white shadow rounded p-4">
            <pre className="bg-gray-900 text-green-300 text-sm p-4 rounded overflow-auto">
              {`trigger:
  source: webhook
  condition: event_type == "threat.alert" and severity == "critical"

action:
  - notify: security_team
  - isolate: user_session
  - escalate: incident_response`}
            </pre>
          </div>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            🧪 Troubleshooting
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Receiving 401 Unauthorized?</strong> Ensure your API key
              is correct and passed in the header
            </li>
            <li>
              <strong>No events in dashboard?</strong> Confirm the JSON format
              is valid and matches Scrubbe&apos;s required structure
            </li>
            <li>
              <strong>Rate limits?</strong> Limit to 60 requests/minute by
              default — contact us to extend
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            🔒 Security & 📞 Support
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Webhook endpoints are secured with API keys</li>
            <li>Data is encrypted in-transit (TLS 1.3)</li>
            <li>
              Payloads are sanitized and stored per your data retention policy
            </li>
          </ul>

          <p className="mt-4">Need assistance?</p>
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
              Slack:{" "}
              <Link
                href="https://scrubbe.com/community"
                className="text-purple-500 underline"
              >
                Join the community
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default WebhookApi;
