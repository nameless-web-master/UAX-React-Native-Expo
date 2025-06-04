import React from "react";

import { TouchableOpacity, Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { GlobalStyles } from "../styles";
export const Button = ({ content, action, navigation, style, other }) => {

    return (
        <TouchableOpacity
            style={{
                ...GlobalStyles.flexCenter,
                paddingVertical: 10,
                paddingHorizontal: 14,
                borderRadius: 5,
                ...style
            }}
            onPress={
                typeof action === 'string' ?
                    () => navigation.navigate(action) :
                    action
            }
        >
            {
                content.icon ?
                    (other ?
                        (
                            other === 1 ?
                                <MaterialCommunityIcons
                                    name={content.icon}
                                    size={14}
                                    color="white"
                                    style={{ marginRight: 4 }}
                                /> :
                                <MaterialIcons
                                    name={content.icon}
                                    size={14}
                                    color="white"
                                    style={{ marginRight: 8 }}
                                />
                        ) :
                        <AntDesign
                            name={content.icon}
                            size={14}
                            color="white"
                            style={{ marginRight: 4 }}
                        />
                    ) :
                    <></>
            }
            <Text style={{
                ...GlobalStyles.minTitle,
                fontSize: 13
            }}>{content.txt}</Text>
        </TouchableOpacity>
    );
};


