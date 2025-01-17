import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useEffect, useState } from "react";
import { Stack, useRouter, useSegments } from "expo-router";

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);
      setInitializing(false);
    });
    return subscriber;
  }, []);

  useEffect(() => {
    if (initializing) return;

    //dont redirect to auth if on onboarding
    if (segments[0] === "(onboarding)") return;
    const inAuthGroup = segments[0] === "(auth)";
    if (!user && !inAuthGroup) {
      router.replace("/(auth)/login");
    } else if (user && inAuthGroup) {
      router.replace("/screens/home");
    }
  }, [user, initializing, segments]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(onboarding)" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="screens" />
    </Stack>
  );
}
