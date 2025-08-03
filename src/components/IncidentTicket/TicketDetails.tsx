import React, { useState } from "react";
import Modal from "../ui/Modal";
import { Ticket } from "./IncidateTicketPage";
import Select from "../ui/select";
import Input from "../ui/input";
import CButton from "../ui/Cbutton";
import TicketComments from "./TicketComments";
import Collaboration from "./Collaboration";
import History from "./History";
import TreatIntel from "./TreatIntel";
import { motion } from "framer-motion";
import moment from "moment";
// import { Ticket } from './IncidateTicketPage';

const TABS = [
  "Details",
  "Comments",
  "Collaboration",
  "History",
  "Threat intel",
];

const selectOptions = {
  mitre: [
    { value: "None", label: "None" },
    { value: "T1078-Valid Account", label: "T1078-Valid Account" },
    { value: "TI566-Phishing", label: "TI566-Phishing" },
  ],
  compliance: [
    { value: "None", label: "None" },
    { value: "GDPR", label: "GDPR" },
    { value: "HIPAA", label: "HIPAA" },
  ],
  status: [
    { value: "Open", label: "Open" },
    { value: "In Progress", label: "In Progress" },
    { value: "On Hold", label: "On Hold" },
    { value: "Closed", label: "Closed" },
  ],
  priority: [
    { value: "Low", label: "Low" },
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
  ],
  assigned: [
    { value: "Unassigned", label: "Unassigned" },
    { value: "David Wilson", label: "David Wilson" },
    { value: "Jane Doe", label: "Jane Doe" },
  ],
  customAction: [
    { value: "None", label: "None" },
    { value: "Trust", label: "Trust" },
    { value: "Block", label: "Block" },
    { value: "Investigate", label: "Investigate" },
    { value: "Flag", label: "Flag" },
    { value: "Add to Watchlist", label: "Add to Watchlist" },
  ],
};

type TicketDetailsProps = {
  isOpen: boolean;
  onClose: () => void;
  ticket: Ticket;
};

const TicketDetails = ({ isOpen, onClose, ticket }: TicketDetailsProps) => {
  const [tab, setTab] = useState(0);
  const [mitre, setMitre] = useState("None");
  const [compliance, setCompliance] = useState("None");
  const [status, setStatus] = useState("Open");
  const [priority, setPriority] = useState("High");
  const [assigned, setAssigned] = useState("Unassigned");
  const [customAction, setCustomAction] = useState("None");
  const [customField, setCustomField] = useState("");
  const [isExcuteLockAccount, setIsExcuteLockAccount] = useState(false);
  const [isMergeTicket, setIsMergeTicket] = useState(false);
  const [isEscalateTicket, setIsEscalateTicket] = useState(false);
  console.log(ticket);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 max-w-2xl w-full">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold dark:text-white">Ticket Details</h1>
        </div>
        {/* Tabs */}
        <div className="flex gap-8 border-b border-gray-200 mb-6">
          {TABS.map((t, i) => (
            <button
              key={t}
              className={`py-2 px-2 text-sm font-medium border-b-2 transition-colors ${
                tab === i
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-blue-600"
              }`}
              onClick={() => setTab(i)}
            >
              {t}
            </button>
          ))}
        </div>
        {/* Details Tab */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          key={tab}
        >
          {tab === 0 && (
            <div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-4">
                <div className="text-gray-500 dark:text-gray-200">
                  Incident ID :
                </div>
                <div className=" text-right dark:text-white">
                  {ticket?.ticketId}
                </div>
                <div className="text-gray-500 dark:text-gray-200">
                  Username :
                </div>
                <div className=" text-right dark:text-white">
                  {ticket?.userName}
                </div>
                <div className="text-gray-500 dark:text-gray-200">Reason:</div>
                <div className="text-right dark:text-white">
                  {ticket?.reason}
                </div>
                <div className="text-gray-500 dark:text-gray-200">Created:</div>
                <div className="text-right dark:text-white">
                  {moment(ticket.createdAt).format("YYYY-MM-DD")}
                </div>
                <div className="text-gray-500 dark:text-gray-200">
                  Risk Score:
                </div>
                <div className="text-right dark:text-white">74</div>
                <div className="text-gray-500 dark:text-gray-200">
                  SLA status:
                </div>
                <div className="text-right dark:text-white">
                  Due 2025-05-29 14:54:57
                </div>
                <div className="text-gray-500 dark:text-gray-200">
                  Recommended Actions :
                </div>
                <div className="text-right dark:text-white">
                  Lock Account , Notify User
                </div>
                <div className="text-gray-500 dark:text-gray-200">
                  Related Logs :
                </div>
                <div className="text-right dark:text-white">
                  <a href="#" className="text-blue-700 underline">
                    View SIEM logs
                  </a>
                </div>
              </div>
              <div className="mb-4">
                <div className="font-semibold dark:text-white mb-2">
                  Recommended Playbooks :
                </div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="w-44 dark:text-white">Lock Account</span>
                  <div>
                    <span className="bg-yellow-100 text-yellow-700 rounded px-3 py-1 text-xs font-medium">
                      Pending
                    </span>
                    <button
                      className="ml-2 border border-blue-500 text-blue-600 rounded text-sm px-3 py-1 font-medium hover:bg-blue-50 transition-colors"
                      onClick={() => setIsExcuteLockAccount(true)}
                    >
                      Execute
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="w-44 dark:text-white">Notify User</span>
                  <div>
                    <span className="bg-yellow-100 text-yellow-700 rounded px-3 py-1 text-xs font-medium">
                      Pending
                    </span>
                    <button className="ml-2 border border-blue-500 text-blue-600 rounded text-sm px-3 py-1 font-medium hover:bg-blue-50 transition-colors">
                      Execute
                    </button>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="font-semibold dark:text-white mb-2">
                  Playbook Status
                </div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="w-44 dark:text-white">Lock Account</span>
                  <span className="bg-yellow-100 text-yellow-700 rounded px-3 py-1 text-xs font-medium">
                    Pending
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="w-44 dark:text-white">Notify User</span>
                  <span className="bg-yellow-100 text-yellow-700 rounded px-3 py-1 text-xs font-medium">
                    Pending
                  </span>
                </div>
              </div>
              <hr className="my-6" />
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <Select
                    value={mitre}
                    label="Mitre Attack"
                    options={selectOptions.mitre}
                    onChange={(e) => setMitre(e.target.value)}
                  />
                </div>
                <div>
                  <Select
                    value={compliance}
                    label="Compliance"
                    options={selectOptions.compliance}
                    onChange={(e) => setCompliance(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    label="Custom Field"
                    value={customField}
                    onChange={(e) => setCustomField(e.target.value)}
                    placeholder="Enter custom data"
                  />
                </div>
                <div>
                  <Select
                    label="Status"
                    options={selectOptions.status}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </div>
                <div>
                  <Select
                    label="Priority"
                    options={selectOptions.priority}
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                  />
                </div>
                <div>
                  <Select
                    label="Assigned to"
                    options={selectOptions.assigned}
                    value={assigned}
                    onChange={(e) => setAssigned(e.target.value)}
                  />
                </div>
                <div>
                  <Select
                    label="Custom Action"
                    options={selectOptions.customAction}
                    value={customAction}
                    onChange={(e) => setCustomAction(e.target.value)}
                  />
                </div>
              </div>
              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-3 mb-3">
                <button className="bg-blue-600 text-white border border-blue-500 rounded-lg py-2 font-medium hover:bg-blue-700">
                  Joggle JSON view
                </button>
                <button
                  className="bg-blue-600 text-white border border-blue-500 rounded-lg py-2 font-medium hover:bg-blue-700"
                  onClick={() => setIsMergeTicket(true)}
                >
                  Merge Tickets
                </button>
                <button
                  onClick={() => setIsEscalateTicket(true)}
                  className="bg-blue-600 text-white border border-blue-500 rounded-lg py-2 font-medium hover:bg-blue-700"
                >
                  Escalate
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-3">
                <button className="bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700">
                  Sync to Jira
                </button>
                <button className="bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700">
                  Sync to Servicenow
                </button>
                <button className="bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700">
                  Sync to Freshdesk
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <button className="bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700">
                  Execute Action
                </button>
                <button className="bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700">
                  Update Ticket
                </button>
                <button
                  onClick={onClose}
                  className="bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Comments Tab */}
          {tab === 1 && <TicketComments />}

          {/* Collaboration Tab */}
          {tab === 2 && <Collaboration />}

          {/* History Tab */}
          {tab === 3 && <History />}

          {/* Threat intel Tab */}
          {tab === 4 && <TreatIntel />}
          {/* Other tabs can be implemented as needed */}
        </motion.div>
      </div>

      <Modal
        isOpen={isExcuteLockAccount}
        onClose={() => setIsExcuteLockAccount(false)}
      >
        <div className="p-6 max-w-2xl w-full">
          <h1 className="text-2xl font-bold dark:text-white mb-4">
            Confirm Playbook Execution
          </h1>

          <div className="mb-4 flex justify-between">
            <b className="dark:text-white">Playbook:</b>
            <p className="dark:text-white">Lock Account</p>
          </div>

          <div className="mb-4 flex justify-between">
            <b className="dark:text-white">Description:</b>
            <p className="dark:text-white">Locks a compromised user account</p>
          </div>

          <div className="mb-4">
            <b className="dark:text-white">Steps:</b>
            <ul className="list-disc list-inside dark:text-white space-y-1 mt-2">
              <li>Suspend account in AD</li>
              <li>Notify user via email</li>
              <li>Lock account</li>
            </ul>
          </div>

          <div className="flex justify-end gap-4">
            <CButton
              className=" border-gray-300 border bg-transparent w-fit"
              onClick={() => setIsExcuteLockAccount(false)}
            >
              Cancel
            </CButton>
            <CButton
              className="bg-blue-600 w-fit text-white rounded-lg py-2 font-medium hover:bg-blue-700"
              onClick={() => setIsExcuteLockAccount(false)}
            >
              Execute
            </CButton>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isMergeTicket} onClose={() => setIsMergeTicket(false)}>
        <div className="p-6 max-w-2xl w-full">
          <h1 className="text-2xl font-bold dark:text-white mb-4">
            Merge Tickets
          </h1>

          <Select
            label="Select Ticket"
            options={[
              {
                value: "INC39828-emma Taylor-Suspicious login location",
                label: "INC39828-emma Taylor-Suspicious login location",
              },
              {
                value: "INC39828-emma Taylor-Suspicious login location",
                label: "INC39828-emma Taylor-Suspicious login location",
              },
            ]}
          />

          <div className="flex justify-end gap-4">
            <CButton
              className=" border-colorScBlue text-colorScBlue border bg-transparent w-fit"
              onClick={() => setIsMergeTicket(false)}
            >
              Cancel
            </CButton>
            <CButton
              className="bg-blue-600 w-fit text-white rounded-lg py-2 font-medium hover:bg-blue-700"
              onClick={() => setIsMergeTicket(false)}
            >
              Execute
            </CButton>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isEscalateTicket}
        onClose={() => setIsEscalateTicket(false)}
      >
        <div className="p-6 max-w-2xl w-full">
          <h1 className="text-2xl font-bold dark:text-white mb-4">
            Escalate Ticket
          </h1>

          <Select
            label="Escalation Level"
            options={[
              { value: "Tier 2 Analyst", label: "Tier 2 Analyst" },
              { value: "Security Manager", label: "Security Manager" },
            ]}
          />

          <div className="flex justify-end gap-4">
            <CButton
              className=" border-gray-300 border bg-transparent w-fit"
              onClick={() => setIsEscalateTicket(false)}
            >
              Cancel
            </CButton>
            <CButton
              className="bg-blue-600 w-fit text-white rounded-lg py-2 font-medium hover:bg-blue-700"
              onClick={() => setIsEscalateTicket(false)}
            >
              Execute
            </CButton>
          </div>
        </div>
      </Modal>
    </Modal>
  );
};

export default TicketDetails;
