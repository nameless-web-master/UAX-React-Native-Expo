import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Template } from '../../components/layout/Template';
import { IconBtn } from '../../components/common/IconBtn';
import { WelcomeWord } from '../../components/layout/welcomeWord';
import { Input } from '../../components/common/Input';
import { Link } from '../../components/layout/link';
import { WelcomeBtn } from '../../components/layout/WelcomeBtn';
import { GlobalStyles } from '../../components/styles';

export const Signup = ({ navigation }) => {
    return (
        <Template>
            <IconBtn navigation={navigation} path="Login" icon={"keyboard-arrow-left"} />
            <WelcomeWord first="Create an" second="account" />

            <Input placeholder="Enter email" icons={{ front: 'email' }
            } type="text" />
            <Input placeholder="Enter password" icons={{ front: 'lock' }} type="password" />
            <Input placeholder="Confirm password" icons={{ front: 'lock' }} type="password" />

            <WelcomeBtn content="Signup" />

            <View style={[GlobalStyles.flexCenter, styles.bottomContainer]}>
                <Text style={styles.txt}> Already have an account ? </Text>
                < Link
                    navigation={navigation}
                    path="Login"
                    text=" Login"
                    style={styles.loginLink}
                />
            </View>
        </Template>
    );
};

const styles = StyleSheet.create({
    txt: {
        color: '#fff',
        fontSize: 12,
    },
    bottomContainer: {
        marginTop: 16,
    },
    loginLink: {
        fontSize: 12,
        lineHeight: 16,
    },
});
