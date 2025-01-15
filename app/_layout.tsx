import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import Login from "./screens/Login";
import Register from "./screens/Register";

export default function RootLayout() {
  const [initialized, setInitialized] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setUser(user);
    if (initialized) {
      setInitialized(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      <Stack>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack>
    </NavigationContainer>
  );
}
