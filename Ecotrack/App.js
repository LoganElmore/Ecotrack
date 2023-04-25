import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import the required screen components
import OnboardingScreen from './screens/OnboardingScreen'; // Import the Onboarding component
import SignUpLoginScreen from './screens/SignUpLoginScreen'; // Import the SignUpLoginScreen component
import SignUpScreen from './screens/SignUpScreen'; // Import the SignUpScreen component
import HomeScreen from './screens/HomeScreen'; // Import the HomeScreen component
import Profile from './screens/Profile'; // Import the Profile component
import ProfileHome from './screens/ProfileHome'; // Import the Profile Home component
import AddActivity from './screens/AddActivity'; // Import the Add Activity component

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpLoginScreen"
          component={SignUpLoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileHome"
          component={ProfileHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddActivity"
          component={AddActivity}
          options={{ headerShown: false }}
        />
        
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
