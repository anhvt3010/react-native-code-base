import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoanRegistrationScreen from "../screens/LoanRegistrationScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
                <Stack.Screen name="LoanRegistration" component={LoanRegistrationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;