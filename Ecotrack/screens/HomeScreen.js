import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

const HomeScreen = ({navigation}) => {
    // Dummy data for recent activities
    const recentActivities = [
        {id: '1', title: 'Activity 1', impact: '10 kg CO2'},
        {id: '2', title: 'Activity 2', impact: '22 kg CO2'},
        {id: '3', title: 'Activity 3', impact: '34 kg CO2'},
    ];

    const renderItem = ({ item }) => (
        <View style={styles.activity}>
            <Text>{item.title}</Text>
            <Text>{item.impact}</Text>
        </View>
    )
}