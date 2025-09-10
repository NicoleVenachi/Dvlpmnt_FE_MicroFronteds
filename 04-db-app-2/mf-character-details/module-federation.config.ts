export const mfConfig = {
  name: "mf_character_details",
  exposes: {
    "./CharacterDetails": "./src/components/CharacterDetails.tsx",
  },
  shared: ["react", "react-dom", "react-router-dom"],
  filename: "remoteEntry.js",
};
