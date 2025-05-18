# sonnen Batteries (Battery Charging State Visualization)

A React Native mobile application that visualizes a customer's battery charging state over the last 24 hours.

## Features

- ⏳ 24-hour timeline chart view
- 👆 Tap/pan to inspect values at specific times
- 📋 Chronological list of all state changes upon request
- 🛡️ Type-safe TypeScript implementation
- ⚡ Mocked backend API

## 🛠 Technology Stack

| Category         | Technologies                 |
| ---------------- | ---------------------------- |
| Framework        | React Native CLI             |
| Language         | TypeScript                   |
| State Management | React Context                |
| Charting         | victory-native               |
| Testing          | Jest, React Testing Library  |
| Code Quality     | ESLint, Prettier, TypeScript |

## Prerequisites

- Node.js (v18+)
- npm or yarn
- React Native CLI environment
- Xcode (iOS development)
- Android Studio (Android development)

## Mock API Data

- The app uses realistic mock data that can be found in src/mocks/battery-mock.json
- Simulated network delay (1000ms)
- Code for real API integration is ready and commented as a TODO in the service file in src/services/apis/battery.services.ts

## 🚀 Getting Started

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/battery-charging-visualization.git
cd battery-charging-visualization

# Install dependencies
npm install

# Install iOS pods
cd ios && pod install && cd ..
```

## Running the App

```bash
# Start Metro bundler (in separate terminal)
npm start

# Android
npm run android

# iOS
npm run ios
```

## Running Test

```bash
npm test
```

## Future Improvements

- Real API integration
- More test coverage using Jest for unit testing and Detox for end to end
- Dark mode support
- Empty state components
- Network error recovery
- Precommit scripts to ensure code quality before pushing to repo using husky
- Splash Screen
