import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Home() {
  const user = auth().currentUser;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Home, {user?.email}</Text>
    </View>
  );
} 