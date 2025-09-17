export const mfConfig = {
  name: "store",
  exposes: {
    "./Store": "./src/store.tsx",
  },
  shared: ["react", "react-dom"],
  filename: "remoteEntry.js",
};
