import React from 'react';
import { StyleSheet } from 'react-native';

import { Template } from '../../components/layout/Template';
import { IconBtn } from '../../components/common/IconBtn';
import { WelcomeWord } from '../../components/layout/welcomeWord';
import { Input } from '../../components/common/Input';
import { WelcomeTxt } from '../../components/layout/WelcomeTxt';
import { WelcomeBtn } from '../../components/layout/WelcomeBtn';

export const Forgot = ({ navigation }) => {
    return (
        <Template>
            <IconBtn navigation={navigation} path="Login" icon={"keyboard-arrow-left"} />
            <WelcomeWord first="Forgot" second="Password?" />

            <Input placeholder="Enter email" icons={{ front: 'email' }} type="text" />

            <WelcomeTxt
                txt="We will send you a message to set or reset your new password"
                require={true}
            />

            <WelcomeBtn
                content="Send Code"
                navigation={navigation}
                action={'ForgotAuth'}
            />
        </Template>
    );
};

const styles = StyleSheet.create({
    txt: {
        color: '#fff',
        fontSize: 12,
    },
});