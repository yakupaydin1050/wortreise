// Dynamic Expo config — extends app.json.
// experiments.baseUrl ("/wortreise") is only needed for the GitHub Pages web
// export. During native EAS builds it corrupts iOS asset paths: assets get
// copied into Wortreise.app/wortreise/, which collides with the app binary
// "Wortreise" on the case-insensitive build filesystem (ENOTDIR).
module.exports = ({ config }) => {
  if (process.env.EAS_BUILD === 'true' && config.experiments) {
    delete config.experiments.baseUrl;
  }
  return config;
};
