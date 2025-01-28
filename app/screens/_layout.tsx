import { Stack } from "expo-router";
import auth from "@react-native-firebase/auth";
import { View, Button } from 'react-native';
import { Tabs } from "expo-router";
import { Icon } from "@rneui/themed";
import { COLORS } from "@/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: COLORS.white,
        borderTopWidth: 0,
        elevation: 0,
        height: 60,
        paddingBottom: 8,
      },
      tabBarActiveTintColor: COLORS.red,
      tabBarInactiveTintColor: COLORS.text.secondary,
      headerShown: false,
    }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" type="material" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          tabBarLabel: "Learn",
          tabBarIcon: ({ color }) => (
            <Icon name="school" type="material" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="practice"
        options={{
          tabBarLabel: "Practice",
          tabBarIcon: ({ color }) => (
            <Icon name="edit" type="material" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Icon name="person" type="material" color={color} />
          ),
        }}
      />
    </Tabs>
  );
} 