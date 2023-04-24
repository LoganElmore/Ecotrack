import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// OnboardingScreen component import
import OnboardingScreen from './screens/OnboardingScreen';
import SignUpLoginScreen from './screens/SignUpLoginScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Onboarding">
                <Stack.Screen
                    name="Onboarding"
                    component={OnboardingScreen}
                    options={{headerShown: false}}
                    />
        {/*Adding more screens as I go*/}
        </Stack.Navigator>
        </NavigationContainer>
    );
};