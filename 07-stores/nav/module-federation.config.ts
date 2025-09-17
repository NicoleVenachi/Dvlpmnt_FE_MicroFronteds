export const mfConfig = {
  name: "nav",
  exposes: {
    "./Navbar": "./src/components/Navbar.tsx",
  },
  shared: ["react", "react-dom"],
  filename: "remoteEntry.js",
};
