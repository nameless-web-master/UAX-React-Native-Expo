import React from "react";
import { StyleSheet, Text } from "react-native";

export const WelcomeTxt = ({ txt, style, require }) => {
    return (
        <Text style={{ ...styles.welcomeText, ...style }} >
            {
                require && <Text style={{ color: '#FF4B26' }}>* </Text>
            }
            {txt}</Text>
    )
};

const styles = StyleSheet.create({
    welcomeText: {
        fontWeight: 300,
        color: '#828080',
        lineHeight: 16,
        fontSize: 12,
    }
})