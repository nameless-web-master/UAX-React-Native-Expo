import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';


//  Home && User

import { Home } from '../screens/Home';
import { Login } from '../screens/Register/Login';
import { Signup } from '../screens/Register/Signup';
import { Forgot } from '../screens/Register/Forgot';
import { LoginAuth } from '../screens/Register/Auth/Login';
import { ForgotAuth } from '../screens/Register/Auth/ForgotAuth';

// Main

import { Dashboard } from '../screens/main/Dashboard';
import { NFTs } from '../screens/main/NFTs';

const Stack = createNativeStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>

                {/* Home & User */}

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Forgot" component={Forgot} />
                <Stack.Screen name="LoginAuth" component={LoginAuth} />
                <Stack.Screen name="ForgotAuth" component={ForgotAuth} />

                {/* Main */}
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="NFTs" component={NFTs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}