import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Template } from '../../components/layout/Template';
import { BackBtn } from '../../components/layout/Back';
import { WelcomeWord } from '../../components/layout/welcomeWord';
import { Input } from '../../components/layout/Input';
import { Link } from '../../components/layout/link';
import { WelcomeBtn } from '../../components/layout/WelcomeBtn';
import { GlobalStyles } from '../../components/styles';

export const Login = ({ navigation }) => {
    return (
        <Template>
            <BackBtn navigation={navigation} path="Home" />
            <WelcomeWord first="Welcome" second="Back!" />

            <Input placeholder="Enter email" icons={{ front: 'email' }} type="text" />
            <Input placeholder="Enter password" icons={{ front: 'lock' }} type="password" />

            <Link
                navigation={navigation}
                path="Forgot"
                text="Forgot Password?"
                style={styles.forgotLink}
            />

            <WelcomeBtn content="login" action="LoginAuth" navigation={navigation} />

            <View style={[GlobalStyles.flexCenter, styles.signupContainer]}>
                <Text style={styles.signupText}>Don’t have an account?</Text>
                <Link
                    navigation={navigation}
                    path="Signup"
                    text=" Signup"
                    style={styles.signupLink}
                />
            </View>
        </Template>
    );
};

const styles = StyleSheet.create({
    forgotLink: {
        fontSize: 16,
        marginVertical: 6,
        alignSelf: 'flex-end',
    },
    signupContainer: {
        marginTop: 16,
    },
    signupText: {
        color: '#fff',
        fontSize: 12,
    },
    signupLink: {
        fontSize: 12,
        lineHeight: 16,
    },
});
