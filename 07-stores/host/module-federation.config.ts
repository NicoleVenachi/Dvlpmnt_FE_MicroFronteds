export const mfConfig = {
  name: "host",
  exposes: {},
  shared: ["react", "react-dom", "sweetalert2"],
  remotes: {
    storeMF: "store@http://localhost:5050/remoteEntry.js",
    navMF: "nav@http://localhost:8081/remoteEntry.js",
    counterMF: "counter@http://localhost:8082/remoteEntry.js",
  },
};
