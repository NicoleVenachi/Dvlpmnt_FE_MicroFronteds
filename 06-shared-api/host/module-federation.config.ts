export const mfConfig = {
  name: "host",
  exposes: {},
  shared: ["react", "react-dom", "sweetalert2"],
  remotes: {
    remoteMF: "remote@http://localhost:8081/remoteEntry.js",
  },
};
