import React from 'react';

import { View } from 'react-native';

import { Template } from '../../../components/layout/Template';
import { IconBtn } from '../../../components/common/IconBack';
import { WelcomeWord } from '../../../components/layout/welcomeWord';
import { WelcomeTxt } from '../../../components/layout/WelcomeTxt';
import { WelcomeBtn } from '../../../components/layout/WelcomeBtn';
import { NrInput } from '../../../components/layout/Nrinput';
import { GlobalStyles } from '../../../components/styles';

export const ForgotAuth = ({ navigation }) => {
    const children = (
        <>
            <IconBtn navigation={navigation} path={'Login'} icon={"keyboard-arrow-left"} />
            <WelcomeWord
                first={'Forgot'}
                second={'Password?'}
                style={{
                    marginBottom: 12
                }}
            />
            <WelcomeTxt
                txt={'We sent a one-time code to your registered email  address. Please enter it to reset your new password'}
            />
            <View style={{ ...GlobalStyles.flex, marginTop: 32, gap: 6 }}>
                <NrInput />
                <NrInput />
                <NrInput />
                <NrInput />
            </View>
            <WelcomeBtn
                content={'Continue'}
                action={'LoginAuth'}
                navigation={navigation}
            />
        </>
    );

    return (
        <Template children={children} />
    )
};