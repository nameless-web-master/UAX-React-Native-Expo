import React from 'react';

import { Template } from '../../../../components/layout/Template';
import { Header } from '../../../../components/layout/header';
import { UserInfo } from '../../../../components/layout/userInfo';
import { Image, ScrollView, Text, View } from 'react-native';

// images
import first from '../../../../assets/bandwidth/1.png';
import second from '../../../../assets/bandwidth/2.png';
import third from '../../../../assets/bandwidth/3.png';
import force from '../../../../assets/bandwidth/4.png';

import excla from '../../../../assets/excla.png';

import { GlobalStyles } from '../../../../components/styles';
import { LinearMainBox } from '../../../../components/layout/linearMainBox';
import { WelcomeTxt } from '../../../../components/layout/WelcomeTxt';
import { Input } from '../../../../components/common/Input';
import { MainBtn } from '../../../../components/layout/mainBtn';
import { Nav } from '../../../../components/layout/nav';


const datas = [
    {
        label: 'Balance',
        icon: first,
        content: '100.00 UAXN',
        color: 'white'
    },
    {
        label: 'Staked/Validators',
        icon: second,
        content: '0/0',
        color: '#F4970D'
    },
    {
        label: 'Generated Bandwidth',
        icon: third,
        content: '0.00',
        color: '#0DF469'
    },
    {
        label: 'Stake Rewards',
        icon: force,
        content: '0.00 UAXN',
        color: '#DF16FF'
    },
]

export const GetBand = ({ navigation }) => {
    return (
        <Template style={{
            padding: 16,
            paddingVertical: 0
        }}>
            <View style={{ marginBottom: 18 }}>
                <Header
                    content={'Get Bandwidth'}
                    navigation={navigation}
                />
            </View>
            <ScrollView>
                <UserInfo navigation={navigation} />
                <View style={{
                    ...GlobalStyles.flexCenter,
                    flexWrap: 'wrap',
                }}>
                    {
                        datas.map((_itm, _idx) => (
                            <View
                                style={{
                                    width: '50%',
                                    padding: 5
                                }}
                                key={_idx}
                            >
                                <LinearMainBox
                                    style={{
                                        paddingVertical: 10,
                                        paddingHorizontal: 20,
                                        borderRadius: 12,
                                    }}
                                >
                                    <View>
                                        <Text
                                            style={{
                                                ...GlobalStyles.minTitle,
                                                fontSize: 13,
                                                lineHeight: 26.5,
                                                textAlign: 'left'
                                            }}
                                        >{_itm.label}</Text>
                                    </View>
                                    <View style={{ ...GlobalStyles.flex }}>
                                        <Image
                                            source={_itm.icon}
                                            alt='no'
                                            style={{
                                                width: 16,
                                                height: 16,
                                                marginRight: 6
                                            }}
                                        />
                                        <Text
                                            style={{
                                                ...GlobalStyles.minTitle,
                                                fontSize: 14,
                                                lineHeight: 25.5,
                                                color: _itm.color
                                            }}
                                        >{_itm.content}</Text>
                                    </View>
                                </LinearMainBox>
                            </View>
                        ))
                    }
                </View>
                <View>
                    <Text
                        style={{
                            ...GlobalStyles.minTitle,
                            textAlign: 'left',
                            fontWeight: '600',
                            fontSize: 14,
                            marginBottom: 16,
                            marginTop: 32
                        }}
                    >Need Resources? Get Bandwidth</Text>
                    <LinearMainBox
                        style={{
                            flexDirection: 'row',
                            paddingHorizontal: 15,
                            paddingVertical: 18,
                            borderRadius: 8,
                            width: '100%'
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                gap: 8,
                                width: '100%',
                            }}
                        >
                            <Image
                                source={excla}
                                alt="excla"
                                style={{
                                    width: 12.5,
                                    height: 12.5,
                                    marginTop: 4
                                }}
                            />
                            <View style={{ flex: 1 }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        gap: 6,
                                    }}
                                >
                                    <Text
                                        style={{ ...GlobalStyles.minTitle, fontSize: 13 }}
                                    >
                                        Bandwidth
                                    </Text>
                                    <View
                                        style={{
                                            flex: 1,
                                            height: 1,
                                            backgroundColor: '#5F3269',
                                        }}
                                    />
                                    <Text
                                        style={{ ...GlobalStyles.minTitle, fontSize: 13 }}
                                    >
                                        215.2276
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        ...GlobalStyles.flexBetween,
                                        marginVertical: 4
                                    }}
                                >
                                    <WelcomeTxt
                                        txt={'Estimated Fee:'}
                                        style={{
                                            fontSize: 12,
                                            fontWeight: '400',
                                            color: '#B4B4B4'
                                        }}
                                    />
                                    <Text
                                        style={{
                                            color: '#DF16FF',
                                            fontSize: 12
                                        }}
                                    >212 BANDWIDTH</Text>
                                </View>
                                <View
                                    style={{
                                        ...GlobalStyles.flexBetween,
                                        marginVertical: 4
                                    }}
                                >
                                    <WelcomeTxt
                                        txt={'Available Bandwidth:'}
                                        style={{
                                            fontSize: 12,
                                            fontWeight: '400',
                                            color: '#B4B4B4'
                                        }}
                                    />
                                    <Text
                                        style={{
                                            color: '#DF16FF',
                                            fontSize: 12
                                        }}
                                    >0.00</Text>
                                </View>
                            </View>
                        </View>
                    </LinearMainBox>
                </View>
                <View>
                    <Text
                        style={{
                            ...GlobalStyles.minTitle,
                            textAlign: 'left',
                            fontWeight: '600',
                            fontSize: 14,
                            marginBottom: 16,
                            marginTop: 32
                        }}
                    >Get Resources Bandwidth with UAXN
                    </Text>
                    <View>
                        <Input
                            style={{
                                back: {
                                    paddingLeft: 18,
                                    paddingRight: 76,
                                    paddingVertical: 0,
                                    borderRadius: 4,
                                    backgroundColor: '#2C2430',
                                    marginTop: 0,
                                },
                                input: {
                                    color: 'white',
                                    fontWeight: '500',
                                    fontSize: 13
                                }
                            }}
                        />
                        <Text
                            style={{
                                paddingHorizontal: 8,
                                fontSize: 12,
                                lineHeight: 36,
                                color: '#DF16FF',
                                borderLeftColor: '#FFFFFF24',
                                borderLeftWidth: 1,
                                position: 'absolute',
                                right: 21,
                                top: 4
                            }}
                        >UAXN</Text>
                    </View>
                    <Input
                        style={{
                            back: {
                                paddingLeft: 18,
                                paddingRight: 76,
                                paddingVertical: 0,
                                borderRadius: 4,
                                backgroundColor: '#2C2430',
                                marginTop: 0,
                            },
                            input: {
                                color: '#FFFFFF69',
                                fontWeight: '500',
                                fontSize: 13
                            }
                        }}
                    />
                </View>
                <View>
                    <MainBtn
                        content={{ txt: 'Get Bandwidth' }}
                        style={{
                            marginTop: 18,
                            backgroundColor: '#C006DE',
                            borderColor: '#C006DE'
                        }}
                    />
                </View>
            </ScrollView>
            <Nav navigation={navigation} place={'Swap'} />
        </Template>
    )
};