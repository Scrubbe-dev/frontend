import type { StateCreator } from "zustand";

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  permissions: {
    viewDashboard: boolean;
    modifyDashboard: boolean;
    executeActions: boolean;
    manageUsers: boolean;
  };
}

export interface CompanyLogo {
  file: File | null;
  base64: string | null;
}

export interface EnterpriseSetup {
  // Company Information
  companyName: string;
  industry: string;
  companySize: string;
  primaryRegion: string;
  companyLogo: CompanyLogo | null;

  // Admin Contact
  adminName: string;
  adminEmail: string;
  adminPhone: string;
  adminJobTitle: string;

  // Team Members
  teamMembers: TeamMember[];

  // Dashboard Preferences
  colorScheme: {
    primaryColor: string;
    secondaryColor: string;
  };
  defaultDashboard: "SIEM" | "SOAR" | "Custom";
  preferredIntegrations: string[]; // ['Jira', 'Freshdesk', 'Service Now']
  notificationChannels: string[]; // ['Slack', 'Microsoft Teams', 'Email', 'SMS']
  defaultIncidentPriority: string[]; // ['High', 'Medium', 'Low']
}

export type enterpriseSetupSliceType = {
  enterpriseSetup: EnterpriseSetup;
  currentStep: number;
  isSubmitting: boolean;
  errors: Record<string, string>;

  // Actions
  setCompanyInfo: (
    info: Partial<
      Pick<
        EnterpriseSetup,
        "companyName" | "industry" | "companySize" | "primaryRegion"
      >
    >
  ) => void;
  setCompanyLogo: (file: File | null) => void;
  setAdminContact: (
    contact: Partial<
      Pick<
        EnterpriseSetup,
        "adminName" | "adminEmail" | "adminPhone" | "adminJobTitle"
      >
    >
  ) => void;
  addTeamMember: (member: Omit<TeamMember, "id">) => void;
  updateTeamMember: (id: string, updates: Partial<TeamMember>) => void;
  removeTeamMember: (id: string) => void;
  updateMemberPermission: (
    memberId: string,
    permission: keyof TeamMember["permissions"],
    value: boolean
  ) => void;
  setDashboardPreferences: (
    preferences: Partial<
      Pick<EnterpriseSetup, "colorScheme" | "defaultDashboard">
    >
  ) => void;
  toggleIntegration: (integration: string) => void;
  toggleNotificationChannel: (channel: string) => void;
  toggleIncidentPriority: (priority: string) => void;
  setCurrentStep: (step: number) => void;
  setError: (field: string, error: string) => void;
  clearError: (field: string) => void;
  clearAllErrors: () => void;
  submitEnterpriseSetup: () => Promise<void>;
  resetEnterpriseSetup: () => void;
  validateCurrentStep: () => boolean;
};

const initialEnterpriseSetup: EnterpriseSetup = {
  companyName: "",
  industry: "",
  companySize: "",
  primaryRegion: "",
  companyLogo: null,
  adminName: "",
  adminEmail: "",
  adminPhone: "",
  adminJobTitle: "",
  teamMembers: [],
  colorScheme: {
    primaryColor: "#F73737",
    secondaryColor: "#1F9237",
  },
  defaultDashboard: "SIEM",
  preferredIntegrations: ["Jira"],
  notificationChannels: ["Slack"],
  defaultIncidentPriority: ["High"],
};

export const createEnterpriseSetupSlice: StateCreator<enterpriseSetupSliceType> = (
  set,
  get
) => ({
  enterpriseSetup: initialEnterpriseSetup,
  currentStep: 0,
  isSubmitting: false,
  errors: {},

  // Set company information
  setCompanyInfo: (info) => {
    set((state) => ({
      enterpriseSetup: {
        ...state.enterpriseSetup,
        ...info,
      },
    }));
  },

  // Set company logo
  setCompanyLogo: (file) => {
    if (!file) {
      set((state) => ({
        enterpriseSetup: {
          ...state.enterpriseSetup,
          companyLogo: null,
        },
      }));
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result;
      if (typeof result === "string") {
        set((state) => ({
          enterpriseSetup: {
            ...state.enterpriseSetup,
            companyLogo: {
              file,
              base64: result,
            },
          },
        }));
      }
    };
    reader.readAsDataURL(file);
  },

  // Set admin contact information
  setAdminContact: (contact) => {
    set((state) => ({
      enterpriseSetup: {
        ...state.enterpriseSetup,
        ...contact,
      },
    }));
  },

  // Add a new team member
  addTeamMember: (member) => {
    const newMember: TeamMember = {
      ...member,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    };

    set((state) => ({
      enterpriseSetup: {
        ...state.enterpriseSetup,
        teamMembers: [...state.enterpriseSetup.teamMembers, newMember],
      },
    }));
  },

  // Update existing team member
  updateTeamMember: (id, updates) => {
    set((state) => ({
      enterpriseSetup: {
        ...state.enterpriseSetup,
        teamMembers: state.enterpriseSetup.teamMembers.map((member) =>
          member.id === id ? { ...member, ...updates } : member
        ),
      },
    }));
  },

  // Remove team member
  removeTeamMember: (id) => {
    set((state) => ({
      enterpriseSetup: {
        ...state.enterpriseSetup,
        teamMembers: state.enterpriseSetup.teamMembers.filter(
          (member) => member.id !== id
        ),
      },
    }));
  },

  // Update team member permission
  updateMemberPermission: (memberId, permission, value) => {
    set((state) => ({
      enterpriseSetup: {
        ...state.enterpriseSetup,
        teamMembers: state.enterpriseSetup.teamMembers.map((member) =>
          member.id === memberId
            ? {
                ...member,
                permissions: {
                  ...member.permissions,
                  [permission]: value,
                },
              }
            : member
        ),
      },
    }));
  },

  // Set dashboard preferences
  setDashboardPreferences: (preferences) => {
    set((state) => ({
      enterpriseSetup: {
        ...state.enterpriseSetup,
        ...preferences,
      },
    }));
  },

  // Toggle integration selection
  toggleIntegration: (integration) => {
    set((state) => {
      const currentIntegrations = state.enterpriseSetup.preferredIntegrations;
      const newIntegrations = currentIntegrations.includes(integration)
        ? currentIntegrations.filter((item) => item !== integration)
        : [...currentIntegrations, integration];

      return {
        enterpriseSetup: {
          ...state.enterpriseSetup,
          preferredIntegrations: newIntegrations,
        },
      };
    });
  },

  // Toggle notification channel
  toggleNotificationChannel: (channel) => {
    set((state) => {
      const currentChannels = state.enterpriseSetup.notificationChannels;
      const newChannels = currentChannels.includes(channel)
        ? currentChannels.filter((item) => item !== channel)
        : [...currentChannels, channel];

      return {
        enterpriseSetup: {
          ...state.enterpriseSetup,
          notificationChannels: newChannels,
        },
      };
    });
  },

  // Toggle incident priority
  toggleIncidentPriority: (priority) => {
    set((state) => {
      const currentPriorities = state.enterpriseSetup.defaultIncidentPriority;
      const newPriorities = currentPriorities.includes(priority)
        ? currentPriorities.filter((item) => item !== priority)
        : [...currentPriorities, priority];

      return {
        enterpriseSetup: {
          ...state.enterpriseSetup,
          defaultIncidentPriority: newPriorities,
        },
      };
    });
  },

  // Set current step
  setCurrentStep: (step) => {
    set({ currentStep: step });
  },

  // Set error for a specific field
  setError: (field, error) => {
    set((state) => ({
      errors: {
        ...state.errors,
        [field]: error,
      },
    }));
  },

  // Clear error for a specific field
  clearError: (field) => {
    set((state) => {
      const newErrors = { ...state.errors };
      delete newErrors[field];
      return { errors: newErrors };
    });
  },

  // Clear all errors
  clearAllErrors: () => {
    set({ errors: {} });
  },

  // Validate current step
  validateCurrentStep: () => {
    const { currentStep, enterpriseSetup } = get();
    const { clearAllErrors, setError } = get();

    clearAllErrors();
    let isValid = true;

    switch (currentStep) {
      case 0: // Company Information
        if (!enterpriseSetup.companyName.trim()) {
          setError("companyName", "Company name is required");
          isValid = false;
        }
        if (!enterpriseSetup.industry) {
          setError("industry", "Industry selection is required");
          isValid = false;
        }
        if (!enterpriseSetup.companySize) {
          setError("companySize", "Company size is required");
          isValid = false;
        }
        if (!enterpriseSetup.primaryRegion) {
          setError("primaryRegion", "Primary region is required");
          isValid = false;
        }
        break;

      case 1: // Admin Contact
        if (!enterpriseSetup.adminName.trim()) {
          setError("adminName", "Admin name is required");
          isValid = false;
        }
        if (!enterpriseSetup.adminEmail.trim()) {
          setError("adminEmail", "Admin email is required");
          isValid = false;
        } else if (
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enterpriseSetup.adminEmail)
        ) {
          setError("adminEmail", "Please enter a valid email address");
          isValid = false;
        }
        if (!enterpriseSetup.adminJobTitle.trim()) {
          setError("adminJobTitle", "Admin job title is required");
          isValid = false;
        }
        break;

      case 2: // Team Members (optional, so no validation required)
        break;

      case 3: // Dashboard Preferences (optional, so no validation required)
        break;

      default:
        break;
    }

    return isValid;
  },

  // Submit enterprise setup
  submitEnterpriseSetup: async () => {
    const { validateCurrentStep, enterpriseSetup } = get();

    if (!validateCurrentStep()) {
      return;
    }

    set({ isSubmitting: true });

    try {
      // Simulate API call
      const formData = new FormData();

      // Add company information
      formData.append("companyName", enterpriseSetup.companyName);
      formData.append("industry", enterpriseSetup.industry);
      formData.append("companySize", enterpriseSetup.companySize);
      formData.append("primaryRegion", enterpriseSetup.primaryRegion);

      if (enterpriseSetup.companyLogo?.file) {
        formData.append("companyLogo", enterpriseSetup.companyLogo.file);
      }

      // Add admin contact
      formData.append("adminName", enterpriseSetup.adminName);
      formData.append("adminEmail", enterpriseSetup.adminEmail);
      formData.append("adminPhone", enterpriseSetup.adminPhone);
      formData.append("adminJobTitle", enterpriseSetup.adminJobTitle);

      // Add team members and preferences as JSON
      formData.append(
        "teamMembers",
        JSON.stringify(enterpriseSetup.teamMembers)
      );
      formData.append(
        "colorScheme",
        JSON.stringify(enterpriseSetup.colorScheme)
      );
      formData.append("defaultDashboard", enterpriseSetup.defaultDashboard);
      formData.append(
        "preferredIntegrations",
        JSON.stringify(enterpriseSetup.preferredIntegrations)
      );
      formData.append(
        "notificationChannels",
        JSON.stringify(enterpriseSetup.notificationChannels)
      );
      formData.append(
        "defaultIncidentPriority",
        JSON.stringify(enterpriseSetup.defaultIncidentPriority)
      );

      // Replace with actual API endpoint
      // const response = await fetch('/api/enterprise-setup', {
      //   method: 'POST',
      //   body: formData,
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to submit enterprise setup');
      // }

      // Simulate successful submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Enterprise setup submitted successfully", enterpriseSetup);
    } catch (error) {
      console.error("Error submitting enterprise setup:", error);
      set({
        errors: {
          submit:
            error instanceof Error
              ? error.message
              : "Failed to submit enterprise setup",
        },
      });
    } finally {
      set({ isSubmitting: false });
    }
  },

  // Reset enterprise setup to initial state
  resetEnterpriseSetup: () => {
    set({
      enterpriseSetup: initialEnterpriseSetup,
      currentStep: 0,
      isSubmitting: false,
      errors: {},
    });
  },
});
