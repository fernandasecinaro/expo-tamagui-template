import { Text, View } from 'react-native';

import { useSession } from '../features/auth/AuthContext';

export default function LogIn() {
  const { logIn } = useSession();

  const handleLogin = () => {
    logIn('test@gmail.com', 'password');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={handleLogin}>Log In</Text>
    </View>
  );
}
