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
};
