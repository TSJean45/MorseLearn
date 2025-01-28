import { View, StyleSheet } from 'react-native';
import { Text, Image, Button, Input } from '@rneui/themed';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import { useRouter } from 'expo-router';
import { COLORS } from '@/constants/Colors';

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const register = () => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth(), email, password)
      .then((userCredential) => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/images/light-logo.png")} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Create Account</Text>
      
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
        leftIcon={{ type: 'material', name: 'email', color: COLORS.text.primary }}
      />
      
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
        leftIcon={{ type: 'material', name: 'lock', color: COLORS.text.primary }}
      />
      
      <Button
        title={isLoading ? "Creating Account..." : "Register"}
        onPress={register}
        loading={isLoading}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        containerStyle={styles.buttonContainer}
      />

      <Button
        title="Already have an account? Login"
        onPress={() => router.push('/(auth)/login')}
        type="clear"
        titleStyle={styles.linkText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pink,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text.primary,
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 0,
    marginVertical: 5,
    backgroundColor: 'transparent',
  },
  input: {
    color: COLORS.text.primary,
    paddingLeft: 10,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
  button: {
    backgroundColor: COLORS.red,
    borderRadius: 25,
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text.light,
  },
  linkText: {
    color: COLORS.red
  },
}); 