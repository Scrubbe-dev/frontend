import { create } from "zustand";

type PostMortermForm = {
  rootCauseAnalysis?: {
    causeCategory: string;
    rootCause: string;
    fiveWhys: {
      why1: string;
      why2: string;
      why3: string;
      why4: string;
      why5: string;
    };
  };
  resolutionDetails?: {
    temporaryFix: string;
    permanentFix: string;
  };
  knowledgeDraft?: {
    internalKb: {
      title: string;
      summary: string;
      identificationSteps: string;
      resolutionSteps: string;
      preventiveMeasures: string;
      tags: string[];
    };
  };
  followUpActions?: {
    task: string;
    owner: string;
    dueDate: string;
    status: string;
    ticketingSystems: string[];
  };
  stakeHolder?: {
    communicationChannel: string;
    targetStakeholders: string[];
    messageContent: string;
  };
};

type State = {
  formValue: PostMortermForm | null;
  sentStakeholderCommunications: boolean;
};

type Action = {
  updateForm: ({ value }: { value: Partial<PostMortermForm> }) => void;
  updateSentStakeholderCommunications: (value: boolean) => void;
};

export const usePostMortermForm = create<State & Action>((set) => ({
  formValue: null,
  sentStakeholderCommunications: false,
  updateForm: ({ value }) => {
    set((prev) => ({ formValue: { ...prev.formValue, ...value } }));
  },
  updateSentStakeholderCommunications(value) {
    set({ sentStakeholderCommunications: value });
  },
}));
