export const mfConfig = {
  name: "mf_counter",
  exposes: {
    "./Counter": "./src/components/Counter.tsx",
  },
  shared: ["react", "react-dom", "react-router-dom"],
  filename: "remoteEntry.js",
};
