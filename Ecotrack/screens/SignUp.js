// Sign Up Form
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SignUpScreen = ({ navigation }) => {
  // Declare state variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle the Create Account button press
  const handleCreateAccount = () => {
    // Navigate to Home screen after creating an account
    navigation.navigate('Home');
  };

  // Render the SignUpScreen component
  return (
    <View style={styles.container}>
      {/* Display the title */}
      <Text style={styles.title}>Create Your EcoTrack Account</Text>
      
      {/* Email input field */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      {/* Password input field */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      
      {/* Create Account button */}
      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={handleCreateAccount}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

// Define the styles for the Sign up form component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F8FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  createAccountButton: {
    backgroundColor: '#3CB371',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default SignUpScreen;
