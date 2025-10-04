import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@react-navigation/native';
import { lightTheme, darkTheme } from '@constants/Theme';

export default function RootLayout() {
  // We keep things simple: default to system color scheme
  return (
    <SafeAreaProvider>
      <ThemeProvider value={lightTheme}>
        <Stack>
          <Stack.Screen
            name="(auth)/onboarding"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
          <Stack.Screen
            name="(auth)/register"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
