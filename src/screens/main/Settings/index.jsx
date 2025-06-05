import React from "react";

import { Template } from "../../../components/layout/Template";
import { Header } from "../../../components/layout/header";

import { ScrollView, View } from "react-native";
import { Nav } from "../../../components/layout/nav";

export const Settings = ({ navigation }) => {
    return (
        <Template style={{
            padding: 16,
            paddingVertical: 0
        }}>
            <>
                <ScrollView>
                    <View>
                        <Header content={'Settings'} navigation={navigation} />
                    </View>
                </ScrollView>

                <Nav place={'Settings'} navigation={navigation} />
            </>
        </Template>
    )
}