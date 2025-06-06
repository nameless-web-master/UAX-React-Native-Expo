import React, { useState } from "react";
import { ScrollView, Switch, Text, View } from "react-native";

import { Template } from "../../../../../components/layout/Template";
import { Header } from "../../../../../components/layout/header";
import { LinearMainBox } from "../../../../../components/layout/linearMainBox";
import { GlobalStyles } from "../../../../../components/styles";
import { MainBtn } from "../../../../../components/layout/mainBtn";
import { WelcomeTxt } from "../../../../../components/layout/WelcomeTxt";
import { Nav } from "../../../../../components/layout/nav";

export const Wallet = ({ navigation }) => {

    const [enable, setEnable] = useState(false);

    const handleSwitch = () => setEnable(previousState => !previousState);
    return (
        <Template style={{
            padding: 16,
            paddingVertical: 0
        }}>
            <Header
                content={'Wallet Settings'}
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
                        }}>Account Security</Text>
                        <View
                            style={{ ...GlobalStyles.flexBetween }}
                        >
                            <Text style={{
                                ...GlobalStyles.minTitle,
                                textAlign: 'left',
                                fontSize: 13
                            }}>2-Factor Authentication</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#DF16FF" }}
                                thumbColor="#fff"
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={handleSwitch}
                                value={enable}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            width: '100%',
                            height: 1,
                            backgroundColor: '#FFFFFF24',
                            marginVertical: 28
                        }}
                    />
                    <View style={{ paddingHorizontal: 8 }}>
                        <Text style={{
                            ...GlobalStyles.minTitle,
                            textAlign: 'left',
                            fontWeight: 500,
                            paddingVertical: 10
                        }}>Wallet Settings</Text>
                        <Text style={{
                            fontSize: 13,
                            color: '#0DF469',
                        }}>Authorized Apps</Text>
                        <WelcomeTxt
                            txt={'List of dApps got permission granted via UAX'}
                            style={{
                                color: '#FFFFFFC9',
                                fontWeight: '400',
                                paddingVertical: 8
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
                    <Text
                        style={{
                            ...GlobalStyles.minTitle,
                            textAlign: 'left',
                            fontWeight: 500,
                            paddingVertical: 10,
                            maxWidth: 240,
                            lineHeight: 19
                        }}
                    >
                        Create your UAX account to start
                        using wallet features!
                    </Text>
                    <MainBtn
                        content={{ txt: 'Create Now' }}
                        style={{
                            marginTop: 14,
                            paddingHorizontal: 16,
                            paddingVertical: 8,
                            backgroundColor: '#C006DE',
                            borderColor: 'transparent',
                            alignSelf: 'flex-start'
                        }}
                    />
                </LinearMainBox>
            </ScrollView>
            <Nav place={'Settings'} navigation={navigation} />
        </Template >
    )
}