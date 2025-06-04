import React from "react";
import { Text, TouchableOpacity } from "react-native";

export const Link = ({ navigation, text, path, style }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(path)}>
            <Text
                style={{
                    color: '#D60BF7',
                    fontWeight: '400',
                    ...style
                }}
            >{text}</Text>
        </TouchableOpacity>
    )
}