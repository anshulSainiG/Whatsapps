import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ImageBackground, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import { Camera, useCameraDevice } from 'react-native-vision-camera'
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import ImagePicker from 'react-native-image-crop-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

type photoProps = {
    setselctedImage?: (imagepathj: string) => void;
}

const Photo = (props: photoProps) => {
    const [dataPhoto, setDataPhoto] = useState<string | null>(null);
    const [selectimage, setSelectImage] = useState<string | null>(null);
    const [flashlight, setFlashlight] = useState(false);
    console.log(selectimage, "===selectimage")
    const [isFrontCamera, setIsFrontCamera] = useState<boolean>(false);
    const device = useCameraDevice(isFrontCamera ? "front" : "back");
    const camera = useRef<Camera>(null);

    if (device == null) return <ActivityIndicator />;

    const cameraPhoto = async () => {
        try {
            const photo = await camera.current?.takePhoto();
            setDataPhoto(photo?.path || "");
            props.setselctedImage(photo?.path);

            const savephoto = await CameraRoll.saveToCameraRoll(photo?.path || '', 'photo');
            console.log(savephoto, "dgfgghhjh");
        } catch (error) {
            console.error(error);
        }
    };

    const imagePicker = () => {
        console.log("hhgvghhg")
        ImagePicker.openPicker({
            width: 300,
            height: 400,
        }).then(image => {
            console.log(image.path, "===image.path")
            setSelectImage(image.path);
            props.setselctedImage(image.path);
            console.log(image.path);
        });
    }
    // const flashlightbutton = async () => {
    //     const photo = await camera.current.takePhoto({
    //         flash: flashlight ? 'off' : 'on'
    //     });
    //     setFlashlight(!flashlight)
    //     console.log(photo, "photo");
    // };

    return (
        <View style={{ flex: 1 }}>



            <Camera
                ref={camera}
                style={StyleSheet.absoluteFill}
                device={device}
                photo={true}
                isActive={true}
                torch={flashlight ? "on" : "off"}
            />
            <TouchableOpacity style={{ alignItems: "flex-end", right: 10 }} onPress={() => setFlashlight(!flashlight)}>
                {flashlight ?
                    <Entypo name="flash" size={25} color={"white"} /> :
                    <Ionicons name="flash-off" size={25} color={"white"} />
                }
            </TouchableOpacity>



            <View style={{ height: "95%", flexDirection: "row", justifyContent: "space-around" }}>
                <TouchableOpacity style={{ width: 50, height: 50, borderColor: "black", borderRadius: 25, backgroundColor: "#4f5458", alignItems: "center", justifyContent: "center", alignSelf: "flex-end" }} onPress={() => imagePicker()}>
                    <Image source={require("../../../images/image.png")} style={{ height: 30, width: 30, backgroundColor: "#212a2f", borderRadius: 15, tintColor: "white" }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "white", alignSelf: "flex-end", justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "red" }} onPress={() => cameraPhoto()}></TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "#4f5458", alignItems: "center", justifyContent: "center", alignSelf: "flex-end" }} onPress={() => setIsFrontCamera(!isFrontCamera)}>
                    <Image source={require("../../../images/rotate.png")} style={{ height: 30, width: 30, backgroundColor: "#212a2f", borderRadius: 25, tintColor: "white" }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}



export default Photo;
