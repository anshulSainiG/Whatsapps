import { PermissionsAndroid, StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Contacts from 'react-native-contacts';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const ContactsScreen = () => {
    const [listContacts, setListContacts] = useState([]);
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        handlerContacts();
    }, []);

    const handlerContacts = () => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Please accept bare mortal',
        })
            .then((res) => {
                console.log('Permission: ', res);
                if (res === PermissionsAndroid.RESULTS.GRANTED) {
                    Contacts.getAll()
                        .then(contacts => {
                            setListContacts(contacts);
                            console.log(contacts);
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                }
            })
            .catch((error) => {
                console.error('Permission error: ', error);
            });
    };


    return (
        <ScrollView style={{ marginLeft: 20, marginTop: 20 }}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ height: 45, width: 45, borderWidth: 2, borderRadius: 25, backgroundColor: "#017f6a", borderColor: "#017f6a", alignItems: "center", justifyContent: "center" }}>
                    <FontAwesome5 name="user-friends" size={20} color={"white"} />
                </View>
                <Text style={{ fontSize: 20, color: "black", fontWeight: "bold", marginLeft: 10, marginTop: 5 }}>New group</Text>
            </View>
            <View style={{ height: 20 }}></View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ height: 45, width: 45, borderWidth: 2, borderRadius: 25, backgroundColor: "#017f6a", borderColor: "#017f6a", alignItems: "center", justifyContent: "center" }}>
                    <FontAwesome name="user-plus" size={20} color={"white"} />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "80%" }}>
                    <Text style={{ fontSize: 20, color: "black", fontWeight: "bold", marginLeft: 10, marginTop: 5 }}>New contact</Text>

                    <FontAwesome6 name="qrcode" size={30} />
                </View>

            </View>
            <View style={{ height: 20 }}></View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ height: 45, width: 45, borderWidth: 2, borderRadius: 25, backgroundColor: "#017f6a", borderColor: "#017f6a", alignItems: "center", justifyContent: "center" }}>
                    <FontAwesome name="users" size={20} color={"white"} />
                </View>
                <Text style={{ fontSize: 20, color: "black", fontWeight: "bold", marginLeft: 10, marginTop: 5 }}>New community</Text>
            </View>
            <Text>contacts on whatsapp</Text>
            <FlatList
                data={listContacts}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ height: 50, marginTop: 15, marginLeft: 25, flexDirection: "row" }}>
                        <Image style={{ width: 30, height: 30, borderRadius: 15 }} source={require("../../images/gurnam.jpeg")} />

                        <Text style={{ color: "black", fontSize: 15, marginLeft: 10 }}>{item.displayName}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />


        </ScrollView>
    );
}

export default ContactsScreen;
