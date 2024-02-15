import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import QrScreen from '../../screens/QR_screen';
import Mycode from '../../screens/my_code';
import ScanCode from '../../screens/scan_code';
import ScanScreen from '../../screens/scan_code';

;


const Tab = createMaterialTopTabNavigator();

const QrTabNavigation = () => {
    return (
        <>
            <QrScreen />
            <Tab.Navigator
                tabBarOptions={{
                    showLabel: true,
                    activeTintColor: "black",
                    indicatorStyle: { backgroundColor: "#017f6a" },
                }}
            >
                <Tab.Screen
                    name="My code"
                    component={Mycode}
                />
                <Tab.Screen
                    name=" ScanScreen"
                    component={ScanScreen}
                />

            </Tab.Navigator>
        </>
    )
}

export default QrTabNavigation 