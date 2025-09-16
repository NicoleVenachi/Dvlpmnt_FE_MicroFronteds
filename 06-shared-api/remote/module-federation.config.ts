export const mfConfig = {
  name: "remote",
  exposes: {
    "./Header": "./src/components/Header.tsx",
  },
  shared: ["react", "react-dom", "sweetalert2"],
  filename: "remoteEntry.js",
};
