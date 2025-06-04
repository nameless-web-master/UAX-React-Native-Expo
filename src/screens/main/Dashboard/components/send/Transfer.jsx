import React from "react";
import { Linear } from "../../../../../components/common/linear";
import { Text, View, ScrollView } from "react-native";

import Entypo from '@expo/vector-icons/Entypo';
import { GlobalStyles } from "../../../../../components/styles";
import { WelcomeTxt } from "../../../../../components/layout/WelcomeTxt";
import { MainBtn } from "../../../../../components/layout/mainBtn";

export const Transfer = ({ navigation }) => {
    return (
        <Linear
            colors={['#2D2531', '#2218260F']}
            children={
                <ScrollView>
                    <View style={{
                        paddingVertical: 135,
                        paddingHorizontal: 16
                    }}>
                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                ...GlobalStyles.flexCenter,
                                width: 120,
                                height: 120,
                                backgroundColor: '#DF16FF',
                                borderRadius: 60,
                                borderWidth: 20,
                                borderColor: '#DF16FF66'
                            }}>
                                <Entypo name="check" size={56} color="white" />
                            </View>
                            <View style={{ paddingVertical: 32 }}>
                                <Text
                                    style={{
                                        ...GlobalStyles.minTitle,
                                        fontSize: 22
                                    }}>Transfer Success</Text>
                            </View>
                            <View style={{ marginTop: 32 }}>
                                <WelcomeTxt txt={'AMOUNT'} style={{ textAlign: 'center' }} />
                                <Text
                                    style={{
                                        ...GlobalStyles.minTitle,
                                        fontSize: 48,
                                    }}
                                >197.75</Text>
                                <Text
                                    style={{
                                        ...GlobalStyles.minTitle,
                                        fontSize: 16,

                                        marginTop: 24
                                    }}
                                >To John Doe</Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            paddingVertical: 32
                        }}>
                        <MainBtn
                            content={{ txt: 'Go Back' }}
                            style={{
                                backgroundColor: '#DA23F8',
                                borderColor: 'transparent',
                                borderRadius: 12
                            }}
                            navigation={navigation}
                            action={'Send'}
                        />
                    </View>
                </ScrollView>
            }
            style={{
                flex: 1,
                backgroundColor: '#000',
                padding: 16
            }}
        />
    )
};