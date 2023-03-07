import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./screen/Home";
import Drawernavigate from './screen/Drawernavigate';
import Aboutus from './screen/Aboutus';
import Services from './screen/Services';
import Contact from './screen/Contact';
import Tabscreenheader from './screen/Tabscreenheader';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Drawernavigate' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Aboutus' component={Aboutus}/>
        <Stack.Screen name='Services' component={Services}/>
        <Stack.Screen name="Contact" component={Contact}/>
        <Stack.Screen name="Drawernavigate" component={Drawernavigate}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
