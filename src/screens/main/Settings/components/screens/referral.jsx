import React from 'react';

import { Template } from '../../../../../components/layout/Template';
import { Header } from '../../../../../components/layout/header';
import { Image, ScrollView, Text, View } from 'react-native';
import { Input } from '../../../../../components/common/Input';
import { MainBtn } from '../../../../../components/layout/mainBtn';
import { GlobalStyles } from '../../../../../components/styles';

import Person from '../../../../../assets/person.png';
import { WelcomeTxt } from '../../../../../components/layout/WelcomeTxt';
import { Nav } from '../../../../../components/layout/nav';

const datas = [
    {
        avatar: Person,
        name: 'Mary',
        join: '07 May, 2025',
        balance: '$10'
    },
    {
        avatar: Person,
        name: 'Mary',
        join: '07 May, 2025',
        balance: '$10'
    },
    {
        avatar: Person,
        name: 'Mary',
        join: '07 May, 2025',
        balance: '$10'
    },
    {
        avatar: Person,
        name: 'Mary',
        join: '07 May, 2025',
        balance: '$10'
    },
    {
        avatar: Person,
        name: 'Mary',
        join: '07 May, 2025',
        balance: '$10'
    },
]

export const Referral = ({ navigation }) => {
    return (
        <Template style={{
            padding: 16,
            paddingVertical: 0
        }}>
            <View style={{ marginBottom: 18 }}>
                <Header
                    content={'Referral & Reward History'}
                    navigation={navigation}
                    right={true}
                    menu={true}
                    path='Settings'
                />
            </View>
            <ScrollView>
                <View
                    style={{
                        ...GlobalStyles.flexBetween,
                        gap: 10,
                        padding: 12
                    }}
                >
                    <Input
                        style={{
                            back: {
                                paddingVertical: 4,
                                paddingHorizontal: 13,
                                borderColor: '#FFFFFF0F',
                                borderWidth: 1,
                                borderRadius: 5,
                                backgroundColor: '#2A1A2E',
                                flex: 1
                            },
                            input: {
                                fontSize: 12
                            }
                        }}
                        icons={{
                            front: 'search'
                        }}
                        placeholder={'Search by name'}
                    />
                    <MainBtn
                        content={{ txt: 'Filters', icon: 'filter-list' }}
                        style={{
                            backgroundColor: '#C006DE',
                            borderColor: '#C006DE',
                            paddingVertical: 12
                        }}
                        other={2}
                        position={true}
                    />
                </View>
                <View
                    style={{
                        padding: 12,
                    }}
                >
                    {
                        datas.map((_itm, _idx) => (
                            <View
                                style={{
                                    ...GlobalStyles.flexBetween,
                                    borderBottomColor: '#37143F',
                                    borderBottomWidth: 1,
                                    paddingBottom: 10,
                                    marginTop: 16
                                }}
                                key={_idx}
                            >
                                <View style={{
                                    padding: 2,
                                    marginRight: 12
                                }}>
                                    <Image
                                        source={Person}
                                        alt='Person'
                                        style={{
                                            width: 31,
                                            height: 31
                                        }}
                                    />
                                </View>
                                <View
                                    style={{ flex: 1 }}
                                >
                                    <View
                                        style={{
                                            ...GlobalStyles.flexBetween,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                ...GlobalStyles.minTitle,
                                                fontSize: 13,
                                                fontWeight: '600',
                                                lineHeight: 22
                                            }}
                                        >
                                            Mary
                                        </Text>
                                        <WelcomeTxt
                                            txt={'You earned'}
                                            style={{
                                                color: '#A8A8A8',
                                                fontWeight: '400',
                                                fontSize: 11,
                                                lineHeight: 22
                                            }}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            ...GlobalStyles.flexBetween
                                        }}
                                    >
                                        <WelcomeTxt
                                            txt={'Joined on 07 May, 2025'}
                                            style={{
                                                color: '#A8A8A8',
                                                fontWeight: '400',
                                                fontSize: 11,
                                                lineHeight: 22
                                            }}
                                        />
                                        <Text
                                            style={{
                                                ...GlobalStyles.minTitle,
                                                fontSize: 13,
                                                fontWeight: '600',
                                                lineHeight: 22,
                                                color: '#0DF469'
                                            }}
                                        >
                                            $10
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
            <Nav place={'Settings'} navigation={navigation} />
        </Template>
    )
};