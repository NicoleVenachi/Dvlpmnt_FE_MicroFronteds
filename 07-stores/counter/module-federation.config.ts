export const mfConfig = {
  name: "counter",
  exposes: {
    "./Counter": "./src/components/Counter.tsx",
  },
  shared: ["react", "react-dom"],
  filename: "remoteEntry.js",
};
