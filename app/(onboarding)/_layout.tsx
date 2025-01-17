import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function OnboardingLayout() {
  return (
    <>
      <StatusBar hidden />
      <Stack screenOptions={{ 
        headerShown: false,
        animation: "fade",
      }} />
    </>
  );
}
