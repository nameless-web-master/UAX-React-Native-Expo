import React, { useState } from "react";

import { Template } from "../../../components/layout/Template";
import { Header } from "../../../components/layout/header";

import { Image, ScrollView, Text, TouchableOpacity, View, Switch } from "react-native";
import { Nav } from "../../../components/layout/nav";

import { LinearMainBox } from '../../../components/layout/linearMainBox';
import { WelcomeTxt } from '../../../components/layout/WelcomeTxt';
import { GlobalStyles } from "../../../components/styles";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// images 

import infor from '../../../assets/settings/information.png';
import wallet from '../../../assets/settings/wallet.png';
import dev from '../../../assets/settings/dev.png';
import face from '../../../assets/settings/face.png';
import touch from '../../../assets/settings/touch.png';

import invite from '../../../assets/settings/invite.png';
import help from '../../../assets/settings/help.png';
import about from '../../../assets/settings/about.png';

const datas = [
    {
        title: 'General',
        lists: [
            {
                icon: infor,
                content: 'Basic Information',
                path: 'BasicInfor'
            },
            {
                icon: wallet,
                content: 'Wallet Settings',
                path: 'Wallet'
            },
            {
                icon: dev,
                content: 'Developer Settings',
                path: 'Developer'
            },
            {
                icon: face,
                content: 'Face ID',
                path: 'FaceID'
            },
        ]
    },
    {
        title: 'More info & support',
        lists: [
            {
                icon: invite,
                content: 'Invite & Earn',
                path: 'Invite'
            },
            {
                icon: help,
                content: 'Help & Support',
                path: 'Help'
            },
            {
                icon: about,
                content: 'About Us',
                path: 'AboutUs'
            },
        ]
    },
]

export const Settings = ({ navigation }) => {
    const [enable, setEnable] = useState(false);

    const handleSwitch = () => setEnable(previousState => !previousState);

    return (
        <Template style={{
            padding: 16,
            paddingVertical: 0
        }}>
            <>
                <ScrollView>
                    <View style={{ marginBottom: 18 }}>
                        <Header content={'Settings'} navigation={navigation} />
                    </View>
                    {
                        datas.map((_itm, _idx) => (
                            <LinearMainBox
                                style={{
                                    padding: 14,
                                    borderRadius: 8,
                                    marginTop: 8
                                }}
                                key={_idx}
                            >
                                <WelcomeTxt
                                    txt={_itm.title}
                                    style={{
                                        fontSize: 13,
                                        marginBottom: 6
                                    }}
                                />
                                <View>
                                    {
                                        _itm.lists.map((_listItm, _listIdx) => (
                                            <TouchableOpacity
                                                style={{
                                                    ...GlobalStyles.flexBetween,
                                                    paddingVertical: 14
                                                }}
                                                key={_listIdx}
                                                onPress={() => _listItm.path === 'FaceID' ?
                                                    handleSwitch :
                                                    navigation.navigate(_listItm.path)}
                                            >
                                                <View
                                                    style={{ ...GlobalStyles.flexCenter }}>
                                                    <Image source={_listItm.icon} alt="no" style={{
                                                        marginRight: 10,
                                                        width: 14,
                                                        height: 14
                                                    }} />
                                                    <Text style={{
                                                        ...GlobalStyles.minTitle,
                                                        fontSize: 14
                                                    }}>{_listItm.content}</Text>
                                                </View>
                                                {
                                                    _listItm.path === 'FaceID' ?
                                                        <Switch
                                                            trackColor={{ false: "#767577", true: "#DF16FF" }}
                                                            thumbColor="#fff"
                                                            ios_backgroundColor="#3e3e3e"
                                                            onValueChange={handleSwitch}
                                                            value={enable}
                                                        /> :
                                                        <MaterialIcons name="arrow-forward-ios" size={14} color="white" />
                                                }
                                            </TouchableOpacity>
                                        ))
                                    }
                                </View>
                            </LinearMainBox>
                        ))
                    }
                </ScrollView>

                <Nav place={'Settings'} navigation={navigation} />
            </>
        </Template>
    )
}