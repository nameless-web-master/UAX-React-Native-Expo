import React, { useState } from "react";

import { Template } from "../../../../../components/layout/Template";
import { Image, ScrollView, Text, View } from "react-native";

import { Header } from "../../../../../components/layout/header";
import { Nav } from "../../../../../components/layout/nav";
import { LinearMainBox } from "../../../../../components/layout/linearMainBox";
import { Select } from "./select";

import QRCode from "react-native-qrcode-svg";
import QR from '../../../../../assets/qr.png';
import { WelcomeTxt } from "../../../../../components/layout/WelcomeTxt";
import { GlobalStyles } from "../../../../../components/styles";

import Feather from '@expo/vector-icons/Feather';
import { MainBtn } from "../../../../../components/layout/mainBtn";

export const Receive = ({ navigation }) => {
    const [state, setState] = useState('network');
    return (
        <Template style={{
            padding: 0,
            paddingVertical: 0,
        }}>
            <View style={{
                paddingHorizontal: 16
            }}>
                <Header content={'Receive'} right={true} navigation={navigation} />
            </View>
            <ScrollView>
                <View style={{ padding: 16 }}>
                </View>
                <LinearMainBox
                    style={{
                        paddingVertical: 28,
                        paddingHorizontal: 18,
                        paddingBottom: 46,
                        borderRadius: 16,
                        marginBottom: 14
                    }}
                >
                    <Select state={state} setState={setState} />
                    <LinearMainBox
                        style={{
                            paddingVertical: 36,
                            paddingHorizontal: 16,
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderRadius: 16
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: '#fff',
                                padding: 4
                            }}
                        >
                            <QRCode
                                size={196}
                                value="98A5316843664398B24BEC84FD8F990A989DF199"
                            />
                        </View>
                        <View style={{
                            ...GlobalStyles.flexBetween,
                            paddingVertical: 10,
                            paddingHorizontal: 16,
                            borderBottomWidth: 1,
                            borderBottomColor: '#383A46',
                            width: '100%',
                            marginTop: 24
                        }}>
                            <WelcomeTxt
                                txt={'98A5316843664398B24BEC84FD8F990A989DF199'}
                                style={{
                                    maxWidth: '70%',
                                    fontSize: 14,
                                    lineHeight: 20
                                }}
                            />
                            <Feather name="copy" size={24} color="white" />
                        </View>
                        <View style={{ marginTop: 24 }}>
                            <MainBtn
                                content={{ txt: 'Share', icon: 'ios-share' }}
                                other={2}
                                style={{
                                    borderRadius: 12,
                                    paddingVertical: 12,
                                    paddingHorizontal: 24
                                }}
                            />
                        </View>
                    </LinearMainBox>
                </LinearMainBox>
            </ScrollView>
            <Nav place={'Dashboard'} navigation={navigation} />
        </Template>
    )
}