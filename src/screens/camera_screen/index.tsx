import { View, ActivityIndicator, StyleSheet, TouchableOpacity, Image, Text, ImageBackground } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Camera, CameraCaptureError, useCameraDevice } from 'react-native-vision-camera';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import Video from 'react-native-video';
import AntDesign from "react-native-vector-icons/AntDesign"

import Photo from './photo';;
import Videos from './video';
import { useNavigation } from '@react-navigation/native';


const MyCamera = () => {
    const [selectedbutton, setSelectedButton] = useState(1);
    const [selctedImage, setselctedImage] = useState("");
    const [selectedVideo, setSelectedVideo] = useState("");
    const [selectedImagegallery, setselectedImagegallery] = useState(null);

    console.log(selctedImage, "===selctedImage")
    console.log(selectedVideo, "videos")
    const navigation = useNavigation();



    useEffect(() => {
        PermissionHandler();
    }, []);

    const PermissionHandler = async () => {
        await Camera.requestCameraPermission();
        await Camera.requestMicrophonePermission();
    };







    const handleButton = (index: number) => {
        console.log(index);
        setSelectedButton(index);
    };




    console.log(selectedVideo, "aatfsdfiye");

    return (
        <View style={{ flex: 1 }}>
            {selctedImage == "" && selectedVideo == "" ? (
                <TouchableOpacity style={{ marginTop: 15, marginLeft: 15, width: 20 }} onPress={() => navigation.goBack()}>
                    <AntDesign name="close" size={25} color="grey" />
                </TouchableOpacity>
            ) : null}



            {selectedVideo !== '' ?
                <>
                    <TouchableOpacity style={{ marginTop: 15, marginLeft: 15 }} onPress={() => setSelectedVideo("")}>
                        <AntDesign name="close" size={25} color="grey" />
                    </TouchableOpacity>
                    <Video
                        source={{ uri: selectedVideo }}
                        style={{
                            width: '100%',
                            height: '100%',


                        }}
                        resizeMode="contain"
                        controls={true}

                    >
                    </Video>
                </>



                : selctedImage !== "" ?
                    <>
                        <ImageBackground
                            style={{ width: "100%", height: "100%" }}
                            source={{ uri: "file://" + selctedImage }}
                        >
                            <TouchableOpacity style={{ marginTop: 15, marginLeft: 15 }} onPress={() => setselctedImage("")}>
                                <AntDesign name="close" size={25} color="grey" />
                            </TouchableOpacity>
                        </ImageBackground>
                    </>
                    : <>
                        {selectedbutton === 0 ? <Videos setselctedVideo={setSelectedVideo} /> : <Photo setselctedImage={setselctedImage} />}

                        {
                            selectedbutton === 0 ? (
                                <View style={{ flexDirection: "row", width: "100%", height: "12%", borderWidth: 1, backgroundColor: "#0b141b", paddingLeft: 150, paddingTop: 10 }}>
                                    <TouchableOpacity style={{ height: 30, width: 70, borderWidth: 1, borderColor: "#202d33", borderRadius: 20, justifyContent: "center", marginLeft: 20, backgroundColor: "#202d33" }} onPress={() => handleButton(0)}>
                                        <Text style={{ color: "white", textAlign: "center", fontSize: 15 }}>Video</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ height: 30, width: 70, borderWidth: 1, borderColor: "#202d33", borderRadius: 20, justifyContent: "center", marginLeft: 20, backgroundColor: "#202d33" }} onPress={() => handleButton(1)}>
                                        <Text style={{ color: "white", textAlign: "center", fontSize: 15 }}>Photo</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : <View style={{ flexDirection: "row", width: "100%", height: "12%", borderWidth: 1, backgroundColor: "#0b141b", paddingLeft: 70, paddingTop: 10 }}>
                                <TouchableOpacity style={{ height: 30, width: 70, borderWidth: 1, borderColor: "#202d33", borderRadius: 20, justifyContent: "center", marginLeft: 20, backgroundColor: "#202d33" }} onPress={() => handleButton(0)}>
                                    <Text style={{ color: "white", textAlign: "center", fontSize: 15 }}>Video</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ height: 30, width: 70, borderWidth: 1, borderColor: "#202d33", borderRadius: 20, justifyContent: "center", marginLeft: 20, backgroundColor: "#202d33" }} onPress={() => handleButton(1)}>
                                    <Text style={{ color: "white", textAlign: "center", fontSize: 15 }}>Photo</Text>
                                </TouchableOpacity>
                            </View>
                        }


                    </>}
        </View>
    );
};


export default MyCamera;
