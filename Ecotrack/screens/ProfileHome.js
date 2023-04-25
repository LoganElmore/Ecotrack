import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileHome = () => {
    cont [Profile, setProfile] = useState({
        name:'',
        photo: null,
        transportation:'',
        vehicleType:'',
        heatingSource:'',
        numberOfPeople:'',
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
        </View>
        );
};