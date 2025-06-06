import React, { useState } from 'react';

import { Template } from '../../../../../components/layout/Template';
import { View, Image, Text, ScrollView, TextInput } from 'react-native';

import { Header } from '../../../../../components/layout/header';
import { Nav } from '../../../../../components/layout/nav';

import Icon from '../../../../../assets/bitcoin.png';
import { WelcomeTxt } from '../../../../../components/layout/WelcomeTxt';
import { GlobalStyles } from '../../../../../components/styles';
import { LinearMainBox } from '../../../../../components/layout/linearMainBox';
import { Select } from './select';
import { Link } from '../../../../../components/layout/link';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { MainBtn } from '../../../../../components/layout/mainBtn';

export const Send = ({ navigation }) => {
    const [state, setState] = useState({
        value: '100',
        address: '',
        type: 'uaxn'
    });

    const handleChange = (val) => {
        // Allow empty, numbers, and properly formatted decimals
        if (val === "" || /^\d*\.?\d{0,2}$/.test(val)) {
            setState(prev => ({ ...prev, value: val }));
        }
    };

    const filter = (Nr) => {
        if (!Nr) return "0.00"; // Handle empty/undefined

        const str = Nr.toString();
        if (!str.includes('.')) {
            return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ".00";
        }

        const [integer, decimal] = str.split('.');
        return integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '.' + (decimal || '00').padEnd(2, '0');
    }

    const children = (
        <>
            <Header
                content={'Send'}
                navigation={navigation}
            />
            <ScrollView style={{ margin: - 16 }}>
                <View style={{ padding: 16 }}>
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={Icon}
                            alt='icon'
                            style={{
                                width: 48,
                                height: 48
                            }}
                        />
                        <WelcomeTxt
                            txt={'Enter Amount'}
                            style={{
                                fontSize: 16,
                                marginTop: 16
                            }}
                        />
                        <TextInput
                            value={state.value}
                            onChangeText={handleChange}
                            keyboardType='numeric'
                            focusable
                            style={{
                                ...GlobalStyles.minTitle,
                                fontSize: 48,
                                width: 180,
                                marginTop: -12
                            }}
                        />
                        <WelcomeTxt
                            txt={`$ ${filter((224.25 * Number(state.value)).toFixed(2))}`}
                            style={{
                                fontSize: 16,
                                marginTop: -6
                            }}
                        />
                    </View>
                </View>
                <LinearMainBox
                    children={
                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <WelcomeTxt
                                txt={'Remaining Balance'}
                                style={{
                                    marginVertical: 4,
                                    fontSize: 14
                                }}
                            />
                            <WelcomeTxt
                                txt={'$0,00 / 0 BTC'}
                                style={{
                                    marginVertical: 4,
                                    fontSize: 14
                                }}
                            />
                            <Select state={state} setState={setState} />
                            <View style={{
                                width: '100%',
                                paddingHorizontal: 32
                            }}>
                                <Link
                                    navigation={navigation}
                                    path={'Send'}
                                    text={'Enter Address'}
                                    style={{
                                        marginBottom: 6
                                    }}
                                />
                                <View style={{
                                    ...GlobalStyles.flexBetween
                                }}>
                                    <View>
                                        <Text style={{
                                            ...GlobalStyles.minTitle,
                                            fontSize: 12,
                                            maxWidth: 180,
                                            lineHeight: 20,
                                            textAlign: 'left'
                                        }}>98A5316843664398B24BEC84
                                            FD8F990A989DF199</Text>
                                    </View>
                                    <MaterialCommunityIcons name="line-scan" size={32} color="white" />
                                </View>
                            </View>
                            <View style={{
                                width: '100%',
                                marginVertical: 52,
                                paddingHorizontal: 32
                            }}>
                                <MainBtn
                                    content={{ txt: 'Send' }}
                                    style={{
                                        backgroundColor: '#DA23F8',
                                        borderColor: 'transparent',
                                        borderRadius: 12
                                    }}
                                    navigation={navigation}
                                    action={'Transfer'}
                                />
                            </View>
                        </View>
                    }
                    style={{
                        paddingVertical: 24,
                        borderRadius: 16,
                    }}
                />
            </ScrollView>
            <Nav place={'Dashboard'} navigation={navigation} />
        </>
    );

    return (
        <Template
            children={children}
            style={{
                padding: 16,
                paddingVertical: 0
            }}
        />
    )
};