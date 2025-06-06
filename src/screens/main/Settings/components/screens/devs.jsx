import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { GlobalStyles } from "../../../../../components/styles";

import { NoData } from '../../../../../components/common/noData';
import { Header } from "../../../../../components/layout/header";
import { Template } from "../../../../../components/layout/Template";
import { LinearMainBox } from "../../../../../components/layout/linearMainBox";
import { MainBtn } from "../../../../../components/layout/mainBtn";
import { WelcomeTxt } from "../../../../../components/layout/WelcomeTxt";
import { Nav } from "../../../../../components/layout/nav";

const datas = [
    'Client Id', 'dAPP Name', 'Redirect URL', 'Status'
]

export const Developer = ({ navigation }) => {
    return (
        <Template style={{
            padding: 16,
            paddingVertical: 0
        }}>
            <Header
                content={'Developer Settings'}
                navigation={navigation}
                path="Settings"
                right={true}
            />
            <ScrollView>
                <LinearMainBox
                    style={{
                        paddingVertical: 22,
                        paddingHorizontal: 16,
                        borderRadius: 8,
                        marginTop: 8
                    }}
                >
                    <View style={{ paddingHorizontal: 8 }}>
                        <Text style={{
                            ...GlobalStyles.minTitle,
                            textAlign: 'left',
                            fontWeight: 500,
                            paddingVertical: 10
                        }}>API Key</Text>
                        <WelcomeTxt
                            style={{
                                fontSize: 13,
                                color: '#FFFFFFCC'
                            }}
                            txt={'Use UAX API to streamline and automate some actions.'}
                        />
                        <MainBtn content={{ txt: 'Generate' }}
                            style={{
                                marginTop: 14,
                                paddingHorizontal: 16,
                                paddingVertical: 8,
                                alignSelf: 'flex-start'
                            }}
                        />
                    </View>
                </LinearMainBox>
                <LinearMainBox
                    style={{
                        paddingVertical: 22,
                        paddingHorizontal: 16,
                        borderRadius: 8,
                        marginTop: 8
                    }}
                >
                    <View style={{ ...GlobalStyles.flexBetween }}>
                        <Text style={{
                            ...GlobalStyles.minTitle,
                            textAlign: 'left',
                            fontWeight: 500,
                            paddingVertical: 10
                        }}>OAuth</Text>
                        <MainBtn
                            content={{ txt: 'Request' }}
                            style={{
                                paddingHorizontal: 16,
                                paddingVertical: 8,
                                backgroundColor: '#C006DE',
                                borderColor: 'transparent',
                            }}
                        />
                    </View>
                    <WelcomeTxt
                        style={{
                            fontSize: 13,
                            color: '#FFFFFFCC'
                        }}
                        txt={'UAX OAuth'}
                    />
                    <View style={{
                        ...GlobalStyles.flexBetween,
                        padding: 8
                    }}>
                        {
                            datas.map((_itm, _idx) => (
                                <Text
                                    style={{
                                        ...GlobalStyles.minTitle,
                                        fontSize: 12
                                    }}
                                    key={_idx}
                                >
                                    {_itm}
                                </Text>
                            ))
                        }
                    </View>
                    <View
                        style={{
                            width: '100%',
                            height: 1,
                            backgroundColor: '#FFFFFF24',
                            marginVertical: 8
                        }}
                    />
                    <View
                        style={{
                            ...GlobalStyles.flexCenter,
                            paddingVertical: 28
                        }}
                    >
                        <NoData type={'Data'} />
                    </View>
                </LinearMainBox>
            </ScrollView>
            <Nav place={'Settings'} navigation={navigation} />
        </Template>
    )
}