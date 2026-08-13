// SPM TOP AGENCY
// Backend configuration
//
// IMPORTANT:
// Do NOT put real passwords, API keys or database
// credentials directly in this file.

const config = {
  agencyName: "SPM TOP AGENCY",
  agencyCode: "100857",

  services: {
    coinRecharge: true,
    paidSending: true,
    events: true,
    aiChat: true
  },

  paidSending: {
    tenK: 600,
    hundredK: 6000
  },

  security: {
    visitorAnalytics: true,
    vpnDetection: true,
    proxyDetection: true
  }
};

module.exports = config;
