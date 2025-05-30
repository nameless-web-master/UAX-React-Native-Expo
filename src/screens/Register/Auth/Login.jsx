import React from 'react';

import { View } from 'react-native';

import { Template } from '../../../components/common/Template';
import { BackBtn } from '../../../components/common/Back';
import { WelcomeWord } from '../../../components/common/welcomeWord';
import { WelcomeTxt } from '../../../components/common/WelcomeTxt';
import { WelcomeBtn } from '../../../components/common/WelcomeBtn';
import { NrInput } from '../../../components/common/Nrinput';
import { GlobalStyles } from '../../../components/styles';

export const LoginAuth = ({ navigation }) => {
    const children = (
        <>
            <BackBtn navigation={navigation} path={'Login'} />
            <WelcomeWord
                first={'Login'}
                second={'Authentication'}
                style={{
                    marginBottom: 12
                }}
            />
            <WelcomeTxt
                txt={'We will send you a message to set or reset your new passwordWe sent a one-time code to your registered email  address. Please enter it to verify your identity'}
            />
            <View style={{ ...GlobalStyles.flex, marginTop: 32, gap: 6 }}>
                <NrInput />
                <NrInput />
                <NrInput />
                <NrInput />
            </View>
            <WelcomeBtn
                content={'Continue'}
                action={'Dashboard'}
                navigation={navigation}
            />
        </>
    );

    return (
        <Template children={children} />
    )
};