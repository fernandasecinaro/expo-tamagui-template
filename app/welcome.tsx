import { Stack, Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useWindowDimensions } from 'react-native';
import { YStack, Image } from 'tamagui';

import { Title, Subtitle, Container, Main } from '../tamagui.config';

import { Button } from '~/ui/Button';

export default function Page() {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();

  return (
    <Container>
      <Stack.Screen options={{ title: 'Welcome', headerShown: false }} />
      <Image source={{ width, height: 350, uri: 'https://thispersondoesnotexist.com/' }} />
      <Main centered rowGap={40}>
        <YStack>
          <Title size="$9" textAlign="center">
            {t('welcome.title')}
          </Title>
          <Subtitle size="$7" textAlign="center">
            This is the first page of your app.
          </Subtitle>
        </YStack>
        <YStack space="$2">
          <Link href={{ pathname: '/login', params: { name: 'Dan' } }} asChild>
            <Button>Primary button</Button>
          </Link>
          <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
            <Button secondary>Secondary button</Button>
          </Link>
        </YStack>
      </Main>
    </Container>
  );
}
