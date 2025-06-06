import React, { useState } from "react";

import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearMainBox } from "../../../../../components/layout/linearMainBox";
import { WelcomeTxt } from "../../../../../components/layout/WelcomeTxt";

import { Template } from "../../../../../components/layout/Template";
import { Header } from '../../../../../components/layout/header';
import { GlobalStyles } from "../../../../../components/styles";
import { Input } from "../../../../../components/common/Input";

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Nav } from "../../../../../components/layout/nav";

const datas = [
    {
        label: 'Full Name',
        content: 'fullName'
    },
    {
        label: 'Display Name',
        content: 'displayName'
    },
    {
        label: 'Email',
        content: 'email'
    },
    {
        label: 'Password',
        content: 'password'
    }
]

export const BasicInfor = ({ navigation }) => {

    const [form, setForm] = useState({
        fullName: 'John Doe',
        displayName: 'John Doe',
        email: 'johndoe@example.com',
        password: '1111111'
    });

    return (
        <Template style={{
            padding: 16,
            paddingVertical: 0
        }}>
            <Header
                content={'Basics Information'}
                navigation={navigation}
                path="Settings"
                right={true}
            />
            <ScrollView>
                <LinearMainBox
                    style={{
                        padding: 14,
                        borderRadius: 8,
                        marginTop: 8
                    }}
                >
                    <View
                        style={{
                            ...GlobalStyles.flexBetween
                        }}
                    >
                        <WelcomeTxt
                            txt={'Your Info'}
                            style={{
                                fontSize: 13,
                                marginBottom: 10
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                padding: 8,
                                backgroundColor: '#774F7D87',
                                borderRadius: 6
                            }}
                        >
                            <FontAwesome6 name="edit" size={16} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        {
                            datas.map((_itm, _idx) => (
                                <View
                                    style={{
                                        paddingVertical: 10
                                    }}
                                    key={_idx}
                                >
                                    <Text style={{
                                        fontSize: 12,
                                        marginBottom: 6,
                                        textAlign: 'left',
                                        color: '#FFFFFFDB'
                                    }}>{_itm.label}</Text>
                                    <Input
                                        style={{
                                            back:
                                            {
                                                backgroundColor: 'transparent',
                                                paddingVertical: 0,
                                                paddingHorizontal: 14,
                                                borderRadius: 4
                                            },
                                            input: {
                                                color: 'white'
                                            }
                                        }}
                                        value={form[_itm.content]}
                                        onChangeText={
                                            (val) => setForm(prev => ({
                                                ...prev,
                                                [_itm.content]: val
                                            }))
                                        }
                                        type={_itm.content}
                                    />
                                </View>
                            ))
                        }
                    </View>
                </LinearMainBox>
            </ScrollView>
            <Nav place={'Settings'} navigation={navigation} />
        </Template>
    )
}