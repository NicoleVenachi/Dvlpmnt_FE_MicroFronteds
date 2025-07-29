export const mfConfig = {
  name: "hostTest",
  exposes: {},
  shared: ["react", "react-dom"],
  remotes: {
    navBar:
      "navBar@https://reliable-biscochitos-221468.netlify.app/remoteEntry.js",
    //nomencaltuira name remoteMF(key):URL
    counterReact:
      "counter_mf@https://rococo-moxie-6c2497.netlify.app/remoteEntry.js",
  },
};
