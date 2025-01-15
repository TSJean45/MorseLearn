import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";

export default function Index() {
  return <Login />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
