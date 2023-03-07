import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./Home";
import Aboutus from './Aboutus';
import Services from './Services';
import Contact from './Contact';
import DrawerScreen from './DrawerScreen';
import Tabscreenheader from './Tabscreenheader';
import Bottomnavigator from './Bottomnavigator';

const Drawernavigate = (props) => {
const Drawer = createDrawerNavigator();

  return (

   <Drawer.Navigator
   drawerContent={(props) => <DrawerScreen {...props} />}
   useLegacyImplementation={true}
   screenOptions={{
     drawerStyle: {
       width: "75%",
     },
   }}
 >
   <Drawer.Screen
     name="Bottomnavigator"
     component={Bottomnavigator}
     options={{
       header: () => null,
     }}
   />
 </Drawer.Navigator>
  )
}

export default Drawernavigate

const styles = StyleSheet.create({})