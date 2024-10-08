import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoanRegistrationScreen from "../screens/LoanRegistrationScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import FlashMessage from "react-native-flash-message";
import TemplateScreen from "../screens/TemplateScreen";
import FailureScreen from "../screens/FailureScreen";
import SuccessScreen from "../screens/SuccessScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Template">
                <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
                <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
                <Stack.Screen name="LoanRegistration" component={LoanRegistrationScreen} />
                <Stack.Screen name="Template" component={TemplateScreen} />
                <Stack.Screen name="Success" component={SuccessScreen} />
                <Stack.Screen name="Failure" component={FailureScreen} />
            </Stack.Navigator>
            <FlashMessage position="top" />
        </NavigationContainer>
    );
};

export default AppNavigator;