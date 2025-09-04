export const mfConfig = {
  name: "host",
  exposes: {},
  shared: ["react", "react-dom", "react-router-dom"],
  remotes: {
    navbar: "mf_navbar@http://localhost:3001/remoteEntry.js",
    counter: "mf_counter@http://localhost:3002/remoteEntry.js",
    cards: "mf_cards@http://localhost:3003/remoteEntry.js",
  },
};
