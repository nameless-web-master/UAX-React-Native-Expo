import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { IconBtn } from '../../../../../components/common/IconBack'
import { filter } from "./filter";
import { GlobalStyles } from "../../../../../components/styles";
import { MainBtn } from "../../../../../components/layout/mainBtn";

export const Complete = ({ state, setState }) => {
    const data = filter(state);
    return (
        <ScrollView>
            <View style={{paddingTop: 16}}>
                <IconBtn
                    icon={'keyboard-arrow-left'}
                    path={() => setState(null)}
                />
            </View>
            <View style={{ padding: 34 }}>
                <LinearGradient
                    colors={['#DE20FD', '#8B1B9D']}
                    style={{
                        ...GlobalStyles.flexCenter,
                        flexDirection: 'row !important',
                        borderRadius: 14,
                        padding: 24
                    }}
                >
                    <View style={{
                        marginTop: 24,
                        marginBottom: 4
                    }}>
                        <Image
                            source={data.image}
                            alt="no"
                            style={{
                                width: 81,
                                height: 81,
                                borderRadius: 14
                            }}
                        />
                    </View>
                    <Text style={{
                        ...GlobalStyles.minTitle,
                        fontSize: 14,
                        marginVertical: 12
                    }}>Congrats!</Text>
                    <Text style={{
                        ...GlobalStyles.minTitle,
                        fontSize: 12
                    }}>The highest bid is yours</Text>
                    <View
                        style={{ marginVertical: 32 }}
                    >
                        <View style={{
                            ...GlobalStyles.flexBetween,
                            width: '100%',
                            marginBottom: 12
                        }}>
                            <Text style={{
                                ...GlobalStyles.minTitle,
                                fontSize: 12,
                            }}>
                                NFT Name
                            </Text>
                            <Text style={{
                                ...GlobalStyles.minTitle,
                                fontSize: 12,
                                fontWeight: '700'
                            }}>
                                {`${data.art} Art`}
                            </Text>
                        </View>
                        <View style={{
                            ...GlobalStyles.flexBetween,
                            width: '100%'
                        }}>
                            <Text style={{
                                ...GlobalStyles.minTitle,
                                fontSize: 12,
                            }}>
                                Due Date
                            </Text>
                            <Text style={{
                                ...GlobalStyles.minTitle,
                                fontSize: 12,
                                fontWeight: '700'
                            }}>
                                August 21. 2024
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{
                            ...GlobalStyles.minTitle,
                            fontSize: 12,
                            // paddingTop: 24
                        }}>
                            Total Bid
                        </Text>
                        <Text style={{
                            fontStyle: 14,
                            fontWeight: 500,
                            color: '#0DF469',
                            textAlign: 'center'
                        }}>
                            10 UAXN
                            <Text style={{ color: '#CECECE' }}>
                                ($7.70)
                            </Text>
                        </Text>
                    </View>
                </LinearGradient>
            </View>
            <View style={{
                marginTop: 28,
                padding: 36
            }}>
                <MainBtn content={{
                    txt: 'Continue',
                }}
                    style={{
                        backgroundColor: '#DF16FF',
                        borderColor: 'transparent'
                    }}
                    action={() => setState(null)} />
            </View>
        </ScrollView>
    )
} 
