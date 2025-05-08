import React from "react";

const StartUps = () => {
  return (
    // Applying body styles to the main container div
    <div className="w-full mx-auto bg-[#f8f9fa] text-[#212529] leading-relaxed">
      <section className="py-16 text-center text-white bg-gradient-to-br from-slate-800 to-[#2a4365]">
        <h1 className="text-4xl md:text-5xl mb-4">
          Enterprise-Grade Security For Startups
        </h1>
        <p className="text-lg md:text-xl max-w-screen-md mx-auto mb-8">
          Scrubbe provides all-in-one SIEM and SOAR solutions, allowing startups
          to secure their digital assets without the complexity and cost of a
          dedicated security team.
        </p>
        <a
          href="#"
          className="bg-[#4361ee] text-white px-8 py-3 rounded text-lg hover:bg-[#3a0ca3] transform hover:-translate-y-0.5 transition duration-300 no-underline"
        >
          Start Your Free Trial
        </a>
      </section>

      <section className="py-20 px-4 md:px-[4rem] xl:px-[8rem]">
        <div className="text-center mb-12">
          <h2 className="text-[#3a0ca3] text-3xl md:text-4xl mb-4 relative inline-block">
            Why Startups Choose Scrubbe
            <span className="absolute bottom-[-10px] left-1/4 w-1/2 h-0.5 bg-[#4cc9f0]"></span>
          </h2>
          <p className="text-[#212529] text-lg">
            Security shouldn&apos;t be a luxury reserved for enterprise
            companies with massive budgets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
            <div className="text-[#4361ee] text-4xl mb-4">🛡️</div>
            <h3 className="text-[#3a0ca3] text-xl font-semibold mb-4">
              All-in-One Security
            </h3>
            <p className="text-[#212529]">
              Get complete visibility across your entire environment with our
              integrated SIEM and SOAR platform, designed specifically for
              startup needs.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
            <div className="text-[#4361ee] text-4xl mb-4">⚡</div>
            <h3 className="text-[#3a0ca3] text-xl font-semibold mb-4">
              Quick Implementation
            </h3>
            <p className="text-[#212529]">
              Deploy in minutes, not months. Our cloud-native solution gets you
              protected fast, without complex infrastructure setup.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
            <div className="text-[#4361ee] text-4xl mb-4">💰</div>
            <h3 className="text-[#3a0ca3] text-xl font-semibold mb-4">
              Cost-Effective
            </h3>
            <p className="text-[#212529]">
              Save up to 80% compared to traditional security solutions. Pay
              only for what you need, with flexible plans that grow with your
              startup.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
            <div className="text-[#4361ee] text-4xl mb-4">🤖</div>
            <h3 className="text-[#3a0ca3] text-xl font-semibold mb-4">
              Automated Response
            </h3>
            <p className="text-[#212529]">
              Our AI-powered system automatically detects and responds to
              threats in real-time, so you don&apos;t need a 24/7 security team.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
            <div className="text-[#4361ee] text-4xl mb-4">📊</div>
            <h3 className="text-[#3a0ca3] text-xl font-semibold mb-4">
              Compliance Ready
            </h3>
            <p className="text-[#212529]">
              Meet SOC 2, GDPR, HIPAA, and other compliance requirements with
              pre-built reports and continuous monitoring.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
            <div className="text-[#4361ee] text-4xl mb-4">🔍</div>
            <h3 className="text-[#3a0ca3] text-xl font-semibold mb-4">
              Proactive Threat Hunting
            </h3>
            <p className="text-[#212529]">
              Don&apos;t just wait for alerts. Scrubbe actively hunts for
              potential threats before they become problems.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f1f5f9] py-20 px-4 md:px-[4rem] xl:px-[8rem]">
        <div className="text-center mb-12">
          <h2 className="text-[#3a0ca3] text-3xl md:text-4xl mb-4 relative inline-block">
            Features Built for Startups
            <span className="absolute bottom-[-10px] left-1/4 w-1/2 h-0.5 bg-[#4cc9f0]"></span>
          </h2>
          <p className="text-[#212529] text-lg">
            Everything you need to secure your business without a dedicated
            security team
          </p>
        </div>

        <article className="flex flex-row-reverse flex-wrap items-center mb-16">
          <aside className="flex-1 min-w-[300px] p-8 text-[#212529]">
            <h3 className="text-[#3a0ca3] text-2xl font-semibold mb-4">
              Centralized Log Management & Analysis
            </h3>
            <p className="mb-4">
              Collect, normalize, and analyze logs from all your systems,
              applications, and cloud services in one place. Our powerful SIEM
              engine automatically correlates events to detect complex threats
              that single-point solutions miss.
            </p>
            <ul className="list-disc pl-6">
              <li>Cloud-native architecture with unlimited scalability</li>
              <li>Pre-built connectors for popular tools and services</li>
              <li>Machine learning to reduce false positives</li>
            </ul>
          </aside>
          <div className="flex-1 min-w-[300px] text-center p-8">
            {/* SVG converted from HTML */}
            <svg
              viewBox="0 0 500 300"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-full rounded-lg shadow-md"
            >
              {/* Dashboard background */}
              <rect
                x="10"
                y="10"
                width="480"
                height="280"
                rx="8"
                fill="#f8f9fa"
                stroke="#e9ecef"
                strokeWidth="2"
              />

              {/* Header bar */}
              <rect
                x="10"
                y="10"
                width="480"
                height="40"
                rx="8"
                fill="#4361ee"
                stroke="#3a0ca3"
                strokeWidth="2"
              />
              <text x="30" y="35" fontFamily="Arial" fontSize="16" fill="white">
                Scrubbe Log Analysis Dashboard
              </text>

              {/* Sidebar */}
              <rect
                x="10"
                y="50"
                width="100"
                height="240"
                fill="#e9ecef"
                stroke="#dee2e6"
                strokeWidth="1"
              />
              <rect
                x="20"
                y="70"
                width="80"
                height="25"
                rx="4"
                fill="#4361ee"
                stroke="none"
              />
              <text x="35" y="87" fontFamily="Arial" fontSize="12" fill="white">
                Logs
              </text>
              <rect
                x="20"
                y="105"
                width="80"
                height="25"
                rx="4"
                fill="#f8f9fa"
                stroke="#dee2e6"
                strokeWidth="1"
              />
              <text
                x="35"
                y="122"
                fontFamily="Arial"
                fontSize="12"
                fill="#212529"
              >
                Alerts
              </text>
              <rect
                x="20"
                y="140"
                width="80"
                height="25"
                rx="4"
                fill="#f8f9fa"
                stroke="#dee2e6"
                strokeWidth="1"
              />
              <text
                x="35"
                y="157"
                fontFamily="Arial"
                fontSize="12"
                fill="#212529"
              >
                Reports
              </text>
              <rect
                x="20"
                y="175"
                width="80"
                height="25"
                rx="4"
                fill="#f8f9fa"
                stroke="#dee2e6"
                strokeWidth="1"
              />
              <text
                x="35"
                y="192"
                fontFamily="Arial"
                fontSize="12"
                fill="#212529"
              >
                Settings
              </text>

              {/* Main content area */}
              <rect
                x="120"
                y="60"
                width="360"
                height="80"
                rx="4"
                fill="white"
                stroke="#dee2e6"
                strokeWidth="1"
              />
              <text
                x="135"
                y="85"
                fontFamily="Arial"
                fontSize="14"
                fontWeight="bold"
                fill="#212529"
              >
                Security Events Overview
              </text>

              {/* Graph */}
              <rect x="130" y="95" width="340" height="35" fill="white" />
              <polyline
                points="130,125 150,115 170,120 190,105 210,110 230,90 250,95 270,85 290,80 310,90 330,70 350,85 370,75 390,80 410,65 430,70 450,60"
                stroke="#4361ee"
                strokeWidth="2"
                fill="none"
              />

              {/* Log entries */}
              <rect
                x="120"
                y="150"
                width="360"
                height="130"
                rx="4"
                fill="white"
                stroke="#dee2e6"
                strokeWidth="1"
              />
              <text
                x="135"
                y="175"
                fontFamily="Arial"
                fontSize="14"
                fontWeight="bold"
                fill="#212529"
              >
                Recent Log Entries
              </text>

              {/* Table headers */}
              <rect x="130" y="185" width="340" height="25" fill="#f1f3f5" />
              <text
                x="140"
                y="202"
                fontFamily="Arial"
                fontSize="12"
                fill="#495057"
              >
                Timestamp
              </text>
              <text
                x="230"
                y="202"
                fontFamily="Arial"
                fontSize="12"
                fill="#495057"
              >
                Source
              </text>
              <text
                x="320"
                y="202"
                fontFamily="Arial"
                fontSize="12"
                fill="#495057"
              >
                Event Type
              </text>
              <text
                x="420"
                y="202"
                fontFamily="Arial"
                fontSize="12"
                fill="#495057"
              >
                Severity
              </text>

              {/* Table rows */}
              <rect x="130" y="210" width="340" height="20" fill="white" />
              <text
                x="140"
                y="224"
                fontFamily="Arial"
                fontSize="11"
                fill="#212529"
              >
                2025-04-28 08:23:14
              </text>
              <text
                x="230"
                y="224"
                fontFamily="Arial"
                fontSize="11"
                fill="#212529"
              >
                AWS EC2
              </text>
              <text
                x="320"
                y="224"
                fontFamily="Arial"
                fontSize="11"
                fill="#212529"
              >
                Login Attempt
              </text>
              <circle cx="425" cy="218" r="6" fill="#ffc107" />

              <rect x="130" y="230" width="340" height="20" fill="#f8f9fa" />
              <text
                x="140"
                y="244"
                fontFamily="Arial"
                fontSize="11"
                fill="#212529"
              >
                2025-04-28 08:22:56
              </text>
              <text
                x="230"
                y="244"
                fontFamily="Arial"
                fontSize="11"
                fill="#212529"
              >
                Firewall
              </text>
              <text
                x="320"
                y="244"
                fontFamily="Arial"
                fontSize="11"
                fill="#212529"
              >
                Port Scan
              </text>
              <circle cx="425" cy="238" r="6" fill="#dc3545" />

              <rect x="130" y="250" width="340" height="20" fill="white" />
              <text
                x="140"
                y="264"
                fontFamily="Arial"
                fontSize="11"
                fill="#212529"
              >
                2025-04-28 08:21:09
              </text>
              <text
                x="230"
                y="264"
                fontFamily="Arial"
                fontSize="11"
                fill="#212529"
              >
                Auth0
              </text>
              <text
                x="320"
                y="264"
                fontFamily="Arial"
                fontSize="11"
                fill="#212529"
              >
                Failed Login
              </text>
              <circle cx="425" cy="258" r="6" fill="#ffc107" />
            </svg>
          </div>
        </article>

        <article className="flex flex-row flex-wrap items-center mb-16">
          <div className="flex-1 min-w-[300px] p-8 text-[#212529]">
            <h3 className="text-[#3a0ca3] text-2xl font-semibold mb-4">
              Automated Incident Response
            </h3>
            <p className="mb-4">
              Turn security alerts into action with our powerful SOAR
              capabilities. Scrubbe automatically responds to common threats,
              following your playbooks and best practices, saving you time and
              reducing your risk exposure.
            </p>
            <ul className="list-disc pl-6">
              <li>Customizable response playbooks</li>
              <li>Intelligent triage and prioritization</li>
              <li>One-click remediation options</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[300px] text-center p-8">
            {/* SVG converted from HTML */}
            <svg
              viewBox="0 0 500 300"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-full rounded-lg shadow-md"
            >
              {/* Background */}
              <rect
                x="10"
                y="10"
                width="480"
                height="280"
                rx="8"
                fill="#f8f9fa"
                stroke="#e9ecef"
                strokeWidth="2"
              />

              {/* Title */}
              <text
                x="250"
                y="40"
                fontFamily="Arial"
                fontSize="18"
                fontWeight="bold"
                fill="#3a0ca3"
                textAnchor="middle"
              >
                Automated Incident Response
              </text>

              {/* Workflow diagram */}
              {/* Event Detection Node */}
              <circle
                cx="100"
                cy="120"
                r="40"
                fill="#4361ee"
                stroke="#3a0ca3"
                strokeWidth="2"
              />
              <text
                x="100"
                y="115"
                fontFamily="Arial"
                fontSize="12"
                fill="white"
                textAnchor="middle"
              >
                Event
              </text>
              <text
                x="100"
                y="130"
                fontFamily="Arial"
                fontSize="12"
                fill="white"
                textAnchor="middle"
              >
                Detection
              </text>

              {/* Arrow 1 */}
              <path
                d="M140 120 L180 120"
                stroke="#212529"
                strokeWidth="2"
                fill="none"
              />
              <polygon points="180,120 170,115 170,125" fill="#212529" />

              {/* Analysis Node */}
              <rect
                x="180"
                y="80"
                width="80"
                height="80"
                rx="10"
                fill="#4cc9f0"
                stroke="#3a0ca3"
                strokeWidth="2"
              />
              <text
                x="220"
                y="115"
                fontFamily="Arial"
                fontSize="12"
                fill="white"
                textAnchor="middle"
              >
                Threat
              </text>
              <text
                x="220"
                y="130"
                fontFamily="Arial"
                fontSize="12"
                fill="white"
                textAnchor="middle"
              >
                Analysis
              </text>

              {/* Arrow 2 */}
              <path
                d="M260 120 L300 120"
                stroke="#212529"
                strokeWidth="2"
                fill="none"
              />
              <polygon points="300,120 290,115 290,125" fill="#212529" />

              {/* Decision Diamond */}
              <polygon
                points="350,120 320,90 290,120 320,150"
                fill="#f8f9fa"
                stroke="#3a0ca3"
                strokeWidth="2"
              />
              <text
                x="320"
                y="125"
                fontFamily="Arial"
                fontSize="12"
                fill="#212529"
                textAnchor="middle"
              >
                Is Threat?
              </text>

              {/* Arrow Yes - Down */}
              <path
                d="M320 150 L320 190"
                stroke="#212529"
                strokeWidth="2"
                fill="none"
              />
              <polygon points="320,190 315,180 325,180" fill="#212529" />
              <text
                x="335"
                y="170"
                fontFamily="Arial"
                fontSize="12"
                fill="#212529"
              >
                Yes
              </text>

              {/* Arrow No - Right */}
              <path
                d="M350 120 L390 120 L390 60 L130 60 L130 80"
                stroke="#212529"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,3"
              />
              <text
                x="365"
                y="110"
                fontFamily="Arial"
                fontSize="12"
                fill="#212529"
              >
                No
              </text>

              {/* Response Actions Box */}
              <rect
                x="270"
                y="190"
                width="100"
                height="70"
                rx="10"
                fill="#2ecc71"
                stroke="#25a25a"
                strokeWidth="2"
              />
              <text
                x="320"
                y="215"
                fontFamily="Arial"
                fontSize="12"
                fill="white"
                textAnchor="middle"
              >
                Automated
              </text>
              <text
                x="320"
                y="230"
                fontFamily="Arial"
                fontSize="12"
                fill="white"
                textAnchor="middle"
              >
                Response
              </text>
              <text
                x="320"
                y="245"
                fontFamily="Arial"
                fontSize="12"
                fill="white"
                textAnchor="middle"
              >
                Actions
              </text>

              {/* Response Types */}
              <rect
                x="50"
                y="190"
                width="180"
                height="70"
                rx="5"
                fill="white"
                stroke="#dee2e6"
                strokeWidth="1"
              />
              <text
                x="140"
                y="210"
                fontFamily="Arial"
                fontSize="12"
                fontWeight="bold"
                fill="#212529"
                textAnchor="middle"
              >
                Response Types
              </text>
              <circle cx="70" cy="230" r="5" fill="#2ecc71" />
              <text
                x="85"
                y="235"
                fontFamily="Arial"
                fontSize="10"
                fill="#212529"
              >
                Block IP
              </text>
              <circle cx="70" cy="250" r="5" fill="#2ecc71" />
              <text
                x="85"
                y="255"
                fontFamily="Arial"
                fontSize="10"
                fill="#212529"
              >
                Reset Password
              </text>
              <circle cx="150" cy="230" r="5" fill="#2ecc71" />
              <text
                x="165"
                y="235"
                fontFamily="Arial"
                fontSize="10"
                fill="#212529"
              >
                Isolate Host
              </text>
              <circle cx="150" cy="250" r="5" fill="#2ecc71" />
              <text
                x="165"
                y="255"
                fontFamily="Arial"
                fontSize="10"
                fill="#212529"
              >
                Alert Admin
              </text>

              {/* Arrow from Response to Response Types */}
              <path
                d="M270 225 L230 225"
                stroke="#212529"
                strokeWidth="2"
                fill="none"
              />
              <polygon points="230,225 240,220 240,230" fill="#212529" />

              {/* Notification section */}
              <rect
                x="400"
                y="190"
                width="70"
                height="70"
                rx="35"
                fill="#f8f9fa"
                stroke="#dee2e6"
                strokeWidth="2"
              />
              <text
                x="435"
                y="230"
                fontFamily="Arial"
                fontSize="11"
                fill="#212529"
                textAnchor="middle"
              >
                Report &
              </text>
              <text
                x="435"
                y="245"
                fontFamily="Arial"
                fontSize="11"
                fill="#212529"
                textAnchor="middle"
              >
                Notify
              </text>

              {/* Arrow from Response to Notification */}
              <path
                d="M370 225 L400 225"
                stroke="#212529"
                strokeWidth="2"
                fill="none"
              />
              <polygon points="400,225 390,220 390,230" fill="#212529" />
            </svg>
          </div>
        </article>

        <article className="flex flex-row-reverse flex-wrap items-center mb-16">
          <div className="flex-1 min-w-[300px] p-8 text-[#212529]">
            <h3 className="text-[#3a0ca3] text-2xl font-semibold mb-4">
              Continuous Vulnerability Management
            </h3>
            <p className="mb-4">
              Stay ahead of attackers with continuous vulnerability scanning and
              prioritization. Scrubbe doesn&apos;t just find vulnerabilities—it
              helps you fix them with contextual remediation advice tailored to
              your environment.
            </p>
            <ul className="list-disc pl-6">
              <li>Prioritized risks based on actual exploitability</li>
              <li>Integration with your development workflow</li>
              <li>Automated patching recommendations</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[300px] text-center p-8">
            {/* SVG converted from HTML */}
            <svg
              viewBox="0 0 500 300"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-full rounded-lg shadow-md"
            >
              {/* Dashboard background */}
              <rect
                x="10"
                y="10"
                width="480"
                height="280"
                rx="8"
                fill="#f8f9fa"
                stroke="#e9ecef"
                strokeWidth="2"
              />

              {/* Header bar */}
              <rect
                x="10"
                y="10"
                width="480"
                height="40"
                rx="8"
                fill="#4361ee"
                stroke="#3a0ca3"
                strokeWidth="2"
              />
              <text x="30" y="35" fontFamily="Arial" fontSize="16" fill="white">
                Vulnerability Management Dashboard
              </text>

              {/* Main content area - split into sections */}
              <rect
                x="20"
                y="60"
                width="230"
                height="110"
                rx="4"
                fill="white"
                stroke="#dee2e6"
                strokeWidth="1"
              />

              {/* Risk overview section */}
              <text
                x="30"
                y="80"
                fontFamily="Arial"
                fontSize="14"
                fontWeight="bold"
                fill="#212529"
              >
                Risk Overview
              </text>

              {/* Donut chart for risk levels */}
              <circle
                cx="70"
                cy="120"
                r="30"
                fill="none"
                stroke="#dee2e6"
                strokeWidth="30"
                strokeDasharray="188.5"
              />
              <circle
                cx="70"
                cy="120"
                r="30"
                fill="none"
                stroke="#dc3545"
                strokeWidth="30"
                strokeDasharray="47.1 141.4"
              />
              <circle
                cx="70"
                cy="120"
                r="30"
                fill="none"
                stroke="#ffc107"
                strokeWidth="30"
                strokeDasharray="47.1 94.2"
                strokeDashoffset="-47.1"
              />
              <circle
                cx="70"
                cy="120"
                r="30"
                fill="none"
                stroke="#2ecc71"
                strokeWidth="30"
                strokeDasharray="94.2 94.2"
                strokeDashoffset="-94.2"
              />
              <circle cx="70" cy="120" r="15" fill="white" />

              {/* Legend */}
              <rect x="120" y="95" width="12" height="12" fill="#dc3545" />
              <text
                x="140"
                y="105"
                fontFamily="Arial"
                fontSize="12"
                fill="#212529"
              >
                Critical: 8
              </text>

              <rect x="120" y="115" width="12" height="12" fill="#ffc107" />
              <text
                x="140"
                y="125"
                fontFamily="Arial"
                fontSize="12"
                fill="#212529"
              >
                Medium: 17
              </text>

              <rect x="120" y="135" width="12" height="12" fill="#2ecc71" />
              <text
                x="140"
                y="145"
                fontFamily="Arial"
                fontSize="12"
                fill="#212529"
              >
                Low: 32
              </text>

              {/* Trend section */}
              <rect
                x="260"
                y="60"
                width="230"
                height="110"
                rx="4"
                fill="white"
                stroke="#dee2e6"
                strokeWidth="1"
              />
              <text
                x="270"
                y="80"
                fontFamily="Arial"
                fontSize="14"
                fontWeight="bold"
                fill="#212529"
              >
                Vulnerability Trend
              </text>

              {/* Simple line chart */}
              <line
                x1="280"
                y1="150"
                x2="470"
                y2="150"
                stroke="#dee2e6"
                strokeWidth="1"
              />
              <line
                x1="280"
                y1="90"
                x2="280"
                y2="150"
                stroke="#dee2e6"
                strokeWidth="1"
              />

              {/* Trend line */}
              <polyline
                points="280,130 300,125 320,135 340,120 360,115 380,100 400,110 420,95 440,90 460,85"
                stroke="#4361ee"
                strokeWidth="2"
                fill="none"
              />

              {/* X-axis labels */}
              <text
                x="280"
                y="165"
                fontFamily="Arial"
                fontSize="10"
                fill="#6c757d"
              >
                Apr 1
              </text>
              <text
                x="340"
                y="165"
                fontFamily="Arial"
                fontSize="10"
                fill="#6c757d"
              >
                Apr 10
              </text>
              <text
                x="400"
                y="165"
                fontFamily="Arial"
                fontSize="10"
                fill="#6c757d"
              >
                Apr 20
              </text>
              <text
                x="460"
                y="165"
                fontFamily="Arial"
                fontSize="10"
                fill="#6c757d"
              >
                Apr 28
              </text>

              {/* Vulnerabilities table */}
              <rect
                x="20"
                y="180"
                width="470"
                height="100"
                rx="4"
                fill="white"
                stroke="#dee2e6"
                strokeWidth="1"
              />
              <text
                x="30"
                y="200"
                fontFamily="Arial"
                fontSize="14"
                fontWeight="bold"
                fill="#212529"
              >
                Top Vulnerabilities
              </text>

              {/* Table headers */}
              <rect x="30" y="210" width="450" height="20" fill="#f1f3f5" />
              <text
                x="40"
                y="225"
                fontFamily="Arial"
                fontSize="12"
                fill="#495057"
              >
                Vulnerability
              </text>
              <text
                x="200"
                y="225"
                fontFamily="Arial"
                fontSize="12"
                fill="#495057"
              >
                Affected System
              </text>
              <text
                x="320"
                y="225"
                fontFamily="Arial"
                fontSize="12"
                fill="#495057"
              >
                Severity
              </text>
              <text
                x="400"
                y="225"
                fontFamily="Arial"
                fontSize="12"
                fill="#495057"
              >
                Status
              </text>

              {/* Table rows */}
              <rect x="30" y="230" width="450" height="20" fill="white" />
              <text
                x="40"
                y="245"
                fontFamily="Arial"
                fontSize="11"
                fill="#212529"
              >
                Log4j Vulnerability
              </text>
              <text
                x="200"
                y="245"
                fontFamily="Arial"
                fontSize="11"
                fill="#212529"
              >
                API Server
              </text>
              <rect
                x="320"
                y="235"
                width="60"
                height="15"
                rx="7.5"
                fill="#dc3545"
              />
              <text
                x="350"
                y="246"
                fontFamily="Arial"
                fontSize="10"
                fill="white"
                textAnchor="middle"
              >
                Critical
              </text>
              <rect
                x="400"
                y="235"
                width="60"
                height="15"
                rx="7.5"
                fill="#ffc107"
              />
              <text
                x="430"
                y="246"
                fontFamily="Arial"
                fontSize="10"
                fill="white"
                textAnchor="middle"
              >
                In Progress
              </text>

              <rect x="30" y="250" width="450" height="20" fill="#f8f9fa" />
              <text
                x="40"
                y="265"
                fontFamily="Arial"
                fontSize="11"
                fill="#212529"
              >
                SSL Certificate Expiring
              </text>
              <text
                x="200"
                y="265"
                fontFamily="Arial"
                fontSize="11"
                fill="#212529"
              >
                Web Frontend
              </text>
              <rect
                x="320"
                y="255"
                width="60"
                height="15"
                rx="7.5"
                fill="#ffc107"
              />
              <text
                x="350"
                y="266"
                fontFamily="Arial"
                fontSize="10"
                fill="white"
                textAnchor="middle"
              >
                Medium
              </text>
              <rect
                x="400"
                y="255"
                width="60"
                height="15"
                rx="7.5"
                fill="#2ecc71"
              />
              <text
                x="430"
                y="266"
                fontFamily="Arial"
                fontSize="10"
                fill="white"
                textAnchor="middle"
              >
                Scheduled
              </text>
            </svg>
          </div>
        </article>
      </section>

      <section className="bg-slate-800 text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl mb-6">Secure Your Startup Today</h2>
        <p className="max-w-screen-md mx-auto mb-8 text-lg">
          Join the growing community of startups protecting their business with
          Scrubbe. Get started with a free 14-day trial, no credit card
          required.
        </p>
        <a
          href="#"
          className="bg-[#4361ee] text-white px-8 py-3 rounded text-lg hover:bg-[#3a0ca3] transform hover:-translate-y-0.5 transition duration-300 no-underline"
        >
          Start Free Trial
        </a>
        <p className="mt-4 text-sm opacity-90">
          Or schedule a demo with our security experts
        </p>
      </section>
    </div>
  );
};

export default StartUps;
