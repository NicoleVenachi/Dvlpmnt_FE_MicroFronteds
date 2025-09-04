export const mfConfig = {
  name: "mf_navbar",
  exposes: {
    "./Navbar": "./src/components/Navbar.tsx",
  },
  shared: ["react", "react-dom", "react-router-dom"],
  filename: "remoteEntry.js",
};
