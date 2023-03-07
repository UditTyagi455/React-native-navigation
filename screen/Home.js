import {StyleSheet, Text, View } from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context"
import React from 'react';
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {createDrawerNavigator,DrawerActions} from "@react-navigation/drawer"
import Services from "./Services";
import Aboutus from "./Aboutus";
import Contactus from "./Contact"
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Tabscreenheader from './Tabscreenheader';
import Drawernavigate from './Drawernavigate';
import Bottomnavigator from './Bottomnavigator';

// function HomeComponent(){
//   return(
    
//   )
// }

const Home = (props) => {
  const navigation =useNavigation()
  // const Drawer = createDrawerNavigator();
  return (
   <>
    <SafeAreaView>
      <ScrollView>
       <Tabscreenheader menu={true} back={false}/>
      <Text style={styles.Hometext}>Home Component ≥</Text>
      {/* <Bottomnavigator/> */}
      </ScrollView>
      
    </SafeAreaView>
    
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  openDrawer: {
    padding: 20
  },
  Hometext: {
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 20
  }
})