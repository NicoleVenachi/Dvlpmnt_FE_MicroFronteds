export const mfConfig = {
  name: "navBar",
  exposes: { "./Navbar": "./src/components/Navbar.tsx" },
  shared: ["react", "react-dom"],
  filename: "remoteEntry.js",
};
