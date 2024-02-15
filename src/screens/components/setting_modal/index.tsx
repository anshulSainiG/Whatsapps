import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Modal, TouchableWithoutFeedback, Pressable } from 'react-native';
import { stackNavigationProps } from '../../../navigation/stack_navigation';
import { useNavigation } from '@react-navigation/native';

type SettingModalProps = {
    modalVisible: boolean;
    closeModal: () => void;
};


const SettingModal: React.FC<SettingModalProps> = (props) => {
    const navigation = useNavigation();
    const { modalVisible, closeModal } = props;

    return (
        <View>
            <Modal transparent visible={modalVisible}>
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View style={{ flex: 1 }}>
                        <View style={{ width: 200, height: 300, borderWidth: 1, borderRadius: 10, alignSelf: 'flex-end', marginTop: 50, backgroundColor: 'white', borderColor: 'white' }}>
                            <View style={{ marginLeft: 15, marginVertical: 35 }}>
                                <Pressable onPress={() => console.log("New group pressed")}>
                                    <Text style={{ fontSize: 20, color: 'black' }}>New group</Text>
                                </Pressable>
                                <Pressable onPress={() => console.log("New broadcast pressed")}>
                                    <Text style={{ fontSize: 20, color: 'black', marginTop: 15 }}>New broadcast</Text>
                                </Pressable>
                                <Pressable onPress={() => console.log("Linked devices pressed")}>
                                    <Text style={{ fontSize: 20, color: 'black', marginTop: 15 }}>Linked devices</Text>
                                </Pressable>
                                <Pressable onPress={() => console.log("Starred messages pressed")}>
                                    <Text style={{ fontSize: 20, color: 'black', marginTop: 15 }}>Starred messages</Text>
                                </Pressable>
                                <Pressable onPress={() => console.log("Payments pressed")}>
                                    <Text style={{ fontSize: 20, color: 'black', marginTop: 15 }}>Payments</Text>
                                </Pressable>
                                <Pressable onPress={() =>

                                    navigation.navigate("SettingStackNavigation")}>
                                    <Text style={{ fontSize: 20, color: 'black', marginTop: 15 }}>Settings</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};

export default SettingModal;
