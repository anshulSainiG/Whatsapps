import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settingscreen from '../../screens/setting_screen';
import QrTabNavigation from '../Qr_tab_navigation';
import Fontisto from "react-native-vector-icons/Fontisto"
export type SettingStackList = {
    Settings: undefined;
    QrTabNavigation: undefined;


}

const Stack = createNativeStackNavigator<SettingStackList>();

const SettingStackNavigation = () => {

    const SearchIcon = () => (
        <Fontisto name="search" size={20} color={"white"} />
    );
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Settings"
                component={Settingscreen}
                options={{
                    headerTintColor: "white",
                    headerStyle: { backgroundColor: "#017f6a" },

                    headerRight: () => <SearchIcon />


                }}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="QrTabNavigation"
                component={QrTabNavigation}
            />
        </Stack.Navigator>
    );
}



export default SettingStackNavigation
