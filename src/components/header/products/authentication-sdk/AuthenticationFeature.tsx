import clsx from "clsx";
import React, { ReactNode, useState } from "react";

const featureTabs = [
  "Basic Setup",
  "User Management",
  "Authentication with MFA",
  "Token-Based Access Control (RBAC)",
  "Session Management",
  "Passwordless Authentication",
  "Memory Adapter",
  "Resis Adapter",
  "Creating a Custom Adapter",
];
const AuthenticationFeature = () => {
  const [selectTab, setSelectTab] = useState("Basic Setup");

  let content: ReactNode;
  switch (selectTab) {
    case featureTabs[0]:
      content = <BasicSetup />;
      break;
    case featureTabs[1]:
      content = <UserManagement />;
      break;
    case featureTabs[2]:
      content = <Authentication />;
      break;
    case featureTabs[3]:
      content = <TokenBased />;
      break;
    case featureTabs[4]:
      content = <SessionManagement />;
      break;
    case featureTabs[5]:
      content = <PasswordlessAuth />;
      break;
    case featureTabs[6]:
      content = <MemoryAdapter />;
      break;
    case featureTabs[7]:
      content = <ResisAdapter />;
      break;
    case featureTabs[8]:
      content = <CustomAdapter />;
      break;

    default:
      break;
  }
  return (
    <div className=" max-w-[1440px] h-full mx-auto flex flex-col items-center gap-y-6 relative z-10 px-4 md:px-6 lg:px-20 xl:px-20 py-20 bg-white">
      <div className="text-center mb-4">
        <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-gray-800 mb-2">
          Authentication Features
        </h2>
        <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
        <p className="text-gray-600 text-sm sm:text-base md:max-w-2xl mx-auto ">
          Explore our comprehensive suite of authentication tools and features
          that make implementing secure user authentication a breeze
        </p>
      </div>
      {/* The main container for the tabs and content has been updated */}
      <div className="flex flex-col md:flex-row gap-4 w-full">
        {/* The tabs list takes full width on mobile, and 1/3 width on md and up */}
        <div className="md:flex-[.5] w-full rounded-md border border-gray-300 p-3">
          <div className="flex flex-col gap-2">
            {featureTabs.map((tab) => (
              <div
                onClick={() => setSelectTab(tab)}
                className={clsx(
                  "p-3 w-full cursor-pointer transition-colors",
                  tab == selectTab
                    ? " bg-gray-800 rounded-md text-white"
                    : "hover:bg-gray-100 rounded-md"
                )}
                key={tab}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
        {/* The content pane takes full width on mobile, and 2/3 width on md and up */}
        <div className="md:flex-1 w-full border rounded-lg p-3 space-y-3">
          <p className=" font-bold text-lg">{selectTab}</p>
          {content}
        </div>
      </div>
    </div>
  );
};

export default AuthenticationFeature;

const CustomAdapter = () => {
  return (
    <div className=" space-y-3">
      <p>
        Create your own custom adapter to integrate with any database or storage
        system.
      </p>
      <pre className="bg-black text-white rounded p-4 text-xs overflow-x-auto max-h-100 leading-8">
        {`import { BaseAdapter } from 'scrubbe-auth';
class MyCustomAdapter extends BaseAdapter {  
// Implement required methods  
async createUser(data) {    
// Custom implementation  
}    
async getUserById(id) {    
// Custom implementation  
}    
async getUserByEmail(email) {    
// Custom implementation  
}    
// ... other required methods}`}
      </pre>

      <p>Advantages of the Custom adapter </p>
      <ul className=" list-disc pl-5">
        <li>Extend the BaseAdapter class</li>
        <li>Implement all required methods</li>
        <li>Connect to your preferred database</li>
        <li>Customize data persistence strategies</li>
        <li>Optimize for your specific use case</li>
      </ul>
    </div>
  );
};
const ResisAdapter = () => {
  return (
    <div className=" space-y-3">
      <p>Use the in-memory adapter for development and testing purposes</p>
      <pre className="bg-black text-white rounded p-4 text-xs overflow-x-auto max-h-100 leading-8">
        {`import { ScrubeAuth, RedisAdapter } from 'scrubbe-auth';
const auth = new ScrubeAuth({  adapter: new RedisAdapter({    
url: process.env.REDIS_URL,    
prefix: 'auth',    
ttl: 86400 // 24 hours  }),  
appName: 'My Production App', 
secret: process.env.AUTH_SECRET});`}
      </pre>

      <p>Advantages of the Redis adapter </p>
      <ul className=" list-disc pl-5">
        <li>High-performance data storage</li>
        <li>Built-in TTL support for automatic expiration</li>
        <li>Cluster support for horizontal scaling</li>
        <li>Automatic key prefixing for namespacing</li>
        <li>Optional Redis Sentinel support for high availability</li>
      </ul>
    </div>
  );
};
const MemoryAdapter = () => {
  return (
    <div className=" space-y-3">
      <p>Use the in-memory adapter for development and testing purposes</p>
      <pre className="bg-black text-white rounded p-4 text-xs overflow-x-auto max-h-100 leading-8">
        {`import { ScrubeAuth, MemoryAdapter } from 'scrubbe-auth';
const auth = new ScrubeAuth({  adapter: new MemoryAdapter(),  
appName: 'My Test App',  secret: 'dev-secret'});
// The memory adapter is perfect for:
// - Local development
// - Testing environments
// - CI/CD pipelines`}
      </pre>

      <p>Benefits of the memory adapter: </p>
      <ul className=" list-disc pl-5">
        <li>Zero configuration required </li>
        <li>No external dependencies</li>
        <li>Fast setup for development</li>
        <li>Perfect for automated testing</li>
        <li>Data can be easily reset between tests</li>
      </ul>
    </div>
  );
};
const PasswordlessAuth = () => {
  return (
    <div className=" space-y-3">
      <p>
        Implement modern passwordless authentication methods for better security
        and user experience{" "}
      </p>
      <pre className="bg-black text-white rounded p-4 text-xs overflow-x-auto max-h-100 leading-8">
        {`// Send a magic link
await auth.passwordless.sendMagicLink({  email: 'user@example.com',  redirectUrl: '/dashboard'});
// Authenticate with a one-time code
const session = await auth.passwordless.verifyCode({  email: 'user@example.com',  code: '123456'});`}
      </pre>

      <p>Our passwordless options include: </p>
      <ul className=" list-disc pl-5">
        <li>Email magic links</li>
        <li>One-time codes via email or SMS</li>
        <li>WebAuthn/FIDO2 support</li>
        <li>Social login integration</li>
        <li>Biometric authentication support</li>
      </ul>
    </div>
  );
};
const SessionManagement = () => {
  return (
    <div className=" space-y-3">
      <p>
        Advanced session management capabilities for superior security and user
        experience{" "}
      </p>
      <pre className="bg-black text-white rounded p-4 text-xs overflow-x-auto max-h-100 leading-8">
        {`/// Create a new session
const session = await auth.sessions.create({  userId: user.id,  
device: req.headers['user-agent']});
// List active sessions
const activeSessions = await auth.sessions.findMany({  where: {    userId: user.id,    active: true  }});
// Revoke a session
await auth.sessions.revoke({  id: session.id});`}
      </pre>

      <p>Our RBAC system features: </p>
      <ul className=" list-disc pl-5">
        <li>Our session management includes</li>
        <li>Device tracking and management</li>
        <li>Session revocation capabilities</li>
        <li>Remember me functionality</li>
        <li>Inactive session timeout</li>
      </ul>
    </div>
  );
};
const BasicSetup = () => {
  return (
    <div className=" space-y-3">
      <p>
        Get started with Scrubbe Auth in minutes with our simple setup process
      </p>
      <pre className="bg-black text-white rounded p-4 text-xs overflow-x-auto max-h-100 leading-8">
        {`// Install the package
npm install scrubbe-auth
// OR
yarn add scrubbe-auth
// OR
pnpm add scrubbe-auth
// Import and initialize
import { ScrubeAuth } from 'scrubbe-auth';
const auth = new ScrubeAuth({  appName: 'My Awesome App',  
secret: process.env.AUTH_SECRET,  
baseUrl: 'https://myapp.com'});`}
      </pre>

      <p>The basic Setup includes: </p>
      <ul className=" list-disc pl-5">
        <li>Simple installation via npm or yarn</li>
        <li>Quick configuration with sensible defaults</li>
        <li>Automatic secure cookie handling</li>
        <li>CSRF protection out of the box</li>
        <li>Built-in security headers</li>
      </ul>
    </div>
  );
};
const UserManagement = () => {
  return (
    <div className=" space-y-3">
      <p>
        Comprehensive user management capabilities that integrate seamlessly
        with your application
      </p>
      <pre className="bg-black text-white rounded p-4 text-xs overflow-x-auto max-h-100 leading-8">
        {`// Install the package
npm install scrubbe-auth
// OR
yarn add scrubbe-auth
// OR
pnpm add scrubbe-auth
// Import and initialize
import { ScrubeAuth } from 'scrubbe-auth';
const auth = new ScrubeAuth({  appName: 'My Awesome App',  
secret: process.env.AUTH_SECRET,  
baseUrl: 'https://myapp.com'});`}
      </pre>

      <p>Our user management features include: </p>
      <ul className=" list-disc pl-5">
        <li>User creation, updates, and deletion</li>
        <li>Email verification workflows</li>
        <li>Password reset functionality</li>
        <li>Custom user metadata storage</li>
        <li>Advanced filtering and search capabilities</li>
      </ul>
    </div>
  );
};

const Authentication = () => {
  return (
    <div className=" space-y-3">
      <p>
        Enhance security with multi-factor authentication options that are easy
        to implement
      </p>
      <pre className="bg-black text-white rounded p-4 text-xs overflow-x-auto max-h-100 leading-8">
        {`// Enable TOTP-based MFA
const mfaSecret = await auth.mfa.enable({  userId: user.id,  method: 'totp'});
// Verify MFA code during login
const session = await auth.mfa.verify({  userId: user.id,  code: '123456',  
tempToken: loginResponse.tempToken});`}
      </pre>

      <p>Our MFA implementation supports: </p>
      <ul className=" list-disc pl-5">
        <li>Time-based One-Time Password (TOTP)</li>
        <li>SMS-based verification codes</li>
        <li>Email-based verification codes</li>
        <li>WebAuthn/FIDO2 for passwordless authentication</li>
        <li>Recovery codes for account access</li>
      </ul>
    </div>
  );
};
const TokenBased = () => {
  return (
    <div className=" space-y-3">
      <p>
        Implement fine-grained permission controls with our token-based RBAC
        system
      </p>
      <pre className="bg-black text-white rounded p-4 text-xs overflow-x-auto max-h-100 leading-8">
        {`// Define roles and permissions
await auth.rbac.createRole({  name: 'editor', 
 permissions: ['content.read', 'content.create', 'content.update']});
 //Assign roles to users
 await auth.rbac.assignRole({  userId: user.id,  role: 'editor'});
 // Check permissions
 const canEdit = await auth.rbac.hasPermission({  userId: user.id,  
 permission: 'content.update'})`}
      </pre>

      <p>Our RBAC system features: </p>
      <ul className=" list-disc pl-5">
        <li>Role-based permission assignments</li>
        <li>Hierarchical role structures</li>
        <li>Permission inheritance</li>
        <li>Resource-based permissions</li>
        <li>Flexible permission checking middleware</li>
      </ul>
    </div>
  );
};
