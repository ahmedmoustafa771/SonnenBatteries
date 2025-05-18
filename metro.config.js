const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

// Get the default Metro config
const defaultConfig = getDefaultConfig(__dirname);

const customConfig = {
  // Your custom Metro configuration options here
};

// Merge the default config with your custom config
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// Wrap with Reanimated's config
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
