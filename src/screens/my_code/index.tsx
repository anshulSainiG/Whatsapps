import { View, Text, Image } from 'react-native'
import React from 'react'

const Mycode = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 120, }}></View>
            <View style={{ width: 60, height: 60, borderRadius: 30, borderColor: "white", borderWidth: 1, alignItems: "center", justifyContent: "center", marginLeft: 160, marginBottom: 50, position: "absolute", marginTop: 80, zIndex: 1, elevation: 1, backgroundColor: "white" }}>
                <Image style={{ height: 50, width: 50, borderRadius: 30 }} source={require("../../images/parmish.jpeg")} />
            </View>

            <View style={{ width: 300, height: 300, borderRadius: 8, backgroundColor: "white", marginLeft: 50, }}>

                <View style={{ alignSelf: "center", marginTop: 25 }}>
                    <Text style={{ fontSize: 15, color: "black", fontWeight: "bold" }}>Parmish Verma</Text>
                    <Text>WhatsApp contact</Text>
                </View>


                <Image style={{ width: 150, height: 150, alignSelf: "center", marginTop: 40, }} source={require("../../images/whatsappqr.webp")} />


            </View>
            <View style={{ width: 280, marginLeft: 70, marginTop: 20 }}>
                <Text style={{ fontSize: 15 }}>Your QR code is private.If you share it with someone,they
                    can scan itv with their Whatsapp camera to add you as a contact
                </Text>
            </View>

        </View>
    )
}

export default Mycode