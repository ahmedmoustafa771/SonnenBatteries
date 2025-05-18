import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

import { BatteryScreen } from './screens/BatteryScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemeProvider>
        <GestureHandlerRootView style={styles.gestureContainer}>
          <BatteryScreen />
          <Toast />
        </GestureHandlerRootView>
      </ThemeProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  gestureContainer: {
    flex: 1,
    width: '100%',
  },
});
