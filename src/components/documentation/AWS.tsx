import React from "react";

const AWS: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans w-full mx-auto">
      <main className="max-w-5xl mx-auto px-4 py-8 md:py-10 space-y-8 md:space-y-12">
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 flex items-center">
            <span className="mr-2 text-yellow-500">🗂</span> Overview
          </h2>
          <p className="text-base md:text-lg">
            This guide shows you how to connect your AWS account to Scrubbe to
            enable user activity monitoring (SIEM) and automated incident
            response (SOAR).
          </p>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center">
            <span className="mr-2">✅</span> Supported AWS Services
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-indigo-100 text-indigo-700">
                <tr>
                  <th className="px-4 py-2 text-left">Service</th>
                  <th className="px-4 py-2 text-left">Logs/Events Monitored</th>
                  <th className="px-4 py-2 text-left">Integration Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2">CloudTrail</td>
                  <td className="px-4 py-2">Management Events</td>
                  <td className="px-4 py-2">S3 + SNS</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">CloudWatch</td>
                  <td className="px-4 py-2">Metrics & Alarms</td>
                  <td className="px-4 py-2">Metrics Pull API</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">IAM</td>
                  <td className="px-4 py-2">User/Role changes</td>
                  <td className="px-4 py-2">CloudTrail Logs</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">S3</td>
                  <td className="px-4 py-2">Object access/delete</td>
                  <td className="px-4 py-2">CloudTrail Logs</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">EC2</td>
                  <td className="px-4 py-2">Instance Start/Stop</td>
                  <td className="px-4 py-2">CloudTrail Logs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="mr-2">🔐</span> Prerequisites
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>AWS Account with admin permissions</li>
            <li>
              Scrubbe account –{" "}
              <a
                href="https://scrubbe.com/signup"
                className="text-indigo-500 underline"
              >
                Sign up here
              </a>
            </li>
            <li>Scrubbe API key (from your dashboard)</li>
            <li>CloudTrail and CloudWatch enabled</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center">
            <span className="mr-2">⚙️</span> Step-by-Step Setup
          </h3>
          <div className="space-y-6 md:space-y-8">
            <div>
              <h4 className="text-lg md:text-xl font-medium text-indigo-600 mb-2">
                Step 1: Create IAM Role
              </h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Go to IAM &gt; Roles &gt; Create Role</li>
                <li>Select &quot;Another AWS account&quot;</li>
                <li>
                  Enter Scrubbe&apos;s AWS Account ID:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    YOUR-SCRUBBE-ID
                  </code>
                </li>
                <li>
                  Check &quot;Require External ID&quot; and use:
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    scrubbe-secure
                  </code>
                </li>
                <li>
                  Attach policies:
                  <ul className="ml-6 list-disc">
                    <li>ReadOnlyAccess</li>
                    <li>CloudWatchReadOnlyAccess</li>
                    <li>CloudTrailFullAccess</li>
                  </ul>
                </li>
                <li>
                  Name the role <strong>ScrubbeIntegrationRole</strong> and save
                  the ARN
                </li>
              </ol>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-medium text-indigo-600 mb-2">
                Step 2: Enable CloudTrail
              </h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Go to CloudTrail → Trails → Create Trail</li>
                <li>
                  Trail name:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    scrubbe-trail
                  </code>
                </li>
                <li>Enable for all regions</li>
                <li>
                  Store logs in S3 bucket{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    scrubbe-logs
                  </code>
                </li>
                <li>Enable SNS notification if needed</li>
              </ol>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-medium text-indigo-600 mb-2">
                Step 3: Enable CloudWatch
              </h4>
              <p>
                Make sure CloudWatch is enabled to track key metrics and alarms.
                Scrubbe will read alarm states and logs for security insights.
              </p>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-medium text-indigo-600 mb-2">
                Step 4: Connect to Scrubbe
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
                <li>Select &quot;Add Integration&quot; → AWS</li>
                <li>Paste your IAM Role ARN</li>
                <li>Enter your external ID and region(s)</li>
                <li>Select services to monitor</li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center">
            <span className="mr-2">🚨</span> SIEM & SOAR with AWS
          </h3>
          <p className="mb-4">
            Once integrated, Scrubbe will monitor all activity logs and trigger
            detections and automated responses based on rules you set in the
            dashboard.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-indigo-100 text-indigo-700">
                <tr>
                  <th className="px-4 py-2 text-left">Detection Rule</th>
                  <th className="px-4 py-2 text-left">Source</th>
                  <th className="px-4 py-2 text-left">Automated Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2">IAM user created by root</td>
                  <td className="px-4 py-2">CloudTrail</td>
                  <td className="px-4 py-2">Notify Slack + Raise incident</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    S3 object accessed by external IP
                  </td>
                  <td className="px-4 py-2">CloudTrail</td>
                  <td className="px-4 py-2">Alert + Block IP</td>
                </tr>
              </tbody>
            </table>
          </div>

          <pre className="bg-gray-800 text-green-300 text-sm p-4 rounded overflow-x-auto">
            {`trigger:
  source: aws.cloudtrail.iam
  condition: user == root AND action == "CreateUser"

action:
  - notify: security-team
  - create-ticket: jira
  - mark-incident: high`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center">
            <span className="mr-2">🧪</span> Troubleshooting
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>No logs? Verify S3 bucket and CloudTrail config</li>
            <li>Missing metrics? Ensure CloudWatch is active</li>
            <li>Access denied? Double-check IAM permissions</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center">
            <span className="mr-2">🔒</span> Security &{" "}
            <span className="mx-1">💬</span> Support
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>All data encrypted in-transit and at-rest</li>
            <li>External ID and scoped IAM ensure access control</li>
            <li>Compliant with SOC 2, ISO 27001, GDPR</li>
          </ul>

          <p className="mt-4">Need help?</p>
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
              Docs:{" "}
              <a
                href="https://scrubbe.com/docs"
                className="text-indigo-500 underline"
              >
                scrubbe.com/docs
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

export default AWS;
