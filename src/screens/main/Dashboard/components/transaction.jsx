import React from "react";

import { View, Text, Image } from 'react-native';
import { GlobalStyles } from "../../../../components/styles";
import { LinearGradient } from "expo-linear-gradient";

import Icon from '../../../../assets/icon.png';

import { WelcomeTxt } from "../../../../components/layout/WelcomeTxt";
import { Linear } from "../../../../components/common/linear";

export const Transaction = ({ navigation }) => {
    return (
        <Linear
            children={<View>
                <View>
                    <View style={{ ...GlobalStyles.flexBetween }}>
                        <View style={{ ...GlobalStyles.flexCenter }}>
                            <Image
                                source={Icon}
                                alt="Icon"
                                style={{ marginRight: 10 }}
                            />
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: '#fff'
                                }}
                            >Bought UAX</Text>
                        </View>
                        <View
                            style={{ flexDirection: 'column', alignItems: 'flex-end' }}
                        >
                            <Text
                                style={{
                                    ...GlobalStyles.GreenTxt,
                                    fontSize: 14,
                                    fontWeight: '400'
                                }}
                            >
                                +100 UAXN
                            </Text>
                            <WelcomeTxt txt={'01 May 2025, 3.30 PM'} />
                        </View>
                    </View>
                </View>
            </View>}
            colors={['#2C2430', '#221826']}
            style={{
                marginVertical: 4,
                padding: 17,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#FFFFFF12'
            }}
        />
    )
}