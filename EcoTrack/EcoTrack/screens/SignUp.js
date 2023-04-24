import React, {useState} from 'react';
import {StyleSheet,Text,View,TextInput,TouchableOpacity} from 'react-native';

const SignUp=() => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle the Create Account button
    const handleCreateAccount = () => {
    // Navigates to Home Screen after account creation
    navigation.navigate('Home');
};

// Rendering SignUpScreen components
return (
    <View style = {styles.container}>
    {/*Diplay the Title */}
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