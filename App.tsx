import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import HomeScreen from "./components/HomeScreen";
import { OPENSANS_REGULAR } from "./utils/const";
import { RootStackParamList } from './types';
import LoginScreen from "./components/LoginScreen";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
    const [loaded, error] = useFonts({
        [OPENSANS_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={LoginScreen} />
                    {/*<Stack.Screen name="Home" component={HomeScreen} />*/}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default App;
