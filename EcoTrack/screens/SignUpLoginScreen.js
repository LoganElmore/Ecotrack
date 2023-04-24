import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Touchable } from 'react-native';

const SignUpLoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Welcome to EcoTrack </Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={() => navigation.navigate('SignUp')}
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('Home')}
                </TouchableOpacity>
            
            </View>
        </View>
    )
}