import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
// import Home from "./screen/Home";
import Drawernavigate from './screen/Drawernavigate';
import Aboutus from './screen/Aboutus';
import Services from './screen/Services';
import Contact from './screen/Contact';
import Tabscreenheader from './screen/Tabscreenheader';
import Login from './screen/Login';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from 'react';
import MyContext from './component/CreateContextApi';
import MyRoutes from './screen/MyRoutes';
import CommonSearch from './screen/CommonSearch';


export default function App() {
  const Stack = createStackNavigator();
  const [myToken,setMyToken] = useState(null);

  // const empty = async () => {
  //   await AsyncStorage.removeItem("token")
  // }

  useEffect(() => {
    AsyncStorage.getItem("token").then((res) => {
      setMyToken(res);
    });
    // empty();
  },[myToken]);


  
  return (
    <MyContext.Provider value={{myToken,setMyToken}}>
    <NavigationContainer>
      {/* <View>
        <CommonSearch/>
      </View> */}
      <MyRoutes/>
    </NavigationContainer>
    </MyContext.Provider>
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
