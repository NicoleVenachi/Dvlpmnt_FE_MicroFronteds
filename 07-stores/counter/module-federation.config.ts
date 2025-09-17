export const mfConfig = {
  name: "counter",
  exposes: {
    "./Counter": "./src/components/Counter.tsx",
  },
  shared: ["react", "react-dom", "sweetalert2"],
  remotes: {
    storeMF: "store@http://localhost:5050/remoteEntry.js",
  },
  filename: "remoteEntry.js",
};
