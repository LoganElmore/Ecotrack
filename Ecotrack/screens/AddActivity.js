import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const AddActivity = ({ navigation }) => {
  const [activityType, setActivityType] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');

  const saveActivity = () => {
    // Save the activity data and update the environmental impact on the Home Screen (Not completely functional)
    navigation.navigate('HomeScreen');
  };

  const cancelActivity = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Activity</Text>
      <Text style={styles.label}>Activity Type:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setActivityType}
        value={activityType}
        placeholder="Transportation, Food Consumption, Waste Generation"
      />
      <Text style={styles.label}>Date:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDate}
        value={date}
        placeholder="DD-MM-YYYY"
      />
      <Text style={styles.label}>Details:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDetails}
        value={details}
        placeholder="Additional details (optional)"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={saveActivity}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={cancelActivity}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F8FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
    width: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddActivity;