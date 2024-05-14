
import Main from './src/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewTakeFoto from './src/NewTakeFoto'
import CameraFoto from './src/CameraFoto'





export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Camera" screenOptions={{animation:'flip'}}>
        <Stack.Screen name="Home" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="NFile" component={NewTakeFoto} options={{ headerShown: false }} />
        <Stack.Screen name="Camera" component={CameraFoto} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
