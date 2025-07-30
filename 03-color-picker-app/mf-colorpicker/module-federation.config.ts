export const mfConfig = {
  name: "mf_colorpicker",
  exposes: {
    "./ColorPicker": "./src/components/ColorPicker.tsx",
    "./useColors": "./src/hooks/useColors.ts",
  },
  shared: ["react", "react-dom"],
  filename: "remoteEntry.js",
};
