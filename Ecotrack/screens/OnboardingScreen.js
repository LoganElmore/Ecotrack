import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

//Fuck adding a logo I guess :( It was a cool one too
{/*const logo = Asset.fromModule(require('./assets/logo.png')).uri;*/}
const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
    

    
      <Text style={styles.appName}>EcoTrack</Text>
      <Text style={styles.description}>
        Monitor your daily activities and their environmental impact to make
        conscious decisions for a greener future.
      </Text>
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => navigation.navigate('SignUpLoginScreen')}
      >
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F8FF',
  },
  logo: {
    width: 150,
    height: 150,
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginTop: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginTop: 20,
    color: '#556B2F',
  },
  getStartedButton: {
    backgroundColor: '#3CB371',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  getStartedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default OnboardingScreen;