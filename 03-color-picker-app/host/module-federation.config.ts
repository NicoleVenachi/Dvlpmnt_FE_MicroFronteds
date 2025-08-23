export const mfConfig = {
  name: "host",
  exposes: {},
  shared: ["react", "react-dom"],
  remotes: {
    colorPicker:
      // "mf_colorpicker@http://localhost:3001/remoteEntry.js",
      "mf_colorpicker@https://colorpickermf.netlify.app/remoteEntry.js",
    colorList:
      // "mf_colorlist@http://localhost:3019/remoteEntry.js",
      "mf_colorlist@https://colorlist-mf-app.netlify.app/remoteEntry.js",
  },
};
