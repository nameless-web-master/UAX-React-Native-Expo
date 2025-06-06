import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';


//  Home && User

import { Home } from '../screens/Home';
import { Loading } from '../screens/Register/loading';

import { Login } from '../screens/Register/Login';
import { Signup } from '../screens/Register/Signup';
import { Forgot } from '../screens/Register/Forgot';
import { LoginAuth } from '../screens/Register/Auth/Login';
import { ForgotAuth } from '../screens/Register/Auth/ForgotAuth';

// Main

import { Dashboard } from '../screens/main/Dashboard';
import { NFTs } from '../screens/main/NFTs';
import { Swap } from '../screens/main/Swap';
import { Settings } from '../screens/main/Settings';
import { Reward } from '../screens/main/Reward';

import { GetBand } from '../screens/main/Swap/components/getBand';

// Send & Receive

import { Send } from '../screens/main/Dashboard/components/send';
import { Receive } from '../screens/main/Dashboard/components/receive';
import { Transfer } from '../screens/main/Dashboard/components/send/Transfer';

// Settings

import { BasicInfor } from '../screens/main/Settings/components/screens/BasicInfor';
import { Wallet } from '../screens/main/Settings/components/screens/wallet';
import { Developer } from '../screens/main/Settings/components/screens/devs';
import { FaceID } from '../screens/main/Settings/components/screens/faceID';
import { TouchID } from '../screens/main/Settings/components/screens/touchID';
import { Referral } from '../screens/main/Settings/components/screens/referral';

import { Invite } from '../screens/main/Settings/components/screens/invite';
import { Help } from '../screens/main/Settings/components/screens/help';
import { AboutUs } from '../screens/main/Settings/components/screens/aboutUs';

const Stack = createNativeStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>

                {/* Home & User */}

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Loading" component={Loading} />

                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Forgot" component={Forgot} />
                <Stack.Screen name="LoginAuth" component={LoginAuth} />
                <Stack.Screen name="ForgotAuth" component={ForgotAuth} />

                {/* Main */}
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="NFTs" component={NFTs} />
                <Stack.Screen name="Swap" component={Swap} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Reward" component={Reward} />
                <Stack.Screen name="GetBand" component={GetBand} />

                {/* Send & Receive  */}
                <Stack.Screen name="Send" component={Send} />
                <Stack.Screen name="Receive" component={Receive} />
                <Stack.Screen name="Transfer" component={Transfer} />

                {/* settings */}
                <Stack.Screen name="BasicInfor" component={BasicInfor} />
                <Stack.Screen name="Wallet" component={Wallet} />
                <Stack.Screen name="Developer" component={Developer} />
                <Stack.Screen name="FaceID" component={FaceID} />
                <Stack.Screen name="TouchID" component={TouchID} />
                <Stack.Screen name="Invite" component={Invite} />
                <Stack.Screen name="Help" component={Help} />
                <Stack.Screen name="AboutUs" component={AboutUs} />
                <Stack.Screen name="Referral" component={Referral} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}