import { Redirect, Stack, SplashScreen } from 'expo-router';

import { useSession } from '../../features/auth/AuthContext';

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const { session, isLoading } = useSession();

  if (!isLoading) {
    SplashScreen.hideAsync();
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and login in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/welcome" />;
  }

  // This layout can be deferred because it's not the root layout.
  return <Stack />;
}
