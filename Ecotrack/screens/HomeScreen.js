import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,FlatList} from 'react-native';

const HomeScreen = ({ navigation }) => {
  // Sample Data for Example
  const recentActivities = [
    { id: '1', title: 'Drive to Work', impact: '10 kg CO2' },
    { id: '2', title: 'Mow the yard', impact: '5 kg CO2' },
    { id: '3', title: 'Take bus', impact: '3 kg CO2' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.activity}>
      <Text>{item.title}</Text>
      <Text>{item.impact}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weekly Summary</Text>
      <Text>Total Carbon Emissions: 18 kg CO2</Text>
      <Text>Water Usage: 250 gallons</Text>
      <Text>Waste Generated: 20 kg</Text>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddActivity')}
      >
        <Text style={styles.buttonText}>+ Add Activity</Text>
      </TouchableOpacity>

      <FlatList
        data={recentActivities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.navMenu}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('History')}
        >
          <Text style={styles.navButtonText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//Homescreen Styling
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
      color: '#2E8B57',
      marginBottom: 20,
    },
    addButton: {
      backgroundColor: '#3CB371',
      paddingHorizontal: 30,
      paddingVertical: 15,
      borderRadius: 10,
      marginTop: 10,
      marginBottom: 20,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFF',
    },
    activity: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FFF',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 5,
      marginBottom: 10,
      width: '100%',
    },
    navMenu: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      marginTop: 20,
    },
    navButton: {
      backgroundColor: '#3CB371',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
    },
    navButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFF',
    },
  });  
export default HomeScreen;