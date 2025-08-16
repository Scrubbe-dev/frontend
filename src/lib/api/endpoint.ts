export const endpoint = {
  auth: {
    account_setup: "/business/setup",
    decode_invite_token: "/business/decode_invite",
  },
  data_source: {
    fingerprint_configuration: "/fingerprint/configuration",
  },
  incident_ticket: {
    create: "/incident-ticket",
    get: "/incident-ticket",
    get_members: "/business/get_members",
    send_comment: "/incident-ticket/comment",
    get_comment: "/incident-ticket/comment",
    get_messages: "/incident-ticket/message",
    analytics: "/incident-ticket/analytics",
  },
  api_key: {
    create: "/apikey/createapikey",
    get: "apikey/apikeys",
  },
  integration: {
    whatsapp: "/integrations/whatsapp/connect",
    sms: "/integrations/sms/connect",
    slack: "/integrations/slack/connect",
    slack_callback: "/integrations/slack/oauth/callback",
    googlemeet: "/integrations/google/meet/connect",
    googlemeet_callback: "/integrations/google/meet/oauth/callback",
    github: "/integrations/github/connect",
    github_callback: "/integrations/github/callback",
    gitlab: "/integrations/gitlab/connect",
    gitlab_callback: "/integrations/gitlab/callback",
  },
};
