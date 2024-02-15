import { View, Text, Image, SafeAreaView, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { ScrollView } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import { createStackNavigator } from '@react-navigation/stack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { stackNavigationProps } from '../../navigation/stack_navigation'
import { SettingStackList } from '../../navigation/setting_navigator'



type Props = NativeStackScreenProps<SettingStackList, 'Settings'>;
const Settingscreen: React.FC<Props> = (props) => {
    const [modalvisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false)
    }
    return (

        <SafeAreaView >
            <ScrollView>
                <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 20 }}>
                    <Image style={{ height: 60, width: 60, borderRadius: 30 }} source={require("../../images/parmish.jpeg")} />
                    <View style={{ width: 20 }}></View>
                    <View>
                        <Text style={{ fontSize: 20, color: "black", fontWeight: "800" }}>Parmish</Text>
                        <Text>marna do</Text>
                    </View>
                    <View style={{ width: 140 }}></View>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("QrTabNavigation")}>
                            <FontAwesome name="qrcode" size={25} color={"#017f6a"} />
                        </TouchableOpacity>
                        <View style={{ width: 20 }}></View>
                        <TouchableOpacity onPress={() => setModalVisible(!modalvisible)}>
                            <AntDesign name="downcircleo" size={20} color={"#017f6a"} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 20, width: "100%", height: 1, backgroundColor: "white", elevation: 1 }}></View>
                <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
                    <Entypo name="key" size={20} style={{ marginTop: 10, marginRight: 20 }} />
                    <View style={{}}>
                        <Text style={{ fontSize: 20, color: "black" }}>Account</Text>
                        <Text>Security notification,change number</Text>
                    </View>

                </View>
                <View style={{ height: 20, }}></View>
                <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
                    <MaterialIcons name="lock" size={20} style={{ marginTop: 10, marginRight: 20 }} />
                    <View style={{}}>
                        <Text style={{ fontSize: 20, color: "black" }}>Privacy</Text>
                        <Text>Block contacts</Text>
                    </View>

                </View>
                <View style={{ height: 20, }}></View>
                <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
                    <FontAwesome6 name="democrat" size={20} style={{ marginTop: 10, marginRight: 20 }} />
                    <View style={{}}>
                        <Text style={{ fontSize: 20, color: "black" }}>Avatar</Text>
                        <Text>Create,edit,profile Photo</Text>
                    </View>

                </View>
                <View style={{ height: 20, }}></View>
                <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
                    <MaterialIcons name="chat" size={22} style={{ marginTop: 10, marginRight: 20 }} />
                    <View style={{}}>
                        <Text style={{ fontSize: 20, color: "black" }}>Chats</Text>
                        <Text>Theme,wallpapers</Text>
                    </View>

                </View>
                <View style={{ height: 20, }}></View>
                <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
                    <FontAwesome5 name="bell" size={20} style={{ marginTop: 10, marginRight: 20 }} />
                    <View style={{}}>
                        <Text style={{ fontSize: 20, color: "black" }}>Notifications</Text>
                        <Text>Message,group & call</Text>
                    </View>

                </View>
                <View style={{ height: 20, }}></View>
                <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
                    <Entypo name="key" size={20} style={{ marginTop: 10, marginRight: 20 }} />
                    <View style={{}}>
                        <Text style={{ fontSize: 20, color: "black" }}>Storage and data</Text>
                        <Text>Network usage,auto-download</Text>
                    </View>

                </View>
                <View style={{ height: 20, }}></View>
                <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
                    <MaterialCommunityIcons name="web" size={25} style={{ marginTop: 10, marginRight: 20 }} />
                    <View style={{}}>
                        <Text style={{ fontSize: 20, color: "black" }}>App language</Text>
                        <Text>English (device's language)</Text>
                    </View>

                </View>
                <View style={{ height: 20, }}></View>
                <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
                    <Feather name="help-circle" size={20} style={{ marginTop: 10, marginRight: 20 }} />
                    <View style={{}}>
                        <Text style={{ fontSize: 20, color: "black" }}>Help</Text>
                        <Text>Help centre,contact us,privacy policy</Text>
                    </View>

                </View>
                <View style={{ height: 20, }}></View>
                <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
                    <FontAwesome5 name="user-friends" size={20} style={{ marginTop: 10, marginRight: 20 }} />
                    <View style={{}}>
                        <Text style={{ fontSize: 20, color: "black" }}>Invite a friend</Text>
                    </View>

                </View>
                <View style={{ height: 30, }}></View>

                <Modal transparent animationType={"slide"} visible={modalvisible}>
                    <TouchableWithoutFeedback onPress={closeModal}>
                        <View style={{ backgroundColor: "#00000099", height: '100%', justifyContent: 'flex-end' }}>

                            <View
                                style={{
                                    height: 200,
                                    width: 380,
                                    alignSelf: "center",
                                    borderColor: 'white',
                                    borderWidth: 1,
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    backgroundColor: 'white',
                                }}>
                                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
                                    <Image style={{ height: 60, width: 60, borderRadius: 30 }} source={require('../../images/parmish.jpeg')} />
                                    <View style={{ width: 20 }}></View>
                                    <View>
                                        <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Parmish</Text>
                                        <Text>marna do</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>




            </ScrollView>


        </SafeAreaView>
    )
}

export default Settingscreen