import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

interface TabProps {
  title: string;
  id: string;
  children: React.ReactNode;
  defaultActive?: boolean;
}

interface TabGroupProps {
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-lg mb-4 bg-white shadow-sm overflow-hidden">
      <div
        className="p-4 flex justify-between items-center cursor-pointer font-semibold text-blue-700 bg-white hover:bg-blue-50 transition-colors"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <button
          className={`text-blue-700 text-xl transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        >
          ▼
        </button>
      </div>
      {isOpen && <div className="p-5">{children}</div>}
    </div>
  );
};

const TabGroup: React.FC<TabGroupProps> = ({ children }) => {
  const [activeTabId, setActiveTabId] = useState<string>(() => {
    // Find the default active tab
    const tabs = React.Children.toArray(children) as React.ReactElement[];
    const defaultTab = tabs.find((tab) => tab.props.defaultActive);
    return defaultTab ? defaultTab.props.id : tabs[0]?.props.id || "";
  });

  const handleTabChange = (tabId: string) => {
    setActiveTabId(tabId);
  };

  return (
    <div className="mt-4">
      <div className="flex border-b border-gray-300 mb-4">
        {React.Children.map(children, (child) => {
          // Type assertion
          const tab = child as React.ReactElement<TabProps>;
          return (
            <button
              className={`py-2 px-4 font-medium transition-colors ${
                activeTabId === tab.props.id
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : "text-gray-600 border-b-2 border-transparent"
              }`}
              onClick={() => handleTabChange(tab.props.id)}
            >
              {tab.props.title}
            </button>
          );
        })}
      </div>
      <div>
        {React.Children.map(children, (child) => {
          // Type assertion
          const tab = child as React.ReactElement<TabProps>;
          return activeTabId === tab.props.id ? tab.props.children : null;
        })}
      </div>
    </div>
  );
};

const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

const CodeBlock: React.FC<{ children: string }> = ({ children }) => {
  return (
    <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto font-mono text-sm my-4">
      {children}
    </pre>
  );
};

const Integration: React.FC = () => {
  return (
    <div className="w-full h-auto bg-gray-50">
      <section className="min-w-[320px] max-w-[1440px] mx-auto px-5 py-12 bg-gray-50 text-gray-800">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
            <div className="w-fit h-fit font-Poppins text-slate-600 tracking-wider text-2xl xl:text-4xl font-semibold px-4 text-center">
              Built for Enterprise. Ready for Anything
            </div>
            <div className="bg-emerald-500 h-1 w-16 rounded-full"></div>
          </div>

          {/* Subheading */}
          <div className="w-full h-full flex items-center justify-center py-4">
            <span className="h-fit xl:w-3/6 text-wrap text-center text-[1rem] md:text-[1.3rem]  text-muted-foreground px-2 xl:px-0 font-Raleway font-medium">
              Unify data. Automate workflows. Drive decisions
            </span>
          </div>

          <div className="mb-10">
            {/* Webhook API Integration */}
            <AccordionItem title="Webhook API Integration">
              <p className="mb-4">
                Scrubbe&apos;s Webhook API allows you to receive real-time
                notifications about security events.
              </p>

              <TabGroup>
                <Tab title="Setup" id="webhook-setup" defaultActive>
                  <h3 className="text-xl font-semibold mb-2">
                    Setting Up Webhooks
                  </h3>
                  <p className="mb-2">
                    Create an endpoint in your application to receive webhook
                    events:
                  </p>
                  <CodeBlock>
                    {`// Node.js Express example
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/scrubbe-webhook', (req, res) => {
  const payload = req.body;
  
  // Verify the webhook signature (see Security tab)
  const isValid = verifyWebhookSignature(req);
  
  if (!isValid) {
    return res.status(401).send('Invalid signature');
  }
  
  // Process the webhook event
  console.log('Received webhook event:', payload.event_type);
  
  // Always respond with 200 to acknowledge receipt
  res.status(200).send('Event received');
});

app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});`}
                  </CodeBlock>
                </Tab>

                <Tab title="Events" id="webhook-events">
                  <h3 className="text-xl font-semibold mb-2">Event Types</h3>
                  <p className="mb-2">
                    Scrubbe sends the following main event categories:
                  </p>
                  <ul className="list-disc pl-5 mb-4">
                    <li>
                      <strong>User Events</strong>: login, logout,
                      password_reset
                    </li>
                    <li>
                      <strong>Security Events</strong>: brute_force_detected,
                      suspicious_login
                    </li>
                    <li>
                      <strong>Admin Events</strong>: user_created, user_deleted,
                      role_assigned
                    </li>
                  </ul>

                  <p className="mb-2">Example event payload:</p>
                  <CodeBlock>
                    {`{
  "event_id": "evt_123456789",
  "event_type": "user.login",
  "created_at": "2025-04-19T14:30:00Z",
  "tenant_id": "tnt_abcdef123",
  "data": {
    "user_id": "usr_987654321",
    "email": "user@example.com",
    "ip_address": "192.168.1.1",
    "success": true
  }
}`}
                  </CodeBlock>
                </Tab>

                <Tab title="Security" id="webhook-security">
                  <h3 className="text-xl font-semibold mb-2">
                    Security Best Practices
                  </h3>
                  <p className="mb-2">
                    Verify webhook signatures to ensure requests are coming from
                    Scrubbe:
                  </p>
                  <CodeBlock>
                    {`// Verify webhook signature
const verifyWebhookSignature = (req) => {
  const crypto = require('crypto');
  
  // Get the signature from the header
  const signature = req.headers['x-scrubbe-signature'];
  if (!signature) {
    return false;
  }
  
  // Get your webhook secret from environment variables
  const webhookSecret = process.env.SCRUBBE_WEBHOOK_SECRET;
  
  // Create a HMAC hash of the request body
  const hmac = crypto.createHmac('sha256', webhookSecret);
  const body = JSON.stringify(req.body);
  hmac.update(body);
  const calculatedSignature = hmac.digest('hex');
  
  // Compare the signatures using a timing-safe comparison
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(calculatedSignature)
  );
};`}
                  </CodeBlock>
                </Tab>
              </TabGroup>
            </AccordionItem>

            {/* SCIM Integration */}
            <AccordionItem title="SCIM Provisioning">
              <p className="mb-4">
                System for Cross-domain Identity Management (SCIM) allows you to
                automate user provisioning.
              </p>

              <TabGroup>
                <Tab title="Setup" id="scim-setup" defaultActive>
                  <h3 className="text-xl font-semibold mb-2">
                    Setting Up SCIM
                  </h3>
                  <p className="mb-2">
                    Scrubbe provides the following SCIM endpoints:
                  </p>
                  <ul className="list-disc pl-5 mb-4">
                    <li>
                      SCIM Base URL:{" "}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        https://api.scrubbe.com/scim/v2
                      </code>
                    </li>
                    <li>
                      Users Endpoint:{" "}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        /Users
                      </code>
                    </li>
                    <li>
                      Groups Endpoint:{" "}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        /Groups
                      </code>
                    </li>
                  </ul>

                  <p className="mb-2">
                    For SCIM API requests, use the SCIM token in the
                    Authorization header:
                  </p>
                  <CodeBlock>
                    {`// Example SCIM API request
fetch('https://api.scrubbe.com/scim/v2/Users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_SCIM_TOKEN',
    'Content-Type': 'application/scim+json'
  }
})
.then(response => response.json())
.then(data => console.log('Users:', data))
.catch(error => console.error('Error fetching users:', error));`}
                  </CodeBlock>
                </Tab>

                <Tab title="User Management" id="scim-users">
                  <h3 className="text-xl font-semibold mb-2">Managing Users</h3>
                  <p className="mb-2">Create new users using the SCIM API:</p>
                  <CodeBlock>
                    {`// Create a new user
const createUser = async (userData) => {
  try {
    const response = await fetch('https://api.scrubbe.com/scim/v2/Users', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_SCIM_TOKEN',
        'Content-Type': 'application/scim+json'
      },
      body: JSON.stringify({
        schemas: ['urn:ietf:params:scim:schemas:core:2.0:User'],
        userName: userData.email,
        name: {
          givenName: userData.firstName,
          familyName: userData.lastName
        },
        emails: [
          {
            primary: true,
            value: userData.email,
            type: 'work'
          }
        ],
        active: true
      })
    });
    
    const data = await response.json();
    console.log('User created:', data);
    return data;
  } catch (error) {
    console.error('Error creating user:', error);
  }
};`}
                  </CodeBlock>
                </Tab>

                <Tab title="IdP Integration" id="scim-idp">
                  <h3 className="text-xl font-semibold mb-2">
                    Identity Provider Integration
                  </h3>
                  <p className="mb-2">
                    Connect Scrubbe to Azure AD for automatic provisioning:
                  </p>
                  <ol className="list-decimal pl-5 mb-4">
                    <li>In Azure AD, go to Enterprise Applications → Add</li>
                    <li>Go to Provisioning → Get Started → Automatic</li>
                    <li>
                      Enter your Scrubbe SCIM details:
                      <ul className="list-disc pl-5 mt-1">
                        <li>
                          Tenant URL:{" "}
                          <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                            https://api.scrubbe.com/scim/v2
                          </code>
                        </li>
                        <li>Secret Token: Your Scrubbe SCIM token</li>
                      </ul>
                    </li>
                    <li>Test the connection and save</li>
                  </ol>

                  <p className="mb-2">
                    Connect Scrubbe to Okta for automatic provisioning:
                  </p>
                  <ol className="list-decimal pl-5 mb-4">
                    <li>
                      In Okta Admin Console, go to Applications → Add
                      Application
                    </li>
                    <li>Select &quot;SCIM&quot; as the sign-on method</li>
                    <li>
                      Enter your Scrubbe SCIM details:
                      <ul className="list-disc pl-5 mt-1">
                        <li>
                          SCIM 2.0 Base URL:{" "}
                          <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                            https://api.scrubbe.com/scim/v2
                          </code>
                        </li>
                        <li>OAuth Bearer Token: Your Scrubbe SCIM token</li>
                      </ul>
                    </li>
                  </ol>
                </Tab>
              </TabGroup>
            </AccordionItem>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integration;
