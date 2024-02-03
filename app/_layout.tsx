import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TamaguiProvider } from 'tamagui';

import { SessionProvider } from '../features/auth/AuthContext';
import i18n from '../services/localization/i18n';
import config from '../tamagui.config';

const queryClient = new QueryClient();

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <TamaguiProvider config={config}>
            <SafeAreaProvider>
              <Stack />
            </SafeAreaProvider>
          </TamaguiProvider>
        </SessionProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
}
