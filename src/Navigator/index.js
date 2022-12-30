import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import HomeScreen from '../screens/HomeScreen';
import { AuthContext } from '../contexts/AuthContext';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function Navigator() {
    const { userToken, isLoading } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isLoading ? <Stack.Screen name="Splash" component={SplashScreen} /> :
                    userToken ?
                        (<>
                            <Stack.Screen name="Home" component={HomeScreen} />
                        </>):
                        (<>
                            <Stack.Screen name="Login" component={Login} />
                            <Stack.Screen name="Signup" component={Signup} />
                        </>)}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

