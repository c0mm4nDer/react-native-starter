module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "react-native-reanimated/plugin"
    ],
    [
      "module-resolver",
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          src: "./src",
          // buttons: "./src/components/buttons",
        },
      },
    ],
  ],
};
