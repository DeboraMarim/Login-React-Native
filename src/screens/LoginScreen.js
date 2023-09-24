import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const isValidEmail = () => {
    const regex = /^[a-zA-Z0-9._-]{4,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return email.match(regex) && email.split('@')[0].length >= 4 && email.split('.')[0].length >= 4 && email.split('.')[1].length >= 3;
  };

  const isValidPassword = () => {
    return password.length >= 6;
  };
  
  const canSubmit = () => {
    return isValidEmail() && isValidPassword();
  };

  const handleLogin = () => {
    console.log('Logged In');
    navigation.navigate('Initial');
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setPassword('');
    });
    return unsubscribe;
  }, [navigation]);

  
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
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
          style={canSubmit() ? styles.buttonEnabled : styles.buttonDisabled} 
          onPress={handleLogin}
          disabled={!canSubmit()}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.registerLabel}>Register</Text>
        <Text style={styles.forgotPasswordLabel}>Esqueceu sua senha?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  contentContainer: {
    width: '100%',
    maxWidth: 400,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  buttonEnabled: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonDisabled: {
    backgroundColor: 'lightgray',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  registerLabel: {
    marginTop: 15,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  forgotPasswordLabel: {
    marginTop: 15,
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: 'blue',
  },
});

export default LoginScreen;
