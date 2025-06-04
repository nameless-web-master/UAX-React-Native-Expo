import React from 'react';

import { Template } from '../../../components/layout/Template';
import { View, Image, Text, ScrollView } from 'react-native';

import { Header } from '../../../components/layout/header';
import { UserInfo } from '../../../components/layout/userInfo';
import Balance from '../../../assets/circle.png'
import { GlobalStyles } from '../../../components/styles';
import { MainBtn } from '../../../components/layout/mainBtn';
import { Nav } from '../../../components/layout/nav';

import Claim from '../../../assets/claim.png';
import { Transaction } from './components/transaction';

import { Link } from '../../../components/layout/link';

export const Dashboard = ({ navigation }) => {
    const children = (
        <>
            <ScrollView>
                <Header
                    content={'Dashboard'}
                    logo={true}
                    navigation={navigation}
                />
                <UserInfo navigation={navigation} />
                <View
                    style={{ ...GlobalStyles.flexCenter, position: 'relative' }}
                >
                    <Image source={Balance} alt="balance" />
                    <View style={{ ...GlobalStyles.positionCenter }}>
                        <Text
                            style={{
                                ...GlobalStyles.minTitle
                            }}>
                            Portfolio Balance</Text>
                        <Text
                            style={{
                                ...GlobalStyles.GreenTxt
                            }}
                        >100 UAXN</Text>
                    </View>
                </View>
                <View style={{
                    ...GlobalStyles.flexCenter,
                    gap: 10,
                    marginVertical: 24
                }}>
                    <MainBtn
                        content={{ txt: "Send", icon: "upload" }}
                        action="Send"
                        navigation={navigation}
                    />
                    <MainBtn
                        content={{ txt: "Receive", icon: "download" }}
                        action="Receive"
                        navigation={navigation}
                    />
                </View>
                <Image
                    source={Claim}
                    alt='Claim'
                    style={{
                        width: '100 %',
                        borderRadius: 10,
                        marginBottom: 26
                    }}
                />
                <View style={{ ...GlobalStyles.flexBetween }}>
                    <Text style={{ ...GlobalStyles.minTitle }}>Transactions</Text>
                    <Link navigation={navigation} text={'See all'} path={'Dashboard'} />
                </View>
                <View
                    style={{ paddingBottom: 48 }}
                >
                    <Transaction navigation={navigation} />
                    <Transaction navigation={navigation} />
                    <Transaction navigation={navigation} />
                </View>
            </ScrollView>
            <Nav navigation={navigation} place={'Dashboard'} />
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