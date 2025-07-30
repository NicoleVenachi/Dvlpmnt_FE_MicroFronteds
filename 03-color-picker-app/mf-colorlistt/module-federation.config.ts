export const mfConfig = {
  name: "mf_colorlist",
  exposes: {
    "./ColorList": "./src/components/ColorList.tsx",
  },
  shared: ["react", "react-dom"],
  filename: "remoteEntry.js",
};
