module.exports = {
  preset: "react-native",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native|@react-native-community)",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/assets/"],
};
