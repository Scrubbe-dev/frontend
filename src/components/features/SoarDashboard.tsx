import React from "react";

const SoarDashboard = () => {
  return (
    <section className="w-full mx-auto bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div
        className="relative background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), center/cover no-repeat;
 text-white text-center"
      >
        <div className="absolute inset-0 z-0 bg-black opacity-70"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 flex items-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Automated Security Operations Without a Dedicated Team
            </h1>
            <p className="text-lg mb-8">
              Our SOAR solution automatically detects, analyzes, and remediates
              security incidents, giving you enterprise-grade protection without
              the enterprise-level staff.
            </p>
            <a
              href="#workflow"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 bg-white px-4 md:px-[4rem] xl:px-[8rem]"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              SOAR Automation Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive security orchestration, automation, and response
              without the need for security experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard2
              emoji="🔍"
              title="Automated Alert Triage"
              description="Automatically categorize and prioritize security alerts from your SIEM based on threat intelligence, reducing alert fatigue and focusing on what matters."
            />
            <FeatureCard2
              emoji="⚡"
              title="Instant Response Playbooks"
              description="Pre-configured response workflows that automatically execute when triggered by specific alert types, providing immediate containment and remediation."
            />
            <FeatureCard2
              emoji="🛡️"
              title="Threat Intelligence Integration"
              description="Continuous updates from threat intelligence feeds to enhance detection capabilities and keep your defenses up-to-date against emerging threats."
            />
            <FeatureCard2
              emoji="🔄"
              title="End-to-End Automation"
              description="Full-cycle incident handling from detection through investigation to remediation without manual intervention for common attack patterns."
            />
            <FeatureCard2
              emoji="📊"
              title="Comprehensive Reporting"
              description="Detailed reports on incidents, response effectiveness, and security posture that are easy to understand without specialized security knowledge."
            />
            <FeatureCard2
              emoji="🔐"
              title="Compliance Automation"
              description="Automated documentation of security incidents and responses to meet regulatory requirements without additional compliance staff."
            />
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How SOAR Automation Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A seamless process from detection to resolution, all without human
              intervention
            </p>
          </div>

          <div className="flex flex-wrap justify-center relative">
            {/* Connecting line that spans from step 1 to step 5 */}
            <div className="hidden md:block absolute top-[2rem] left-0 right-0 h-1 bg-blue-500 z-0 mx-[6rem]"></div>

            <WorkflowStep
              number={1}
              title="Detection"
              description="SIEM detects suspicious activities and generates alerts based on pre-defined security rules."
            />
            <WorkflowStep
              number={2}
              title="Analysis"
              description="SOAR automatically analyzes alerts using threat intelligence and machine learning."
            />
            <WorkflowStep
              number={3}
              title="Decision"
              description="Based on severity and context, SOAR determines the appropriate response playbook."
            />
            <WorkflowStep
              number={4}
              title="Remediation"
              description="Automated playbooks execute containment and remediation actions across security tools."
            />
            <WorkflowStep
              number={5}
              title="Learning"
              description="System learns from each incident to improve future detection and response."
            />
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section
        id="dashboard"
        className="py-16 bg-white px-4 md:px-[4rem] xl:px-[8rem]"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              SOAR Dashboard
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real-time visibility into your security operations - simplified
              for non-security professionals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <DashboardCard title="Security Status" indicator="green">
              <div className="h-2 bg-gray-200 rounded-full mb-4">
                <div className="h-full bg-blue-500 rounded-full w-[85%]"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <MetricItem value="12" label="Incidents Today" />
                <MetricItem value="100%" label="Auto-Resolved" />
                <MetricItem value="3.2m" label="Events Analyzed" />
                <MetricItem value="1.5s" label="Avg Response Time" />
              </div>
            </DashboardCard>

            <DashboardCard title="Recent Automated Resolutions">
              <ul className="divide-y divide-gray-200">
                <IncidentItem
                  name="Brute Force Attack - User Login"
                  status="Auto-Resolved"
                  statusColor="green"
                />
                <IncidentItem
                  name="Malware Detection - Endpoint"
                  status="Auto-Resolved"
                  statusColor="green"
                />
                <IncidentItem
                  name="Suspicious Email - Phishing"
                  status="Auto-Resolved"
                  statusColor="green"
                />
                <IncidentItem
                  name="Unusual Network Traffic"
                  status="Investigating"
                  statusColor="yellow"
                />
              </ul>
            </DashboardCard>

            <DashboardCard title="Top Automated Actions">
              <ul className="divide-y divide-gray-200">
                <ActionItem name="Account Lockout" count="32 times" />
                <ActionItem name="Email Quarantine" count="27 times" />
                <ActionItem name="IP Blocking" count="19 times" />
                <ActionItem name="Malware Removal" count="11 times" />
              </ul>
            </DashboardCard>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="py-16 bg-white px-4 md:px-[4rem] xl:px-[8rem]"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Benefits of Automated SOAR
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade security without the enterprise-level security
              team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              title="Cost Efficiency"
              description="Eliminate the need for a 24/7 security operations team while maintaining robust security monitoring and response capabilities."
            />
            <BenefitCard
              title="Consistent Response"
              description="Every incident is handled according to best practices and industry standards, eliminating human inconsistency or error."
            />
            <BenefitCard
              title="Faster Remediation"
              description="Automated responses happen in seconds rather than hours or days, minimizing potential damage from security incidents."
            />
            <BenefitCard
              title="Scalable Security"
              description="Handle increasing volumes of security alerts without adding personnel, keeping security costs predictable as your business grows."
            />
            <BenefitCard
              title="Compliance Ready"
              description="Automatically document all security incidents and responses for easy reporting to meet regulatory requirements."
            />
            <BenefitCard
              title="Focus on Core Business"
              description="Your IT team can focus on strategic initiatives rather than reactive security firefighting."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#2c3e50] to-[#3498db] text-white text-center px-4 md:px-[4rem] xl:px-[8rem]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatItem value="99.8%" label="Incidents Automatically Resolved" />
            <StatItem value="45x" label="Faster Than Manual Response" />
            <StatItem value="67%" label="Cost Reduction vs. SOC Team" />
            <StatItem value="24/7" label="Continuous Protection" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Automate Your Security Operations?
            </h2>
            <p className="text-gray-600 mb-8">
              Get enterprise-grade security protection without hiring a
              dedicated security team. Our SOAR solution integrates with your
              existing SIEM to provide automated detection, analysis, and
              remediation of security threats.
            </p>
            <a
              href="#"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

// Component for Feature Cards with Emoji
interface FeatureCard2Props {
  emoji: string;
  title: string;
  description: string;
}

const FeatureCard2: React.FC<FeatureCard2Props> = ({
  emoji,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300">
      <div className="mb-4">
        <div
          style={{
            fontSize: "40px",
            marginBottom: "20px",
            color: "#3498db",
          }}
        >
          {emoji}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Component for Workflow Steps
interface WorkflowStepProps {
  number: number;
  title: string;
  description: string;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="w-48 text-center mx-4 mb-8 z-10">
      <div className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white text-2xl font-bold rounded-full mb-4 mx-auto">
        {number}
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

// Component for Dashboard Cards
interface DashboardCardProps {
  title: string;
  indicator?: string;
  children: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  indicator,
  children,
}) => {
  const getIndicatorColor = (status: string | undefined) => {
    switch (status) {
      case "green":
        return "bg-green-500";
      case "orange":
        return "bg-yellow-500";
      case "red":
        return "bg-red-500";
      default:
        return "";
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center justify-between">
        {title}
        {indicator && (
          <span
            className={`inline-block w-3 h-3 rounded-full ${getIndicatorColor(
              indicator
            )}`}
          ></span>
        )}
      </h3>
      {children}
    </div>
  );
};

// Component for Metric Items
interface MetricItemProps {
  value: string;
  label: string;
}

const MetricItem: React.FC<MetricItemProps> = ({ value, label }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 text-center">
      <h4 className="text-xl font-bold text-gray-800 mb-1">{value}</h4>
      <p className="text-gray-500 text-sm">{label}</p>
    </div>
  );
};

// Component for Incident Items
interface IncidentItemProps {
  name: string;
  status: string;
  statusColor: string;
}

const IncidentItem: React.FC<IncidentItemProps> = ({
  name,
  status,
  statusColor,
}) => {
  const getStatusClass = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-100 text-green-600";
      case "yellow":
        return "bg-yellow-100 text-yellow-600";
      case "red":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <li className="py-4 flex items-center justify-between">
      <div>{name}</div>
      <span
        className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusClass(
          statusColor
        )}`}
      >
        {status}
      </span>
    </li>
  );
};

// Component for Action Items
interface ActionItemProps {
  name: string;
  count: string;
}

const ActionItem: React.FC<ActionItemProps> = ({ name, count }) => {
  return (
    <li className="py-4 flex items-center justify-between">
      <div>{name}</div>
      <div className="text-gray-500 text-sm">{count}</div>
    </li>
  );
};

// Component for Benefit Cards
interface BenefitCardProps {
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-500">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Component for Stat Items
interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  return (
    <div className="p-4">
      <h3 className="text-3xl font-bold mb-2">{value}</h3>
      <p>{label}</p>
    </div>
  );
};

export default SoarDashboard;
