import { create } from "zustand";

interface PlaybookBuilderState {
  playbookActions: string[];
  addPlaybookAction: (action: string) => void;
}
const usePlaybookBuilderStore = create<PlaybookBuilderState>((set) => ({
  playbookActions: [
    "Unauthorized access",
    "Failed Login",
    "Phishing Email",
    "Severity = High",
    "Send Alert",
    "Block IP",
    "Log event",
    "Send Slack Message",
    "Create Jira Ticket",
  ],
  addPlaybookAction: (action) =>
    set((state) => ({ playbookActions: [...state.playbookActions, action] })),
}));

export default usePlaybookBuilderStore;
