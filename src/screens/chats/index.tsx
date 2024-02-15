import { View, Text, TouchableOpacity, SafeAreaView, Modal } from 'react-native'
import React, { useState } from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import ChatsFlatlist from '../components/chat_flatlist'
import { data } from '../../data/data'
import SettingModal from '../components/setting_modal'

import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { stackNavigationProps } from '../../navigation/stack_navigation'
import { useNavigation } from '@react-navigation/native'
type ChatsScreenNavigationProp = NativeStackNavigationProp<
    stackNavigationProps,
    'Chats'
>;
const Chats: React.FC = (props: ChatsScreenNavigationProp) => {


    const [modalVisible, setModalVisible] = useState(false)
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "flex-end", marginBottom: 30 }}>
            <ChatsFlatlist image={undefined} id={''} mainheading={''} text={''} />
            <TouchableOpacity style={{ height: 50, width: 50, borderWidth: 2, borderRadius: 15, backgroundColor: "#017f6a", borderColor: "#017f6a", alignSelf: "flex-end", alignItems: "center", justifyContent: "center", marginRight: 20 }} onPress={() => props.navigation.navigate("Selectcontact")}>
                <AntDesign name="contacts" size={25} color={"white"} />


            </TouchableOpacity>
            {/* {
                modalVisible ?
                    (
                        <Modal transparent>
                            <View style={{ justifyContent: "flex-end", marginBottom: 30, width: 50, height: 50, borderWidth: 2 }}>
                                <View style={{ height: 50, width: 50, borderWidth: 2, borderRadius: 25, borderColor: "black", alignSelf: "flex-end", alignItems: "center", justifyContent: "center", marginRight: 20 }} >
                                    <Feather name="divide" size={25} color={"black"} />

                                </View>
                                <View style={{ height: 20 }}></View>
                                <View style={{ height: 50, width: 50, borderWidth: 2, borderRadius: 25, borderColor: "black", alignSelf: "flex-end", alignItems: "center", justifyContent: "center", marginRight: 20 }} >
                                    <AntDesign name="minus" size={25} color={"black"} />

                                </View>
                                <View style={{ height: 20 }}></View>
                                <TouchableOpacity style={{ height: 50, width: 50, borderWidth: 2, borderRadius: 25, borderColor: "black", alignSelf: "flex-end", alignItems: "center", justifyContent: "center", marginRight: 20 }} onPress={() => setModalVisible(!modalVisible)}>
                                    <AntDesign name="plus" size={25} color={"black"} />

                                </TouchableOpacity>
                            </View>

                        </Modal>
                    ) : null

            } */}

        </SafeAreaView>
    )
}

export default Chats