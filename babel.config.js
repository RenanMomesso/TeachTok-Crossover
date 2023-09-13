module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'src': './src',
          '@screens': './src/screens',
          '@graphql': './src/graphql',
          '@components': './src/components',
          '@assets': './assets',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@theme': './src/globalStyles'
        }
      }],
    'react-native-reanimated/plugin',
  ],
};
