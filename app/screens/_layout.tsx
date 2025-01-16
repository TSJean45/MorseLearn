import { Stack } from "expo-router";
import auth from "@react-native-firebase/auth";
import { View, Button } from 'react-native';

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="home" 
        options={{
          title: "Home",
          headerRight: () => (
            <Button title="Sign Out" onPress={() => auth().signOut()} />
          ),
        }}
      />
    </Stack>
  );
} 