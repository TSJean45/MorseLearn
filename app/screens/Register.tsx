import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const register = () => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth(), email, password)
      .then((userCredential) => {
        setIsLoading(false);
        // Handle successful registration (e.g., navigate to another screen)
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error); // Log the error for debugging
        // Optionally, show an error message to the user
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity 
        style={styles.button}
        onPress={register}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? "Loading..." : "Register"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Register; 