import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Community from '../../screens/community';
import Chats from '../../screens/chats';
import Updates from '../../screens/updates';
import Calls from '../../screens/calls';
import { Text, View } from 'react-native';
import MyStack, { stackNavigationProps } from '../stack_navigation';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from '../../screens/homescreen';


const Tab = createMaterialTopTabNavigator();



const TabBarNavigation = () => {

    return (
        <>
            <Homescreen />
            <Tab.Navigator
                initialRouteName='Chats'
                tabBarOptions={{
                    showIcon: true,
                    showLabel: true,

                    activeTintColor: '#ffffff',
                    inactiveTintColor: '#8fe4d5',
                    style: { backgroundColor: '#017f6a', height: 80 },
                    indicatorStyle: { width: 110, backgroundColor: "white", height: 3, alignSelf: "center" },
                    tabStyle: { width: 100, alignItems: "start" },
                    pressColor: 'transparent',
                    pressOpacity: 0,



                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => {
                        if (route.name === 'Community') {
                            return (
                                <View style={{ width: 50, height: 50 }}>
                                    <MaterialCommunityIcons name={'account-group'} size={25} color={color} />
                                </View>
                            );
                        }
                        return null;
                    },
                    tabBarLabel: ({ focused }) => {
                        return route.name === 'Community' ? null : (
                            <Text style={{ color: 'white', marginBottom: 10, fontSize: 16 }}>{route.name}</Text>
                        );
                    },
                })}
            >
                <Tab.Screen
                    name='Community'
                    component={Community}
                    options={({ route }) => ({
                        tabBarLabel: ({ focused }) => null,
                        tabBarIcon: ({ color, focused }) => (
                            <View style={{ width: focused ? 50 : 25, }}>
                                <MaterialCommunityIcons name={'account-group'} size={25} color={color} />
                            </View>
                        ),
                        tabBarIndicatorStyle: { width: route.name === 'Community' ? 30 : 20, backgroundColor: "white" },

                    })}
                />
                <Tab.Screen name='Chats' component={Chats} />
                <Tab.Screen name='Updates' component={Updates} />
                <Tab.Screen name='Calls' component={Calls} />
            </Tab.Navigator>
        </>



    );
};

export default TabBarNavigation;
