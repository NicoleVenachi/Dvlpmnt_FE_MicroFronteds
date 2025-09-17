export const mfConfig = {
  name: "nav",
  exposes: {
    "./Navbar": "./src/components/Navbar.tsx",
  },
  remotes: {
    storeMF: "store@http://localhost:5050/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
  filename: "remoteEntry.js",
};
