import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const SignUpLoginScreen = ({ navigation }) => {
  // Render the SignUpLoginScreen component
  return (
    <View style={styles.container}>
      {/* Display the welcome title */}
      <Text style={styles.title}>Welcome to EcoTrack</Text>
      
      {/* Email input field */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      {/* Password input field */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      
      {/* Container for Sign Up and Login buttons */}
      <View style={styles.buttonContainer}>
        {/* Sign Up button, navigates to SignUp screen */}
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate('SignUpScreen')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        
        {/* Login button, navigates to Home screen */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Define the styles for the SignUpLoginScreen component
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
  buttonContainer: {
    flexDirection: 'row',
  },
  signUpButton: {
    backgroundColor: '#3CB371',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  loginButton: {
    backgroundColor: '#3CB371',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default SignUpLoginScreen;