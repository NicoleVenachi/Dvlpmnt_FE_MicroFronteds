export const mfConfig = {
  name: "counter_mf",
  exposes: { "./CounterReact": "./src/components/Counter.tsx" },
  shared: ["react", "react-dom"],
  filename: "remoteEntry.js",
};
