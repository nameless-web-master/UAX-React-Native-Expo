import React, { useState } from "react";

import { Header } from "../../../components/layout/header";
import { UserInfo } from "../../../components/layout/userInfo";
import { Nav } from "../../../components/layout/nav";
import { Image, ScrollView, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Template } from "../../../components/layout/Template";
import { GlobalStyles } from "../../../components/styles";
import { WelcomeTxt } from "../../../components/layout/WelcomeTxt";

// import images 
import uaxn from '../../../assets/balance/uax.png';
import usdt from '../../../assets/balance/usdt.png';
import { Select } from "./components/select";
import { InputView } from "./components/inputView";
import { IconBtn } from "../../../components/common/IconBtn";
import { LinearMainBox } from "../../../components/layout/linearMainBox";
import { MainBtn } from "../../../components/layout/mainBtn";

const images = {
    uaxn, usdt
}

export const Swap = ({ navigation }) => {

    const [state, setState] = useState('uaxn');
    const [views, setViews] = useState({
        first: '',
        second: ''
    });

    const children = (
        <>
            <ScrollView>
                <Header content={'Swap'} navigation={navigation} />
                <UserInfo navigation={navigation} />
                <LinearMainBox
                    style={{
                        borderRadius: 16,
                        paddingVertical: 24,
                        paddingHorizontal: 16
                    }}
                    children={
                        <View>
                            <View>
                                <View style={{
                                    ...GlobalStyles.flexBetween
                                }}>
                                    <Text
                                        style={{
                                            ...GlobalStyles.minTitle,
                                            fontSize: 16,
                                            fontWeight: '400'
                                        }}
                                    >From</Text>
                                    <View
                                        style={{
                                            ...GlobalStyles.flexCenter
                                        }}
                                    >
                                        <WelcomeTxt
                                            txt={'Balance: 0'}
                                            style={{
                                                fontSize: 13,
                                                fontWeight: '400',
                                                marginRight: 4
                                            }}
                                        />
                                        <Text style={{
                                            ...GlobalStyles.GreenTxt,
                                            fontSize: 13,
                                            fontWeight: '400'
                                        }}>MAX</Text>
                                    </View>
                                </View>
                                <View>
                                    <View
                                        style={{
                                            ...GlobalStyles.flexBetween
                                        }}
                                    >
                                        <View
                                            style={{
                                                ...GlobalStyles.flexBetween
                                            }}>
                                            <Image
                                                source={images[state]}
                                                alt={state}
                                            />
                                            <Select
                                                state={state} setState={setState} />
                                        </View>
                                        <View>
                                            <InputView
                                                view={views}
                                                setView={setViews}
                                                state={state}
                                                type={'first'}
                                            />
                                        </View>
                                    </View>
                                    <View style={{
                                        ...GlobalStyles.flexBetween,
                                        marginTop: 4
                                    }}>
                                        <WelcomeTxt
                                            txt={'UAX Coin'}
                                            style={{
                                                fontSize: 14
                                            }}
                                        />
                                        <WelcomeTxt
                                            txt={`~ ${(16.8823 * Number(views.first)).toFixed(2)}`}
                                            style={{
                                                fontSize: 14
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                ...GlobalStyles.flexCenter,
                                width: '100%',
                                marginVertical: 28
                            }}>
                                <IconBtn
                                    icon={'swap-vert'}
                                    size={32}
                                    style={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: 16,
                                        zIndex: 1
                                    }}
                                />
                                <View
                                    style={{
                                        width: '100%',
                                        height: 0.5,
                                        backgroundColor: '#383A46',
                                        position: 'absolute'
                                    }}
                                />
                            </View>
                            <View>
                                <View style={{
                                    ...GlobalStyles.flexBetween
                                }}>
                                    <Text
                                        style={{
                                            ...GlobalStyles.minTitle,
                                            fontSize: 16,
                                            fontWeight: '400'
                                        }}
                                    >To</Text>
                                    <View
                                        style={{
                                            ...GlobalStyles.flexCenter
                                        }}
                                    >
                                        <WelcomeTxt
                                            txt={'Balance: 0'}
                                            style={{
                                                fontSize: 13,
                                                fontWeight: '400',
                                                marginRight: 4
                                            }}
                                        />
                                        <Text style={{
                                            ...GlobalStyles.GreenTxt,
                                            fontSize: 13,
                                            fontWeight: '400'
                                        }}>MAX</Text>
                                    </View>
                                </View>
                                <View>
                                    <View
                                        style={{
                                            ...GlobalStyles.flexBetween
                                        }}
                                    >
                                        <View
                                            style={{
                                                ...GlobalStyles.flexBetween
                                            }}>
                                            <Image
                                                source={images[(state === 'uaxn' ? 'usdt' : 'uaxn')]}
                                                alt={(state === 'uaxn' ? 'usdt' : 'uaxn')}
                                            />
                                            <Select
                                                state={(state === 'uaxn' ? 'usdt' : 'uaxn')} setState={setState} />
                                        </View>
                                        <View>
                                            <InputView
                                                view={views}
                                                setView={setViews}
                                                state={(state === 'uaxn' ? 'usdt' : 'uaxn')}
                                                type={'second'}
                                            />
                                        </View>
                                    </View>
                                    <View style={{
                                        ...GlobalStyles.flexBetween,
                                        marginTop: 4
                                    }}>
                                        <WelcomeTxt
                                            txt={'Tehter'}
                                            style={{
                                                fontSize: 14
                                            }}
                                        />
                                        <WelcomeTxt
                                            txt={`~ ${(16.8823 * Number(views.first)).toFixed(2)}`}
                                            style={{
                                                fontSize: 14
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    }
                />
                <View style={{
                    ...GlobalStyles.flex,
                    marginVertical: 12
                }}>
                    <Text
                        style={{
                            ...GlobalStyles.minTitle,
                            marginRight: 6,
                            textAlign: 'left',
                            fontSize: 13,
                        }}
                    >1 UAXN = 0.6752365 USDT</Text>
                    <WelcomeTxt txt={'($24,653.80)'} style={{ fontSize: 13 }} />
                </View>
                <MainBtn content={{ txt: 'Swap' }} style={{
                    marginVertical: 52,
                    backgroundColor: '#DA23F8',
                    borderColor: 'transparent',
                }} />
            </ScrollView>
            <Nav navigation={navigation} place={'Swap'} />
        </>
    )
    return (
        <Template children={children} style={{
            padding: 16,
            paddingVertical: 0
        }} />
    )
}