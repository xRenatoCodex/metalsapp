import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App({navigation}) {

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.maincontainer}>
        <View style={{ flex: 10, flexDirection: 'column', position: 'relative', justifyContent: 'center' }}>
          <Image source={require("../assets/MetalesImage.png")} alt="MetalesIcons" style={styles.image} />
          <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', transform: [{ translateY: 50 }] }}>
            <Text style={{ ...styles.text, ...{ fontSize: 40, color: '#606060' } }} >Metales</Text>
          </View>
        </View>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity style={styles.buttons}
            onPress={()=>{
              navigation.navigate('NFile')
            }}
          >
            <Text style={styles.text} >Tomar Fotots</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.buttons, ...{ backgroundColor: '#383826' } }} >
            <Text style={{ ...styles.text, ...{ color: '#FFFF' } }}>Historial</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column'
  },
  maincontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFF'
  },
  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  buttons: {
    borderRadius: 10,
    borderColor: '#383826',
    borderWidth: 2,
    flex: 1,
    height: '80%',
    backgroundColor: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    flex: 1,
    objectFit: 'scale-down',

  },
  text: {

    fontWeight: '900',
    fontSize: 13,
    color: '#383826',
  }


});