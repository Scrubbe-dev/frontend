"use client"; // Add this directive if using Next.js App Router
import {
  FaSearch,
  FaBolt,
  FaShieldAlt,
  FaSyncAlt,
  FaChartBar,
  FaLock,
  FaCircle,
} from "react-icons/fa"; // Example icons

// Define colors based on original CSS variables - you could also define these in tailwind.config.js
const colors = {
  primary: "#2c3e50", // Dark blue/gray
  secondary: "#3498db", // Blue
  accent: "#e74c3c", // Red
  success: "#2ecc71", // Green
  warning: "#f39c12", // Orange
  light: "#ecf0f1", // Light gray
  dark: "#2c3e50", // Same as primary
};

const SoarLandingPage = () => {
  return (
    <div className="min-w-[320px] max-w-[1440px] mx-auto bg-gray-100 text-gray-800 leading-relaxed">
      <header className="bg-gradient-to-br from-[#2c3e50] to-[#3498db] text-white py-5 shadow-md">
        <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            SOAR<span className="text-[#e74c3c]">Shield</span>
          </div>
          <nav>
            <ul className="flex flex-col md:flex-row list-none p-0 m-0">
              <li className="md:ml-5 mb-2 md:mb-0">
                <a
                  href="#features"
                  className="text-white no-underline font-medium transition-colors hover:text-[#e74c3c]"
                >
                  Features
                </a>
              </li>
              <li className="md:ml-5 mb-2 md:mb-0">
                <a
                  href="#workflow"
                  className="text-white no-underline font-medium transition-colors hover:text-[#e74c3c]"
                >
                  How It Works
                </a>
              </li>
              <li className="md:ml-5 mb-2 md:mb-0">
                <a
                  href="#benefits"
                  className="text-white no-underline font-medium transition-colors hover:text-[#e74c3c]"
                >
                  Benefits
                </a>
              </li>
              <li className="md:ml-5">
                <a
                  href="#dashboard"
                  className="text-white no-underline font-medium transition-colors hover:text-[#e74c3c]"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div
        className="relative h-96 flex items-center text-center text-white"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/path/to/your/hero-image.jpg) center/cover no-repeat",
        }}
      >
        {/* Using a static placeholder image path for the background style */}
        {/* Note: For dynamic images or using Next.js Image component, this approach would need adjustment,
             potentially involving an overlay div on top of a Next.js Image component */}
        <div className="container mx-auto px-5 max-w-3xl">
          <h1 className="text-4xl md:text-5xl mb-5">
            Automated Security Operations Without a Dedicated Team
          </h1>
          <p className="text-lg mb-8">
            Our SOAR solution automatically detects, analyzes, and remediates
            security incidents, giving you enterprise-grade protection without
            the enterprise-level staff.
          </p>
          <a
            href="#workflow"
            className="inline-block bg-[#e74c3c] text-white py-3 px-8 rounded no-underline font-medium transition-colors hover:bg-[#c0392b]"
          >
            See How It Works
          </a>
        </div>
      </div>

      <section className="features bg-white py-16" id="features">
        <div className="container mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-[#2c3e50] mb-4">
              SOAR Automation Features
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Comprehensive security orchestration, automation, and response
              without the need for security experts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card bg-white rounded-lg p-8 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl text-[#3498db] mb-5">
                <FaSearch />
              </div>
              <h3 className="text-xl text-[#2c3e50] mb-4">
                Automated Alert Triage
              </h3>
              <p>
                Automatically categorize and prioritize security alerts from
                your SIEM based on threat intelligence, reducing alert fatigue
                and focusing on what matters.
              </p>
            </div>
            <div className="feature-card bg-white rounded-lg p-8 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl text-[#3498db] mb-5">
                <FaBolt />
              </div>
              <h3 className="text-xl text-[#2c3e50] mb-4">
                Instant Response Playbooks
              </h3>
              <p>
                Pre-configured response workflows that automatically execute
                when triggered by specific alert types, providing immediate
                containment and remediation.
              </p>
            </div>
            <div className="feature-card bg-white rounded-lg p-8 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl text-[#3498db] mb-5">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl text-[#2c3e50] mb-4">
                Threat Intelligence Integration
              </h3>
              <p>
                Continuous updates from threat intelligence feeds to enhance
                detection capabilities and keep your defenses up-to-date against
                emerging threats.
              </p>
            </div>
            <div className="feature-card bg-white rounded-lg p-8 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl text-[#3498db] mb-5">
                <FaSyncAlt />
              </div>
              <h3 className="text-xl text-[#2c3e50] mb-4">
                End-to-End Automation
              </h3>
              <p>
                Full-cycle incident handling from detection through
                investigation to remediation without manual intervention for
                common attack patterns.
              </p>
            </div>
            <div className="feature-card bg-white rounded-lg p-8 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl text-[#3498db] mb-5">
                <FaChartBar />
              </div>
              <h3 className="text-xl text-[#2c3e50] mb-4">
                Comprehensive Reporting
              </h3>
              <p>
                Detailed reports on incidents, response effectiveness, and
                security posture that are easy to understand without specialized
                security knowledge.
              </p>
            </div>
            <div className="feature-card bg-white rounded-lg p-8 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl text-[#3498db] mb-5">
                <FaLock />
              </div>
              <h3 className="text-xl text-[#2c3e50] mb-4">
                Compliance Automation
              </h3>
              <p>
                Automated documentation of security incidents and responses to
                meet regulatory requirements without additional compliance
                staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="workflow bg-[#ecf0f1] py-16" id="workflow">
        <div className="container mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-[#2c3e50] mb-4">
              How SOAR Automation Works
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              A seamless process from detection to resolution, all without human
              intervention
            </p>
          </div>
          <div className="workflow-steps flex flex-wrap justify-center relative">
            {/* Line is hidden on small screens via media query in original CSS - replicated with hidden md:block */}
            <div className="workflow-line hidden md:block absolute top-8 left-[20%] right-[20%] h-0.5 bg-[#3498db] z-0"></div>
            <div className="workflow-step w-48 text-center mx-5 relative z-10 mb-10 md:mb-0">
              <div className="step-number flex items-center justify-center w-16 h-16 bg-[#3498db] text-white text-2xl font-bold rounded-full mx-auto mb-5">
                1
              </div>
              <h3>Detection</h3>
              <p className="text-sm">
                SIEM detects suspicious activities and generates alerts based on
                pre-defined security rules.
              </p>
            </div>
            <div className="workflow-step w-48 text-center mx-5 relative z-10 mb-10 md:mb-0">
              <div className="step-number flex items-center justify-center w-16 h-16 bg-[#3498db] text-white text-2xl font-bold rounded-full mx-auto mb-5">
                2
              </div>
              <h3>Analysis</h3>
              <p className="text-sm">
                SOAR automatically analyzes alerts using threat intelligence and
                machine learning.
              </p>
            </div>
            <div className="workflow-step w-48 text-center mx-5 relative z-10 mb-10 md:mb-0">
              <div className="step-number flex items-center justify-center w-16 h-16 bg-[#3498db] text-white text-2xl font-bold rounded-full mx-auto mb-5">
                3
              </div>
              <h3>Decision</h3>
              <p className="text-sm">
                Based on severity and context, SOAR determines the appropriate
                response playbook.
              </p>
            </div>
            <div className="workflow-step w-48 text-center mx-5 relative z-10 mb-10 md:mb-0">
              <div className="step-number flex items-center justify-center w-16 h-16 bg-[#3498db] text-white text-2xl font-bold rounded-full mx-auto mb-5">
                4
              </div>
              <h3>Remediation</h3>
              <p className="text-sm">
                Automated playbooks execute containment and remediation actions
                across security tools.
              </p>
            </div>
            <div className="workflow-step w-48 text-center mx-5 relative z-10">
              <div className="step-number flex items-center justify-center w-16 h-16 bg-[#3498db] text-white text-2xl font-bold rounded-full mx-auto mb-5">
                5
              </div>
              <h3>Learning</h3>
              <p className="text-sm">
                System learns from each incident to improve future detection and
                response.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard bg-white py-16" id="dashboard">
        <div className="container mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-[#2c3e50] mb-4">
              SOAR Dashboard
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Real-time visibility into your security operations - simplified
              for non-security professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="dashboard-card rounded-lg p-5 shadow-md">
              <h3 className="text-lg mb-4 flex items-center justify-between">
                Security Status
                <span className="indicator w-3 h-3 rounded-full bg-[#2ecc71]">
                  <FaCircle size={12} color={colors.success} />
                </span>
              </h3>
              <div className="progress-bar h-2 bg-gray-200 rounded-md overflow-hidden mb-3">
                <div
                  className="progress h-full bg-[#3498db]"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <div className="metric-grid grid grid-cols-2 gap-4">
                <div className="metric bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="text-2xl mb-1">12</h4>
                  <p className="text-gray-600 text-sm">Incidents Today</p>
                </div>
                <div className="metric bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="text-2xl mb-1">100%</h4>
                  <p className="text-gray-600 text-sm">Auto-Resolved</p>
                </div>
                <div className="metric bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="text-2xl mb-1">3.2m</h4>
                  <p className="text-gray-600 text-sm">Events Analyzed</p>
                </div>
                <div className="metric bg-gray-50 rounded-lg p-4 text-center">
                  <h4 className="text-2xl mb-1">1.5s</h4>
                  <p className="text-gray-600 text-sm">Avg Response Time</p>
                </div>
              </div>
            </div>
            <div className="dashboard-card rounded-lg p-5 shadow-md">
              <h3 className="text-lg mb-4">Recent Automated Resolutions</h3>
              <ul className="incident-list list-none p-0 m-0">
                <li className="incident-item py-3 border-b border-gray-200 flex items-center justify-between last:border-b-0">
                  <div>Brute Force Attack - User Login</div>
                  <span className="incident-status text-xs py-1 px-2.5 rounded-full font-medium bg-green-100 text-[#2ecc71]">
                    Auto-Resolved
                  </span>
                </li>
                <li className="incident-item py-3 border-b border-gray-200 flex items-center justify-between last:border-b-0">
                  <div>Malware Detection - Endpoint</div>
                  <span className="incident-status text-xs py-1 px-2.5 rounded-full font-medium bg-green-100 text-[#2ecc71]">
                    Auto-Resolved
                  </span>
                </li>
                <li className="incident-item py-3 border-b border-gray-200 flex items-center justify-between last:border-b-0">
                  <div>Suspicious Email - Phishing</div>
                  <span className="incident-status text-xs py-1 px-2.5 rounded-full font-medium bg-green-100 text-[#2ecc71]">
                    Auto-Resolved
                  </span>
                </li>
                <li className="incident-item py-3 border-b border-gray-200 flex items-center justify-between last:border-b-0">
                  <div>Unusual Network Traffic</div>
                  <span className="incident-status text-xs py-1 px-2.5 rounded-full font-medium bg-orange-100 text-[#f39c12]">
                    Investigating
                  </span>
                </li>
              </ul>
            </div>
            <div className="dashboard-card rounded-lg p-5 shadow-md">
              <h3 className="text-lg mb-4">Top Automated Actions</h3>
              <ul className="incident-list list-none p-0 m-0">
                <li className="incident-item py-3 border-b border-gray-200 flex items-center justify-between last:border-b-0">
                  <div>Account Lockout</div>
                  <div>32 times</div>
                </li>
                <li className="incident-item py-3 border-b border-gray-200 flex items-center justify-between last:border-b-0">
                  <div>Email Quarantine</div>
                  <div>27 times</div>
                </li>
                <li className="incident-item py-3 border-b border-gray-200 flex items-center justify-between last:border-b-0">
                  <div>IP Blocking</div>
                  <div>19 times</div>
                </li>
                <li className="incident-item py-3 border-b border-gray-200 flex items-center justify-between last:border-b-0">
                  <div>Malware Removal</div>
                  <div>11 times</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits bg-white py-16" id="benefits">
        <div className="container mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-[#2c3e50] mb-4">
              Benefits of Automated SOAR
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Enterprise-grade security without the enterprise-level security
              team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="benefit-card bg-white border-l-4 border-[#e74c3c] rounded-lg p-8 shadow-md">
              <h3 className="text-xl text-[#2c3e50] mb-4">Cost Efficiency</h3>
              <p>
                Eliminate the need for a 24/7 security operations team while
                maintaining robust security monitoring and response
                capabilities.
              </p>
            </div>
            <div className="benefit-card bg-white border-l-4 border-[#e74c3c] rounded-lg p-8 shadow-md">
              <h3 className="text-xl text-[#2c3e50] mb-4">
                Consistent Response
              </h3>
              <p>
                Every incident is handled according to best practices and
                industry standards, eliminating human inconsistency or error.
              </p>
            </div>
            <div className="benefit-card bg-white border-l-4 border-[#e74c3c] rounded-lg p-8 shadow-md">
              <h3 className="text-xl text-[#2c3e50] mb-4">
                Faster Remediation
              </h3>
              <p>
                Automated responses happen in seconds rather than hours or days,
                minimizing potential damage from security incidents.
              </p>
            </div>
            <div className="benefit-card bg-white border-l-4 border-[#e74c3c] rounded-lg p-8 shadow-md">
              <h3 className="text-xl text-[#2c3e50] mb-4">Scalable Security</h3>
              <p>
                Handle increasing volumes of security alerts without adding
                personnel, keeping security costs predictable as your business
                grows.
              </p>
            </div>
            <div className="benefit-card bg-white border-l-4 border-[#e74c3c] rounded-lg p-8 shadow-md">
              <h3 className="text-xl text-[#2c3e50] mb-4">Compliance Ready</h3>
              <p>
                Automatically document all security incidents and responses for
                easy reporting to meet regulatory requirements.
              </p>
            </div>
            <div className="benefit-card bg-white border-l-4 border-[#e74c3c] rounded-lg p-8 shadow-md">
              <h3 className="text-xl text-[#2c3e50] mb-4">
                Focus on Core Business
              </h3>
              <p>
                Your IT team can focus on strategic initiatives rather than
                reactive security firefighting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats bg-gradient-to-br from-[#2c3e50] to-[#3498db] text-white text-center py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stat-item">
              <h3 className="text-4xl md:text-5xl mb-2">99.8%</h3>
              <p>Incidents Automatically Resolved</p>
            </div>
            <div className="stat-item">
              <h3 className="text-4xl md:text-5xl mb-2">45x</h3>
              <p>Faster Than Manual Response</p>
            </div>
            <div className="stat-item">
              <h3 className="text-4xl md:text-5xl mb-2">67%</h3>
              <p>Cost Reduction vs. SOC Team</p>
            </div>
            <div className="stat-item">
              <h3 className="text-4xl md:text-5xl mb-2">24/7</h3>
              <p>Continuous Protection</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta bg-white py-16 text-center">
        <div className="container mx-auto px-5 max-w-2xl">
          <h2 className="text-3xl md:text-4xl text-[#2c3e50] mb-5">
            Ready to Automate Your Security Operations?
          </h2>
          <p className="mb-8 text-gray-600">
            Get enterprise-grade security protection without hiring a dedicated
            security team. Our SOAR solution integrates with your existing SIEM
            to provide automated detection, analysis, and remediation of
            security threats.
          </p>
          <a
            href="#"
            className="inline-block bg-[#e74c3c] text-white py-3 px-8 rounded no-underline font-medium transition-colors hover:bg-[#c0392b]"
          >
            Get Started Today
          </a>
        </div>
      </section>

      <footer className="bg-[#2c3e50] text-white py-10">
        <div className="container mx-auto px-5 footer-content flex flex-wrap justify-between">
          <div className="footer-column w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 min-w-[250px]">
            <h3 className="text-lg text-[#3498db] mb-5">
              SOAR<span className="text-[#e74c3c]">Shield</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Enterprise security automation for businesses without dedicated
              security teams.
            </p>
          </div>
          <div className="footer-column w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 min-w-[250px]">
            <h3 className="text-lg text-[#3498db] mb-5">Features</h3>
            <ul className="list-none p-0 m-0 text-sm">
              <li className="mb-2">
                <a
                  href="#features"
                  className="text-gray-400 no-underline transition-colors hover:text-white"
                >
                  Automated Triage
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#features"
                  className="text-gray-400 no-underline transition-colors hover:text-white"
                >
                  Response Playbooks
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#features"
                  className="text-gray-400 no-underline transition-colors hover:text-white"
                >
                  Threat Intelligence
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#features"
                  className="text-gray-400 no-underline transition-colors hover:text-white"
                >
                  Compliance Automation
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 min-w-[250px]">
            <h3 className="text-lg text-[#3498db] mb-5">Resources</h3>
            <ul className="list-none p-0 m-0 text-sm">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 no-underline transition-colors hover:text-white"
                >
                  Documentation
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 no-underline transition-colors hover:text-white"
                >
                  API Reference
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 no-underline transition-colors hover:text-white"
                >
                  Integration Guide
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 no-underline transition-colors hover:text-white"
                >
                  Support Center
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 min-w-[250px]">
            <h3 className="text-lg text-[#3498db] mb-5">Company</h3>
            <ul className="list-none p-0 m-0 text-sm">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 no-underline transition-colors hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 no-underline transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 no-underline transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 no-underline transition-colors hover:text-white"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-5 copyright text-center pt-5 mt-5 border-t border-gray-700 text-gray-400 text-sm">
          <p>&copy; 2025 SOARShield. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SoarLandingPage;

/* const SoarDashboard = () => {
  return <div>SoarDashboard</div>;
};

export default SoarDashboard; */
