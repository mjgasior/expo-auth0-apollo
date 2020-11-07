export default ({ config }) => {
  return {
    expo: {
      name: "cracker-mobile",
      slug: "cracker-mobile",
      platforms: ["ios", "android", "web"],
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/icon.png",
      splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#0F4C81",
      },
      updates: {
        fallbackToCacheTimeout: 0,
      },
      assetBundlePatterns: ["**/*"],
      ios: {
        supportsTablet: true,
      },
      web: {
        favicon: "./assets/favicon.png",
      },
      android: {
        package: "com.mjgasior.cracker",
        versionCode: 1,
        config: {
          googleMaps: {
            apiKey: "<paste API key here>",
          },
        },
      },
      extra: {
        apiAddress: config.apiAddress,
        authDomain: config.authDomain,
        clientId: config.clientId,
      },
    },
  };
};
