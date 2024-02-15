import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Camera, useCameraDevice } from 'react-native-vision-camera'
import ImagePicker from 'react-native-image-crop-picker';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
type videoProps = {
    setselctedVideo?: (videopath: string) => void;
}

const Videos = (props: videoProps) => {
    const [dataVideo, setDataVideo] = useState(null);
    const [isFrontCamera, setIsFrontCamera] = useState(false)
    const device = useCameraDevice(isFrontCamera ? "front" : "back");
    const [isRecording, setIsRecording] = useState(false);
    const [flashlight, setFlashlight] = useState(false);
    const [isfirstTime, setFirstTime] = useState(false);
    const [timer, setTimer] = useState(0);
    console.log(timer, "dggfg")
    const camera = useRef<Camera>(null);

    console.log(isFrontCamera)
    console.log(dataVideo)

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isRecording) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
                console.log(timer)
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRecording]);

    const formatTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        const addLeadingZero = (value: number) => (value < 10 ? `0${value}` : `${value}`);

        return `${addLeadingZero(hours)}:${addLeadingZero(minutes)}:${addLeadingZero(remainingSeconds)}`;
    };



    const cameraVideoStart = async () => {
        try {
            if (!isRecording) {
                const recording = await camera.current?.startRecording({
                    onRecordingFinished: async (video) => {
                        try {
                            setDataVideo(video.path);
                            props.setselctedVideo(video.path);
                            const path = video.path;
                            const save = await CameraRoll.save(`file://${path}`, {
                                type: 'video',
                            });
                            console.log("save video", save)
                            console.log(isRecording, "hfhfhfhhfh");
                        } catch (error) {
                            console.error("Error saving video:", error);
                        }
                    },
                    onRecordingError: (error) => {
                        console.error("Recording error:", error);
                    },
                });
                setIsRecording(true);
            } else {
                const stop = await camera.current?.stopRecording();
                setIsRecording(false);
            }
        } catch (error) {
            console.error("Error in cameraVideoStart:", error);
        }
    };

    // const CameraVideoStop = async () => {
    //     try {


    //     } catch (error) {
    //         console.log(error)

    //     }

    // }

    const videoPicker = () => {
        ImagePicker.openPicker({
            mediaType: "video",
        }).then((video) => {
            props.setselctedVideo(video.path)
            console.log(video.path);

        });

    }
    if (device == null) return <ActivityIndicator />;
    return (
        <View style={{ flex: 1 }}>



            <Camera
                ref={camera}
                video={true}
                style={StyleSheet.absoluteFill}
                audio={true}
                device={device}
                isActive={true}
                torch={flashlight ? "on" : "off"}
            />
            <TouchableOpacity style={{ alignItems: "flex-end", right: 10 }} onPress={() => setFlashlight(!flashlight)}>
                {flashlight ?
                    <Entypo name="flash" size={25} color={"white"} /> :
                    <Ionicons name="flash-off" size={25} color={"white"} />
                }
            </TouchableOpacity>
            <View>
                <View style={{ height: "100%" }}>


                    {isRecording ?
                        <View style={{ width: 80, height: 30, backgroundColor: "red", borderRadius: 20, alignSelf: "center", position: "absolute" }}>
                            <Text style={{ color: 'black', fontSize: 20 }}>{formatTime(timer)}</Text>
                        </View> : null}



                    {/* <TouchableOpacity style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: "white", alignSelf: "flex-end", justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "red" }} onPress={() => cameraVideoStart()}>

                    </TouchableOpacity>
                </TouchableOpacity>` */}
                    <View style={{ flexDirection: "row", justifyContent: "space-around", height: "95%", width: "100%", alignItems: "flex-end", marginBottom: 10 }}>
                        <TouchableOpacity style={{ width: 50, height: 50, borderColor: "black", borderRadius: 25, backgroundColor: "#4f5458", alignItems: "center", justifyContent: "center", alignSelf: "flex-end" }} onPress={() => videoPicker()}>
                            <Image source={require("../../../images/image.png")} style={{ height: 30, width: 30, backgroundColor: "#212a2f", borderRadius: 15, tintColor: "white" }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "white", alignSelf: "flex-end", justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity style={{ width: 20, height: 20, borderRadius: 20, backgroundColor: "red" }} onPress={() => cameraVideoStart()}></TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "#4f5458", alignItems: "center", justifyContent: "center", alignSelf: "flex-end" }} onPress={() => setIsFrontCamera(!isFrontCamera)}>
                            <Image source={require("../../../images/rotate.png")} style={{ height: 30, width: 30, backgroundColor: "#212a2f", borderRadius: 25, tintColor: "white" }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>



    )
}

export default Videos