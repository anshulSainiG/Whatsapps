import { View, Text, SafeAreaView, FlatList, Image } from 'react-native';
import React from 'react';
import { data } from '../../../data/data';

type ChatsFlatlistProps = {
    image: any;
    id: string;
    mainheading: string;
    text: string;
};

const ChatsFlatlist = (props: ChatsFlatlistProps) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>

                            <Image source={item.image} style={{ height: 50, width: 50, borderRadius: 30, marginVertical: 10 }} />
                            <View style={{ width: 30 }}></View>
                            <View>
                                <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>{item.mainheading}</Text>
                                <Text>{item.text}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default ChatsFlatlist;
