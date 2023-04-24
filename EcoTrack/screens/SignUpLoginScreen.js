import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Touchable } from 'react-native';

const SignUpLoginScreen = ({navigation}) => {
    // Rendering the SignUpLoginScreen component
    return (
        <View style={styles.container}>
            {/* Display the welcome title */}
            <Text style={styles.title}> Welcome to EcoTrack </Text>

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
                onPress={() => navigation.navigate('SignUp')}>
            
            <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            {/* Login button, navigates to Home screen */}

                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('Home')}>
                </TouchableOpacity>

            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            
        </View>
        </View>
    );

};