export const mfConfig = {
  name: "mf_cards",
  exposes: {
    "./placeCards": "./src/placeCards.js",
  },
  shared: ["vue"],
  filename: "remoteEntry.js",
};
