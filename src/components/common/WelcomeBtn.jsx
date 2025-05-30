import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { GlobalStyles } from "../styles";

export const WelcomeBtn = ({ content, navigation, action }) => {
    return (
        <TouchableOpacity
            style={{
                ...GlobalStyles.flexCenter,
                ...styles.welcomeBtn
            }}
            onPress={
                typeof action === 'string' ?
                    () => navigation.navigate(action) :
                    action
            }
        >
            <Text style={styles.welcomeBtnTxt}>{content}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    welcomeBtn: {
        width: "100%",
        paddingVertical: 20,
        backgroundColor: '#C006DE',
        marginTop: 38,
        borderRadius: 10
    },
    welcomeBtnTxt: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700'
    }
})