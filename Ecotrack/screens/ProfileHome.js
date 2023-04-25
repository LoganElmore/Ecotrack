import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Profile from './screens/Profile';


const ProfileHome = () => {
    const [profile, setProfile] = useState({
        name: '',
        photo: null,
        transportation: '',
        vehicleType: '',
        heatingSource: '',
        numberOfPeople: '',
    });
    

    // Data simulating input from Profile.js form
    useEffect(() => {
        setProfile({
            name: 'Little Bubs',
            photo: null,
            transportation: 'Car',
            vehicleType: 'Sedan',
            heatingSource: 'Electric',
            numberOfPeople: 4,
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Profile</Text>

            {Profile.photo ? (
                <Image source={{uri: Profile.photo }} style={styles.profileImage}/>
            ) : (
                <View style={styles.profileImagePlaceholder}>
                <Text style={styles.placeholderText}>No Photo Added</Text>
                </View>
            )}

        <Text>Name: {profile.name}</Text>

        <Text>Transportation: {profile.transportation}</Text>
        {profile.transportation === 'Car' && (
        <Text>Vehicle Type: {profile.vehicleType}</Text>
        )}
        
        <Text>Heating Source: {profile.heatingSource}</Text>
        <Text>Number of People: {profile.numberOfPeople}</Text>
        <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('HomeScreen')}
        >
            <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignUpLoginScreen')}
        >
            <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
        </View>

        </View>
        
        );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F8FF',
        padding: 20,
    },
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
},
profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
},
profileImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
},
placeholderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
},
buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },  
});

export default ProfileHome;