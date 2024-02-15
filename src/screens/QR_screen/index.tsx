import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const QrScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <StatusBar animated={true} backgroundColor="#666666" />
            <View style={{ height: 60, width: "100%", flexDirection: "row", backgroundColor: 'white', elevation: 1, alignItems: "center" }}>
                <View style={{ flexDirection: "row", width: "75%", height: "100%", alignItems: "center", marginLeft: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack("SettingScreen")}>
                        <AntDesign name="arrowleft" size={25} />
                    </TouchableOpacity>
                    <View style={{ width: 20 }}></View>
                    <Text style={{ color: "black", fontSize: 25, fontWeight: "400" }}>QR code</Text>
                </View>
                <View style={{ flexDirection: "row", width: "25%", height: "100%", justifyContent: "space-around", alignItems: "center" }}>
                    <Entypo name="share" size={25} color={"black"} />
                    <Entypo name="dots-three-vertical" size={20} color={"black"} />
                </View>
            </View>
        </View>
    )
}

export default QrScreen