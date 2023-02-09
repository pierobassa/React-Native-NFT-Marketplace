# Installation
```
npm i --legacy-peer-deps
```

# Start
```
npm start
```

# Features
1. React-Native Wallet connect
The application supports React-Native wallet connect without having to Expo eject thanks to a couple of introductions:
- "expo-crypto-polyfills" in the `metro.config.js`: Use this to polyfill crypto-related libraries without having to eject from Expo. The goal of this library is to continue to work across all Expo-supported ecosystems (ios,android,web)
- require("react-native-get-random-values"); in `globals.ts` 
- `WalletConnectExperience.tsx` handles the wallet connect logic

2. React-Native environment variables w/ RN dotenv
Usage of environment variables also with your Expo project thanks to a personalized config in `babel.config.js`

3. Search and buy any NFT directly on your phone