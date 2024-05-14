import { Pressable, StatusBar, TextInput, View, Text } from 'react-native';
import Undo from '../Utils/Icon/Undo';



export default function ({navigation}) {


    return (

        <View style={{ flex: 1 }}>
            <StatusBar />
            <View style={{ flex: 1, alignContent: 'center', gap: 5, padding: 5 }}>
                <View style={{ height: 30 }}>
                    <Pressable>
                        <Undo height={34} onPress={()=>{
                            navigation.navigate('Home')
                        }}></Undo>
                    </Pressable>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-end', alignContent: 'center', height: 100 }}>
                        <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#383826', textAlign: 'center' }}>Nuevo File</Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', gap: 5 }}>
                        <View style={{ height: 200, justifyContent: 'center', alignItems: 'center ' }}>
                            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', gap: 4, padding: 2 }}>
                                <View style={{ flex: 1, backgroundColor: '#FFE256', height: '60%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#383826' }}>Work Order</Text>
                                </View>
                                <View style={{ flex: 1, borderColor: '#C1C1C1', borderWidth: 2, height: '60%', borderRadius: 10 }}>
                                    <TextInput keyboardType='numeric' style={{ fontSize: 22, fontWeight: 'bold', color: '#383826', alignItems: 'center', textAlign: 'center', flex: 1, padding: 2 }} textAlignVertical='center' ></TextInput>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', gap: 4, padding: 2 }}>
                                <View style={{ flex: 1, backgroundColor: '#FFE256', height: '60%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#383826' }}>N° Metales</Text>
                                </View>
                                <View style={{ flex: 1, borderColor: '#C1C1C1', borderWidth: 2, height: '60%', borderRadius: 10, }}>
                                    <TextInput keyboardType='numeric' style={{ fontSize: 22, fontWeight: 'bold', color: '#383826', alignItems: 'center', textAlign: 'center', flex: 1 }} textAlignVertical='center' ></TextInput>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: '#383826', borderRadius: 10 }}>
                            <Pressable>
                                <Text style={{ color: '#FFFF', fontSize: 18, fontWeight: 'bold' }}>EMPEZAR A TOMAR FOTOS</Text>
                            </Pressable>
                        </View>
                    </View>

                </View>

            </View>
        </View>
    )
}