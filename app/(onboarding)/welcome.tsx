import { View, StyleSheet } from "react-native";
import { Text, Image, Button } from "@rneui/themed";
import React from "react";
import { COLORS } from "../../constants/Colors";
import { useRouter } from "expo-router";

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require("../../assets/images/dark-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.slogan}>
          Unlock the Secret Language{"\n"}
          of Dots and Dashes
        </Text>
        <Image
          source={require("../../assets/images/onboarding-vector.png")}
          style={styles.vector}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.description}>
          Discover the timeless language that revolutionized communication. From telegraph to modern day, Morse code continues to connect people across the world. Start your journey today.
        </Text>
        <Button
          title="Get Started"
          onPress={() => router.push("/(auth)/register")}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pink,
  },
  topSection: {
    flex: 0.8,
    backgroundColor: COLORS.red,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: "space-evenly",
    alignItems: "center",
    overflow: "hidden",
    padding: 10
  },
  bottomSection: {
    flex: 0.2,
    padding: 20
  },
  logo: {
    width: 150,
    height: 150,
  },
  slogan: {
    color: COLORS.text.light,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  vector: {
    width: 400,
    height: 400,
  },
  description: {
    color: COLORS.text.primary,
    fontSize: 15,
    textAlign: "left",
  },
  button: {
    backgroundColor: COLORS.red,
    borderRadius: 25,
    paddingVertical: 15,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
  },
});
