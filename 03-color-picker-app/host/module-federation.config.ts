export const mfConfig = {
  name: "host",
  exposes: {},
  shared: ["react", "react-dom"],
  remotes: {
    colorPicker:
      "mf_colorpicker@https://colorpickermf.netlify.app/remoteEntry.js",
    colorList:
      "mf_colorlist@https://colorlist-mf-app.netlify.app/remoteEntry.js",
  },
};
