import React from "react";
import { Image, Text, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { IconBtn } from "../common/IconBack";

import { GlobalStyles } from "../styles";

import Logo from "../../assets/logo.png";
import Light from "../../assets/light.png"

export const Header = ({ content, logo, right, menu, navigation }) => {
    return (
        <View style={{
            ...GlobalStyles.flexBetween,
            marginTop: 22
        }}>
            {
                logo ?
                    <Image
                        source={Logo}
                        alt="Logo"
                        style={{ width: 50, height: 14 }}
                    /> :
                    <IconBtn
                        path={'Home'}
                        navigation={navigation}
                        icon={"keyboard-arrow-left"}
                    />
            }

            <Text
                style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: 'white'
                }}
            >{content}</Text>
            <View style={{ ...GlobalStyles.flexBetween }}>
                {
                    right ?
                        <></> :
                        <View style={{ ...GlobalStyles.flexBetween }}>
                            <Image source={Light} alt="Light" />
                            <Text
                                style={{
                                    color: '#DF16FF',
                                    fontSize: 14,
                                    marginLeft: 4,
                                    marginRight: 12,
                                }}
                            >
                                0.15
                            </Text>
                        </View>
                }
                {
                    menu ?
                        <></> :
                        <MaterialIcons
                            name='menu'
                            size={24}
                            color="#fff"
                        />
                }
            </View>
        </View>
    )
};