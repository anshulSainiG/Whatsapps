import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Newgroup from '../../screens/new_group_screen';
import Newbroadcast from '../../screens/new_broadcast_screen';
import Linkeddevices from '../../screens/linked_devices';
import Starredmessages from '../../screens/starred_messages';
import Payments from '../../screens/payments';
import Settingscreen from '../../screens/setting_screen';
import { NavigationContainer } from '@react-navigation/native';
import SettingModal from '../../screens/components/setting_modal';
import Homescreen from '../../screens/homescreen';
import TabBarNavigation from '../tab_navigation';
import QrScreen from '../../screens/QR_screen';
import QrTabNavigation from '../Qr_tab_navigation';
import SettingStackNavigation from '../setting_navigator';
import Camerascreen from '../../screens/camera_screen';
import Contacts from '../../screens/ contacts';
import Chats from '../../screens/chats';
import React, { useState } from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import { Modal, Pressable, SafeAreaView, Text, View } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export type stackNavigationProps = {
  MainTabs: undefined;
  Newgroup: undefined;
  Newbroadcast: undefined;
  Linkeddevices: undefined;
  Starredmessages: undefined;
  Payments: undefined;
  TabBarNavigation: undefined;
  SettingStackNavigation: undefined;
  Settingscreen: undefined;
  Camerascreen: undefined;
  Contacts: undefined;
  Chats: undefined;
  Selectcontact: undefined;



}

const Stack = createNativeStackNavigator<stackNavigationProps>();

const SearchIcon = ({ onIconClick }) => (
  <>
    <Fontisto name="search" size={20} color={"white"} />
    <View style={{ height: 20, width: 20 }}></View>
    <TouchableOpacity onPress={onIconClick}>
      <Entypo name="dots-three-vertical" size={20} color={"white"} />
    </TouchableOpacity>
  </>
);

const MyStack = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator screenOptions={{ headerTintColor: "#ffffff", headerStyle: { backgroundColor: "#017f6a" } }}>
        <Stack.Screen options={{ headerShown: false }} name="TabBarNavigation" component={TabBarNavigation} />
        <Stack.Screen options={{ headerShown: false }} name="Camerascreen" component={Camerascreen} />
        <Stack.Screen name="Newgroup" component={Newgroup} />
        <Stack.Screen name="Newbroadcast" component={Newbroadcast} />
        <Stack.Screen name="Linkeddevices" component={Linkeddevices} />
        <Stack.Screen name="Starredmessages" component={Starredmessages} />
        <Stack.Screen name="Payments" component={Payments} />
        <Stack.Screen options={{ headerShown: false }} name="SettingStackNavigation" component={SettingStackNavigation} />
        <Stack.Screen name="Selectcontact" component={Contacts}
          options={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#017f6a" },

            headerRight: () => <SearchIcon onIconClick={toggleModal} />


          }} />


      </Stack.Navigator>

      <Modal transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>

        <Pressable onPress={() => {
          console.log("fdfdfdd", modalVisible)
          setModalVisible(false)
        }}
          style={{ height: "100%", width: "100%" }}>

          <View style={{ width: 190, height: 200, paddingVertical: 20, borderRadius: 15, alignSelf: "flex-end", marginTop: 50, backgroundColor: "white" }}>

            <Text style={{ fontSize: 20, color: "black", marginLeft: 20 }} onPress={() => {
              console.log("CLCIKCCED");

            }}>Invite a friend</Text>
            <Text style={{ fontSize: 20, color: "black", marginLeft: 20, marginTop: 10 }}>Contacts</Text>
            <Text style={{ fontSize: 20, color: "black", marginLeft: 20, marginTop: 10 }}>Refresh</Text>
            <Text style={{ fontSize: 20, color: "black", marginLeft: 20, marginTop: 10 }}>Help</Text>

          </View>

        </Pressable>

      </Modal>


    </View >

  );
}

export default MyStack;
