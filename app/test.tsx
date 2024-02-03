import { Stack, Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, YStack } from 'tamagui';

import { Title, Subtitle, Container } from '../tamagui.config';

import { Button } from '~/ui/Button';

export default function Page() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
      <Container>
        <Stack.Screen options={{ title: 'Overview', headerShown: false }} />
        <View style={{ backgroundColor: 'blue', height: 100, width: 300 }} />
        <YStack>
          <Title>Hello World</Title>
          <Subtitle>This is an Expo template.</Subtitle>
        </YStack>
        <Link href={{ pathname: '/test', params: { name: 'Dan' } }} asChild>
          <Button>Show Details</Button>
        </Link>
      </Container>
    </SafeAreaView>
  );
}
