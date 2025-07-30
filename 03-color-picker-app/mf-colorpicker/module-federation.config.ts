export const mfConfig = {
  name: "mf_colorpicker",
  exposes: {
    "./ColorPicker": "./src/components/ColorPicker.tsx",
  },
  shared: ["react", "react-dom"],
  filename: "remoteEntry.js",
};
