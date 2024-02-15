import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from '../stack_navigation';
import TabBarNavigation from '../tab_navigation';
import Homescreen from '../../screens/homescreen';
import SettingStackNavigation from '../setting_navigator';

export type RootStackParamList = {
    MyStack: undefined;

};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            {/* <Homescreen /> */}
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="MyStack" component={MyStack} />

            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
