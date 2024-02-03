import { Stack } from 'expo-router';

import { Title } from '~/tamagui.config';

export default function Page() {
  return (
    <>
      <Stack.Screen options={{ title: 'Patients', headerShown: false }} />

      <Title>Hello World</Title>
    </>
  );
}
