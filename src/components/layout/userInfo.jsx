import React from "react";
import { View, Image, Text } from "react-native";

import { IconBtn } from "../common/IconBack";
import { GlobalStyles } from "../styles";

import profile from '../../assets/profile.png';

export const UserInfo = ({ navigation }) => {
    return (
        <View
            style={{
                ...GlobalStyles.flexBetween,
                marginTop: 16,
                marginBottom: 26
            }}
        >
            <View style={{ ...GlobalStyles.flexBetween }}>
                <Image source={profile} alt="Profile" style={{ marginRight: 14 }} />
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row !important',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between'
                    }}
                >
                    <Text
                        style={{
                            color: '#DF16FF',
                            fontSize: 14,
                        }}
                    >
                        Wallet Address
                    </Text>
                    <Text
                        style={{
                            color: '#A0A0A0',
                            fontSize: 12,
                            fontWeight: 300,
                        }}
                    >
                        buuTb13Zxp95..E9vz0
                    </Text>
                </View>
            </View>
            <View>
                <IconBtn
                    icon={'notifications'}
                    path={'Dashboard'}
                    navigation={navigation}
                />
            </View>
        </View>
    )
};