import React, { useState } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../styles";

export const Input = ({
    icons: { front } = {},
    placeholder,
    style: { input: textInputStyle, back: containerStyle } = {},
    type,
    value,
    setVaule,
    onChangeText,
}) => {
    // State to manage password visibility, initialized based on type
    const [passwordVisible, setPasswordVisible] = useState(type === 'password');

    // Helper function to render front icon (back icon logic handled separately for password type)
    const renderFrontIcon = (iconName) => {
        if (iconName) {
            return (
                <MaterialIcons
                    name={iconName}
                    size={24}
                    color="#686767"
                />
            );
        }
        return null; // Return null if no iconName is provided
    };

    return (
        <View style={{ ...GlobalStyles.flex, ...styles.inputContainer, ...containerStyle }}>
            {renderFrontIcon(front)}
            <TextInput   
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={{ ...styles.input, ...textInputStyle }}
                secureTextEntry={passwordVisible}
                placeholderTextColor='#686767'
            />
            {type === 'password' ? (
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                    <MaterialIcons
                        name={passwordVisible ? 'visibility-off' : 'visibility'}
                        size={24}
                        color="#686767"
                    />
                </TouchableOpacity>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#262626',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#42424280',
        borderRadius: 10,
        marginVertical: 12
    },
    input: {
        fontSize: 13,
        flex: 1,
        fontWeight: '400',
        color: '#686767',
        marginHorizontal: 8,
    }
});