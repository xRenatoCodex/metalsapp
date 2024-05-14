import { StatusBar, Text, View, TouchableOpacity } from "react-native";
import Back from '../Utils/Icon/Back'
import Gallery from '../Utils/Icon/Gallery'
import Right from '../Utils/Icon/Right'

import { Camera, CameraType } from 'expo-camera';
import { useRef, useState } from 'react';



export default function ({ navigation }) {

    const [permission, requestPermission] = Camera.useCameraPermissions();
    const my_camera = useRef(null)

    return (
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'space-between', padding: 5 }}>
            <StatusBar />
            <View style={{ height: 48, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Back height={34} />
                </TouchableOpacity>

                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#383826', fontWeight: 'bold', fontSize: 18 }}>file #WO</Text>
                </View>
            </View>

            <View style={{ flex: 1, }}>
                <View style={{ flex: 1, borderWidth: 2, borderRadius: 20, borderColor: '#D9D9D9' }}>
                    <Camera type={CameraType.back} style={{ flex: 1 }} ref={my_camera} >

                    </Camera>
                </View>
                <View style={{ height: 120, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <TouchableOpacity>
                        <View style={{ borderRadius: 10, height: 48, width: 120, backgroundColor: '#FFE600', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#383826' }}> Metal n°01</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderRadius: 10, height: 48, width: 120, backgroundColor: '#FFE600', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#383826' }}> Tapa</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity>
                    <Gallery height={36} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={(e) => {
                        (async () => { await my_camera.current.takePictureAsync({ imageType: 'png', quality: 1 }) })()
                    }}>
                    <View style={{ height: 36, width: 72, borderRadius: 20, backgroundColor: '#383826', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 10, width: 10, backgroundColor: '#FFE600', borderRadius: 10 }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Right height={36} />
                </TouchableOpacity>
            </View>

        </View>
    )
}