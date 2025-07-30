export const mfConfig = {
  name: "host",
  exposes: {},
  shared: ["react", "react-dom"],
  remotes: {
    colorPicker: "mf_colorpicker@http://localhost:3001/remoteEntry.js",
  },
};
