import React from "react";

const ScrubbeDataProcessingAgreement = () => {
  // Data structure for the Table of Contents and main content
  const sections = [
    {
      id: "subject-matter",
      title: "Subject Matter & Duration",
      number: 1,
      content: (
        <>
          <h4 className="font-semibold text-lg mb-2 flex items-center">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 1.1 Purpose
            of Processing
          </h4>
          <p className="mb-4">
            Scrubbe will process personal data on behalf of Customer solely to
            provide the Scrubbe Incident Management System (IMS) and related
            services, including incident tracking, analytics, integrations, and
            support services.
          </p>
          <p className="mb-4">
            Processing includes hosting, storage, analysis, and transmission of
            data to enable real-time incident management and reporting
            functionalities.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 1.2 Scope
            of Services
          </h4>
          <p className="mb-4">
            The services encompass incident detection, logging, resolution
            workflows, third-party integrations (e.g., GitHub, AWS, Slack), and
            enterprise-grade analytics, as detailed in the Agreement or at{" "}
            <a
              href="https://incidents.scrubbe.com"
              className="text-blue-600 hover:underline"
            >
              incidents.scrubbe.com
            </a>
            .
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 1.3
            Duration
          </h4>
          <p className="mb-4">
            This DPA applies for as long as Scrubbe processes personal data for
            Customer under the Agreement, including any post-termination data
            retention period as specified in{" "}
            <a
              href="#return-deletion"
              className="text-blue-600 hover:underline"
            >
              Section 11
            </a>
            .
          </p>
          <p>
            Data processing will cease upon termination of the Agreement or upon
            Customer&apos;s written instruction, subject to legal retention
            requirements.
          </p>
        </>
      ),
    },
    {
      id: "roles-responsibilities",
      title: "Roles & Responsibilities",
      number: 2,
      content: (
        <>
          <h4 className="font-semibold text-lg mb-2 flex items-center">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 2.1
            Controller and Processor Roles
          </h4>
          <p className="mb-4">
            Customer is the Controller, responsible for determining the purposes
            and means of processing personal data. Scrubbe is the Processor,
            acting solely on Customer&apos;s documented instructions.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 2.2
            Customer Responsibilities
          </h4>
          <p className="mb-4">
            Customer shall ensure that it has a lawful basis for processing
            personal data and that all data provided to Scrubbe complies with
            applicable laws (e.g., GDPR, CCPA, NDPR, POPIA).
          </p>
          <p>
            Customer is responsible for obtaining necessary consents, providing
            notices to data subjects, and maintaining accurate records of
            processing activities.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 2.3
            Processor Instructions
          </h4>
          <p className="mb-4">
            Scrubbe shall process personal data only on documented instructions
            from Customer, including instructions provided via the Scrubbe IMS
            platform settings, Order Forms, or written communications.
          </p>
          <p>
            Scrubbe will promptly inform Customer if an instruction violates
            applicable data protection laws, to the extent permitted by law.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 2.4 Risk
            Management
          </h4>
          <p className="mb-4">
            Customer shall conduct periodic risk assessments to ensure that
            processing activities align with their data protection policies and
            regulatory requirements.
          </p>
          <p>
            Scrubbe will provide reasonable assistance, such as data processing
            reports, to support Customer&apos;s risk management obligations.
          </p>
        </>
      ),
    },
    {
      id: "categories-data",
      title: "Categories of Data & Data Subjects",
      number: 3,
      content: (
        <>
          <h4 className="font-semibold text-lg mb-2 flex items-center">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 3.1
            Categories of Personal Data
          </h4>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>
              User Account Data: Name, email address, role, phone number,
              business details (e.g., company name, department).
            </li>
            <li>
              Incident Data and Logs: Incident titles, descriptions, comments,
              attachments, timelines, assignees, and related metadata.
            </li>
            <li>
              Integration Metadata: Data from third-party integrations, such as
              GitHub/GitLab events, cloud service alerts (e.g., AWS, Azure), and
              Slack messages.
            </li>
            <li>
              Support and Billing Information: Support ticket details, billing
              contact information, payment method metadata (excluding cardholder
              data).
            </li>
            <li>
              Usage Analytics: Aggregated data on user interactions with the
              Service for performance monitoring and optimization.
            </li>
          </ul>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 3.2
            Categories of Data Subjects
          </h4>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>
              Customer&apos;s employees, contractors, analysts, engineers, and
              administrators authorized to use the Scrubbe IMS.
            </li>
            <li>
              End users impacted by incidents, if their personal data is
              included in Customer Data (e.g., in incident reports or logs).
            </li>
            <li>
              Third-party stakeholders (e.g., partners or vendors) whose data is
              processed through integrations configured by Customer.
            </li>
          </ul>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 3.3 Special
            Categories of Data
          </h4>
          <p>
            Customer shall not submit special categories of data (e.g., health,
            biometric, or sensitive personal data under GDPR Article 9) unless
            explicitly agreed in writing with Scrubbe and subject to enhanced
            safeguards.
          </p>
        </>
      ),
    },
    {
      id: "processor-obligations",
      title: "Processor Obligations",
      number: 4,
      content: (
        <>
          <p className="mb-4 font-semibold">Scrubbe shall:</p>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>
              Process personal data only per Customer&apos;s documented
              instructions, including platform configuration and written
              agreements.
            </li>
            <li>
              Ensure confidentiality of personnel authorized to process data
              through binding agreements or statutory obligations.
            </li>
            <li>
              Implement appropriate technical and organisational security
              measures as detailed in{" "}
              <a href="#annex2" className="text-blue-600 hover:underline">
                Annex 2
              </a>
              .
            </li>
            <li>
              Assist Customer in fulfilling data subject rights (access,
              correction, deletion, portability) within 30 days of a request.
            </li>
            <li>
              Notify Customer without undue delay of any data breach, as
              outlined in{" "}
              <a
                href="#breach-notification"
                className="text-blue-600 hover:underline"
              >
                Section 9
              </a>
              .
            </li>
            <li>
              Provide information reasonably necessary to demonstrate
              compliance, including audit reports and certifications for
              Enterprise customers.
            </li>
            <li>
              Not engage a subprocessor without compliance with{" "}
              <a
                href="#subprocessors"
                className="text-blue-600 hover:underline"
              >
                Section 5
              </a>
              .
            </li>
            <li>
              Maintain a record of processing activities as required by
              applicable law and make it available to Customer upon request.
            </li>
          </ul>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 4.1
            Confidentiality Measures
          </h4>
          <p>
            Scrubbe ensures that all personnel authorized to process personal
            data are bound by confidentiality agreements or statutory
            obligations and undergo regular data protection training.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 4.2
            Compliance Assistance
          </h4>
          <p>
            Scrubbe will provide reasonable assistance to Customer for data
            protection impact assessments (DPIAs) and prior consultations with
            supervisory authorities, subject to reasonable fees for extensive
            support.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 4.3
            Incident Response Support
          </h4>
          <p>
            Scrubbe maintains an incident response plan to address potential
            data breaches and provide Customer with relevant documentation to
            support regulatory reporting obligations.
          </p>
        </>
      ),
    },
    {
      id: "subprocessors",
      title: "Subprocessors",
      number: 5,
      content: (
        <>
          <h4 className="font-semibold text-lg mb-2 flex items-center">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 5.1
            Authorisation
          </h4>
          <p>
            Customer authorises Scrubbe to use subprocessors listed at{" "}
            <a
              href="https://incidents.scrubbe.com/subprocessors"
              className="text-blue-600 hover:underline"
            >
              incidents.scrubbe.com/subprocessors
            </a>
            , which includes cloud hosting providers, analytics tools, and
            support platforms.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 5.2
            Notification of New Subprocessors
          </h4>
          <p className="mb-4">
            Scrubbe will notify Customer at least 15 days in advance of engaging
            new subprocessors via email or platform announcements, allowing
            Customer to object on reasonable grounds related to data protection.
          </p>
          <p>
            Objections must be submitted in writing, and Scrubbe will work with
            Customer to address concerns or provide alternative processing
            options.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 5.3
            Subprocessor Agreements
          </h4>
          <p>
            Scrubbe will enter into written agreements with subprocessors
            imposing equivalent data protection obligations, including
            confidentiality, security measures, and compliance with applicable
            laws.
          </p>
          <p>
            Scrubbe remains liable for subprocessor compliance with this DPA.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 5.4
            Subprocessor Vetting
          </h4>
          <p>
            Scrubbe conducts due diligence on subprocessors to ensure they meet
            industry-standard security and compliance requirements, including
            SOC 2 or ISO 27001 certifications where applicable.
          </p>
        </>
      ),
    },
    {
      id: "international-transfers",
      title: "International Transfers",
      number: 6,
      content: (
        <>
          <h4 className="font-semibold text-lg mb-2 flex items-center">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 6.1
            Safeguards for Transfers
          </h4>
          <p className="mb-4">
            Scrubbe may transfer personal data outside the EEA, UK, or other
            jurisdictions only with appropriate safeguards, ensuring compliance
            with applicable data protection laws.
          </p>
          <p>
            Data residency preferences can be configured for Enterprise
            customers, subject to availability and additional fees.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 6.2 Data
            Residency Options
          </h4>
          <p>
            Enterprise customers may request specific data residency regions
            (e.g., EU, US, UK) to comply with local regulations, subject to
            technical feasibility and written agreement.
          </p>
        </>
      ),
    },
    {
      id: "data-subject-rights",
      title: "Data Subject Rights",
      number: 7,
      content: (
        <>
          <p className="mb-4 font-semibold">Scrubbe will assist Customer to:</p>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>
              Respond to access, rectification, erasure, and portability
              requests within 30 days.
            </li>
            <li>
              Restrict or object to processing as required by applicable law
              (e.g., GDPR Article 21).
            </li>
            <li>
              Provide data subject request logs upon request, including
              timestamps and actions taken.
            </li>
          </ul>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 7.1
            Assistance Process
          </h4>
          <p>
            Scrubbe will provide reasonable assistance within 30 days of a
            Customer request, subject to reasonable fees for excessive or
            repetitive requests. Assistance includes extracting, anonymizing, or
            deleting data as instructed.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 7.2 Data
            Subject Request Workflow
          </h4>
          <p>
            Customer shall submit data subject requests via the Scrubbe IMS
            support portal or email (
            <a
              href="mailto:support@scrubbe.com"
              className="text-blue-600 hover:underline"
            >
              support@scrubbe.com
            </a>
            ). Scrubbe will verify the request&apos;s authenticity before
            processing.
          </p>
        </>
      ),
    },
    {
      id: "security-measures",
      title: "Security Measures",
      number: 8,
      content: (
        <>
          <p className="mb-4">
            Scrubbe implements security measures including (detailed in{" "}
            <a href="#annex2" className="text-blue-600 hover:underline">
              Annex 2
            </a>
            ):
          </p>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>
              Encryption of data in transit (TLS 1.2+) and at rest (AES-256).
            </li>
            <li>
              Role-based access control (RBAC) and multi-factor authentication
              (MFA).
            </li>
            <li>Logging and monitoring of system activities.</li>
            <li>
              Regular penetration tests by certified third-party auditors.
            </li>
            <li>
              Backup and disaster recovery procedures to ensure data
              availability.
            </li>
          </ul>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 8.1
            Security Implementation
          </h4>
          <p className="mb-4">
            Security measures are regularly reviewed and updated to align with
            industry standards (e.g., NIST, ISO 27001) and emerging threats.
            Scrubbe maintains a security governance framework overseen by a
            dedicated Chief Information Security Officer (CISO).
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 8.2
            Security Certifications
          </h4>
          <p>
            Scrubbe pursues certifications such as SOC 2 Type II, ISO 27001, and
            ISO 27017. Reports are available to Enterprise customers under
            confidentiality agreements.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 8.3
            Incident Response Framework
          </h4>
          <p>
            Scrubbe maintains a documented incident response plan, including
            escalation procedures, root cause analyses, and post-incident
            reporting to minimize risks and ensure rapid recovery.
          </p>
        </>
      ),
    },
    {
      id: "breach-notification",
      title: "Breach Notification",
      number: 9,
      content: (
        <>
          <p className="mb-4">
            Scrubbe will notify Customer without undue delay (no later than 72
            hours) after becoming aware of a personal data breach, providing:
          </p>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>
              Description of the nature of the breach, including affected
              systems or data categories.
            </li>
            <li>
              Categories and approximate number of data subjects and records
              affected.
            </li>
            <li>
              Measures taken or proposed to address the breach, including
              mitigation steps.
            </li>
            <li>Contact details for further information and coordination.</li>
          </ul>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 9.1
            Notification Process
          </h4>
          <p>
            Notifications will be sent to the Customer&apos;s designated contact
            point via email or through the Scrubbe IMS platform. Scrubbe will
            cooperate with Customer to meet regulatory reporting deadlines.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 9.2
            Post-Breach Support
          </h4>
          <p>
            Scrubbe will provide detailed incident reports, including root cause
            analysis and remediation plans, to assist Customer in complying with
            regulatory obligations.
          </p>
        </>
      ),
    },
    {
      id: "audit-rights",
      title: "Audit Rights",
      number: 10,
      content: (
        <>
          <h4 className="font-semibold text-lg mb-2 flex items-center">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 10.1
            Compliance Information
          </h4>
          <p>
            Customer may request information to demonstrate compliance,
            including SOC 2 Type II reports, ISO 27001 certifications, and
            subprocessor lists, subject to confidentiality agreements.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 10.2 Audit
            Process
          </h4>
          <p className="mb-4">
            On reasonable notice (at least 30 days), Customer may conduct an
            audit once per year, either directly or through a third-party
            auditor, subject to confidentiality and operational limitations to
            avoid disruption.
          </p>
          <p>
            Audits may include reviews of security measures, processing records,
            and subprocessor agreements.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 10.3 Audit
            Frequency and Costs
          </h4>
          <p>
            Additional audits beyond one per year may be permitted at
            Scrubbe&apos;s discretion, subject to reasonable fees to cover
            administrative and operational costs.
          </p>
        </>
      ),
    },
    {
      id: "return-deletion",
      title: "Return & Deletion of Data",
      number: 11,
      content: (
        <>
          <h4 className="font-semibold text-lg mb-2 flex items-center">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 11.1
            Post-Termination Data Handling
          </h4>
          <p className="mb-4">
            Upon termination of the Agreement, Scrubbe will delete or return all
            personal data within 30-90 days, unless required to retain by
            applicable law (e.g., tax or audit obligations).
          </p>
          <p>
            Customer may export data using Scrubbe IMS tools during this period.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 11.2
            Deletion Process
          </h4>
          <p>
            Deletion will cover production systems and backups (overwritten per
            backup schedule). Scrubbe will provide a certificate of deletion
            upon request for Enterprise customers.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 11.3 Data
            Retention Exceptions
          </h4>
          <p>
            Data retained for legal purposes will be stored in a secure,
            isolated environment with restricted access until the retention
            period expires.
          </p>
        </>
      ),
    },
    {
      id: "liability",
      title: "Liability",
      number: 12,
      content: (
        <>
          <p className="mb-4">
            Liability under this DPA is subject to the limitations of liability
            set forth in the Main Agreement, except where prohibited by
            applicable data protection law.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 12.1
            Limitation Scope
          </h4>
          <p>
            The limitations of liability apply to all claims arising under this
            DPA, including breaches of data protection obligations, except for
            willful misconduct or gross negligence.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 12.2
            Regulatory Fines
          </h4>
          <p>
            Scrubbe will not be liable for fines imposed on Customer by
            supervisory authorities unless directly caused by Scrubbe&apos;s
            failure to comply with this DPA.
          </p>
        </>
      ),
    },
    {
      id: "governing-law",
      title: "Governing Law",
      number: 13,
      content: (
        <>
          <h4 className="font-semibold text-lg mb-2 flex items-center">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 13.1
            Jurisdiction
          </h4>
          <p>
            In case of conflict, data protection laws applicable to the
            Customer&apos;s jurisdiction (e.g., GDPR, UK GDPR, NDPR, POPIA) will
            take precedence for matters related to personal data processing.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 13.2
            Dispute Resolution
          </h4>
          <p>
            Disputes arising under this DPA will follow the dispute resolution
            process outlined in the Agreement, with priority given to informal
            resolution before escalation to arbitration or litigation.
          </p>
        </>
      ),
    },
    {
      id: "version-control",
      title: "Version Control",
      number: 14,
      content: (
        <>
          <p className="mb-4">
            This DPA is versioned to ensure transparency and track changes over
            time. The current version is v1.0, effective September 26, 2025.
            Previous versions are archived and available upon request to
            Enterprise customers.
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 14.1
            Version History
          </h4>
          <p>
            Version history and change logs can be requested by contacting{" "}
            <a
              href="mailto:contact@scrubbe.com"
              className="text-blue-600 hover:underline"
            >
              contact@scrubbe.com
            </a>
            .
          </p>

          <h4 className="font-semibold text-lg mb-2 flex items-center mt-4">
            <span className="text-scrubbe-green mr-2">&#9650;</span> 14.2
            Updates to DPA
          </h4>
          <p>
            Scrubbe may update this DPA with 30 days&apos; prior notice for
            material changes, communicated via email or at{" "}
            <a
              href="https://incidents.scrubbe.com"
              className="text-blue-600 hover:underline"
            >
              incidents.scrubbe.com
            </a>
            . Continued use of the Service constitutes acceptance.
          </p>
        </>
      ),
    },
    {
      id: "annex1",
      title: "Annex 1 – Details of Processing",
      number: 15,
      content: (
        <ul className="list-disc ml-6 space-y-3 mb-4">
          <li>
            <strong className="font-semibold">Nature & Purpose:</strong> Provide
            incident management, integrations, analytics, notifications, and
            support services to enhance operational resilience.
          </li>
          <li>
            <strong className="font-semibold">Duration:</strong> Duration of
            Customer&apos;s subscription plus a retention period of up to 90
            days post-termination, unless extended by legal requirements.
          </li>
          <li>
            <strong className="font-semibold">Types of Personal Data:</strong>{" "}
            Account data (name, email, role), incident metadata (titles,
            comments, assignees), integration data (GitHub events, Slack
            messages), support and billing information.
          </li>
          <li>
            <strong className="font-semibold">
              Categories of Data Subjects:
            </strong>{" "}
            Customer&apos;s employees, contractors, partners, and end users
            impacted by incidents (if included in Customer Data).
          </li>
          <li>
            <strong className="font-semibold">Frequency of Processing:</strong>{" "}
            Continuous during active use of the Service, with periodic analytics
            and reporting.
          </li>
        </ul>
      ),
    },
    {
      id: "annex2",
      title: "Annex 2 – Security Measures",
      number: 16,
      content: (
        <ul className="list-disc ml-6 space-y-3 mb-4">
          <li>
            <strong className="font-semibold">Encryption:</strong> TLS 1.2+ for
            data in transit, AES-256 for data at rest.
          </li>
          <li>
            <strong className="font-semibold">Access Controls:</strong>{" "}
            Multi-factor authentication (MFA), role-based access control (RBAC),
            session timeouts (default: 5 minutes, configurable).
          </li>
          <li>
            <strong className="font-semibold">Backups:</strong> Encrypted
            backups with 90-day retention, stored in secure, geographically
            redundant locations.
          </li>
          <li>
            <strong className="font-semibold">Security Testing:</strong> Regular
            vulnerability scanning and penetration tests by certified
            third-party auditors.
          </li>
          <li>
            <strong className="font-semibold">Secure Development:</strong>{" "}
            Secure coding practices, including static code analysis and CI/CD
            pipeline security checks.
          </li>
          <li>
            <strong className="font-semibold">Data Segregation:</strong> Logical
            and physical segregation of Customer Data between tenants to prevent
            unauthorized access.
          </li>
          <li>
            <strong className="font-semibold">Monitoring:</strong> Comprehensive
            logging, monitoring, and audit trails for all system activities,
            with real-time alerts for suspicious behavior.
          </li>
          <li>
            <strong className="font-semibold">Physical Security:</strong> Data
            centers comply with ISO 27001 and SOC 2 standards, with 24/7
            monitoring and restricted access.
          </li>
        </ul>
      ),
    },
  ];

  // Helper for consistent section header styling
  const SectionHeader = ({
    id,
    number,
    title,
  }: {
    id: string;
    number: number;
    title: string;
  }) => (
    <h2
      id={id}
      className={`text-2xl font-bold p-4 pl-6 text-white bg-[#1F553E]`}
    >
      {number}. {title}
    </h2>
  );

  return (
    <div className="bg-[#00263D] min-h-screen px-4  md:px-8 py-[10rem] font-sans">
      <style>{`
        /* Custom colors based on the screenshots */
        .bg-scrubbe-dark { background-color: #2c3e50; }
        .bg-scrubbe-green { background-color: #38761d; }
        .text-scrubbe-green { color: #38761d; }
      `}</style>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center flex flex-col justify-center items-center mb-10 bg-gradient-to-r from-[#5A519F] to-[#8D4C9A] rounded-[30px] p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Scrubbe IMS Data Processing Agreement{" "}
          </h1>

          <p className="text-lg text-white">
            Effective Date : September 26, 2025
          </p>
          <p className="text-lg text-white">
            Last Updated : September 26, 2025
          </p>
        </div>
        {/* Header Block */}

        {/* Main Content Grid */}
        <div className="w-full min-h-[2000px] mx-auto md:grid grid-cols-12 gap-8 md:bg-transparent bg-white p-0 rounded-b-lg shadow-xl">
          {/* Left Column - Table of Contents */}
          <div className="md:block hidden sticky top-[100px] h-screen col-span-3 bg-gray-50 border-r border-gray-200 p-6">
            <h2 className="text-xl font-bold mb-4 border-b pb-2">
              Table of contents
            </h2>
            <nav className="text-base space-y-1">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`block py-1 text-gray-700 hover:text-scrubbe-green transition-colors ${
                    index === 0 ? "font-bold text-scrubbe-green" : ""
                  }`} // Highlight first item like in screenshot
                >
                  {index + 1}. {section.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Column - Terms Content */}
          <div className="col-span-9 md:px-4 text-gray-800 bg-white overflow-auto">
            <div className="p-2">
              <p className="mb-4">
                This Data Processing Agreement (&quot;DPA&quot;) forms part of
                the Master Services Agreement, Terms of Service, or other
                written agreement (&quot;Agreement&quot;) between Scrubbe, Inc.
                (&quot;Processor,&quot; &quot;Scrubbe&quot;) and the customer
                entity identified in the Agreement (&quot;Controller,&quot;
                &quot;Customer&quot;).
              </p>
              <h3 className="text-xl font-bold mb-4">Obligations Overview</h3>
              <table className="min-w-full divide-y divide-gray-200 border mb-8">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Features
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Scrubbe IMS
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      PagerDuty
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap font-bold">
                      Customer <br />
                      (Controller)
                    </td>
                    <td className="px-4 py-2">
                      Define purposes and means of processing, ensure lawful
                      basis, handle data subject requests
                    </td>
                    <td className="px-4 py-2">GDPR, CCPA, NDPR, POPIA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 whitespace-nowrap font-bold">
                      Scrubbe <br />
                      (Processor)
                    </td>
                    <td className="px-4 py-2">
                      Process per instructions, implement security measures,
                      notify of breaches, assist with compliance
                    </td>
                    <td className="px-4 py-2">SOC 2, ISO 27001, GDPR SCCs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {sections.map((section, index) => (
              <div key={section.id} className="mb-8">
                <SectionHeader
                  id={section.id}
                  number={index + 1}
                  title={section.title}
                />
                <div className="p-4 bg-white border border-t-0">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Contact Section - Manually styled for the download button */}
            <SectionHeader id="contact" number={17} title="Contacts" />
            <div className="p-4 bg-white border border-t-0 mb-8 flex flex-col items-center text-center">
              <p className="mb-1">
                <strong className="font-semibold">Email:</strong>{" "}
                <a
                  href="mailto:contact@scrubbe.com"
                  className="text-blue-600 hover:underline"
                >
                  contact@scrubbe.com
                </a>{" "}
                | <strong className="font-semibold">Support:</strong>{" "}
                <a
                  href="mailto:support@scrubbe.com"
                  className="text-blue-600 hover:underline"
                >
                  support@scrubbe.com
                </a>
              </p>
              <p className="mb-4">
                <strong className="font-semibold">Website:</strong>{" "}
                <a
                  href="https://incidents.scrubbe.com"
                  className="text-blue-600 hover:underline"
                >
                  incidents.scrubbe.com
                </a>
              </p>
              <button className="flex items-center justify-center bg-scrubbe-green hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l1.293-1.293a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v9a1 1 0 11-2 0V3a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Download PDF Version
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrubbeDataProcessingAgreement;
