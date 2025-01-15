import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from '@react-native-firebase/auth'
import auth from '@react-native-firebase/auth'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  
  const signIn = () => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth(), email, password)
      .then((userCredential) => {
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        console.error(error)
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      
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
        onPress={signIn}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? "Loading..." : "Sign In"}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

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
})

export default Login