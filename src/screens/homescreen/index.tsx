import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingModal from '../components/setting_modal';
import { stackNavigationProps } from '../../navigation/stack_navigation';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';




const Homescreen: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    console.log(modalVisible)
    const navigation = useNavigation();



    const handleEllipsisPress = () => {
        setModalVisible(!modalVisible);
        console.log(modalVisible)
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <SafeAreaView>
            <StatusBar animated={true} backgroundColor="#017f6a" />

            <View
                style={{
                    backgroundColor: '#017f6a',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 12,
                }}
            >
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 25, color: 'white' }}>WhatsApp</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        width: '30%',
                        justifyContent: 'space-between',
                    }}
                >
                    <Pressable onPress={() => navigation.navigate("Camerascreen")}>
                        <Feather name="camera" size={25} color="white" />
                    </Pressable>
                    <Ionicons name="search" size={25} color="white" />
                    <Pressable onPress={handleEllipsisPress}>
                        <Ionicons name="ellipsis-vertical" size={25} color="white" />
                    </Pressable>
                </View>
            </View>
            <SettingModal
                modalVisible={modalVisible}
                closeModal={closeModal}
            />
        </SafeAreaView>
    );
};

export default Homescreen;
