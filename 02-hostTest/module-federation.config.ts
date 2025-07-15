export const mfConfig = {
  name: "hostTest",
  exposes: {},
  shared: ["react", "react-dom"],
  remotes: {
    navBar: "navBar@http://localhost:3005/remoteEntry.js",
    //nomencaltuira name remoteMF(key):URL
    counterReact: "counter_mf@http://localhost:3006/remoteEntry.js",
  },
};
