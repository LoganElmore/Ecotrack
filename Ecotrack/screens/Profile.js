// Profile
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Picker,
  ScrollView,
} from 'react-native';

const Profile = ({ navigation }) => {
  // State variables
  const [name, setName] = useState('');
  const [transportationMethod, setTransportationMethod] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [otherTransportationFeedback, setOtherTransportationFeedback] = useState('');
  const [numPeopleInHome, setNumPeopleInHome] = useState('');
  const [heatingSource, setHeatingSource] = useState('');
  const [powerDetails, setPowerDetails] = useState('');

  // Handle profile creation and transition to the Home screen
  const handleProfileCreation = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Your Profile</Text>

      {/* Name input field */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />

      {/* Transportation Method Selection */}
      <Text style={styles.label}>Transportation Method:</Text>
      <Picker
        selectedValue={transportationMethod}
        style={styles.picker}
        onValueChange={(itemValue) => setTransportationMethod(itemValue)}
      >
        <Picker.Item label="Car" value="car" />
        <Picker.Item label="Bike" value="bike" />
        <Picker.Item label="Walking" value="walking" />
        <Picker.Item label="Public Transportation" value="public_transportation" />
        <Picker.Item label="Other" value="other" />
      </Picker>

      {/* Vehicle Type dropdown if personal vehicle */}
      {transportationMethod === 'car' && (
        <View>
          <Text style={styles.label}>Vehicle Type:</Text>
          <Picker
            selectedValue={vehicleType}
            style={styles.picker}
            onValueChange={(itemValue) => setVehicleType(itemValue)}
          >
            <Picker.Item label="Sedan" value="sedan" />
            <Picker.Item label="SUV" value="suv" />
            <Picker.Item label="Truck" value="truck" />
          </Picker>
        </View>
      )}

      {/* Other Transportation Feedback input */}
      {transportationMethod === 'other' && (
        <TextInput
          style={styles.input}
          placeholder="Other transportation feedback"
          onChangeText={(text) => setOtherTransportationFeedback(text)}
          value={otherTransportationFeedback}
        />
      )}

      {/* Home Details Selection */}
      <Text style={styles.label}>Number of people living in your home:</Text>
      <TextInput
        style={styles.input}
        placeholder="Number of people"
        onChangeText={(text) => setNumPeopleInHome(text)}
        value={numPeopleInHome}
        keyboardType="number-pad"
      />

      {/* Heating Source dropdown */}
      <Text style={styles.label}>Heating Source:</Text>
    <Picker
        selectedValue={heatingSource}
        style={styles.picker}
        onValueChange={(itemValue) => setHeatingSource(itemValue)}>
        <Picker.Item label="Electric" value="electric" />
        <Picker.Item label="Natural Gas" value="natural_gas" />
        <Picker.Item label="Oil" value="oil" />
        <Picker.Item label="Other" value="other" />
    </Picker>

      {/* Power Details input field */}
      <TextInput
        style={styles.input}
        placeholder="Power details (e.g., solar panels)"
        onChangeText={(text) => setPowerDetails(text)}
        value={powerDetails}
      />

      {/* Profile creation button */}
      <TouchableOpacity
        style={styles.createProfileButton}
        onPress={handleProfileCreation}
      >
        <Text style={styles.buttonText}>Create Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginBottom: 5,
  },
  picker: {
    width: '100%',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  createProfileButton: {
    backgroundColor: '#3CB371',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default Profile;