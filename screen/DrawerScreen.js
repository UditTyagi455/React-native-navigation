import { StyleSheet, Text, View,Image, Dimensions, StatusBar } from 'react-native'
import React, { useContext } from 'react';
import {SafeAreaView} from "react-native-safe-area-context"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyContext from '../component/CreateContextApi';

const DrawerScreen = (props) => {
      const setToken = useContext(MyContext);

      const navigation = useNavigation();
      const logout = async () => {
            await AsyncStorage.removeItem("token")
      // setToken.setMyToken(await AsyncStorage.setItem("token",""))
      
      // navigation.navigate("Login")
      props.navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          })
      }
  return (
      <SafeAreaView>
            <StatusBar />
      <View style={{height: Dimensions.get("screen").height}}>
            <TouchableWithoutFeedback onPress={() => props.navigation.closeDrawer()} style={styles.closemenu}>
            <Image source={require("../assets/img/x-mark.png")} style={styles.crossIcon}/>
            </TouchableWithoutFeedback>

           <View style={styles.DrawerScreen}>
            <Text style={[styles.listText,{borderBottomWidth: 2}]} onPress={() => navigation.navigate("Home")}>Home</Text>
            <Text style={[styles.listText,{borderBottomWidth: 2}]} onPress={() => navigation.navigate("Services")}>Our Services</Text>
            <Text style={[styles.listText,{borderBottomWidth: 2}]} onPress={() => navigation.navigate("Aboutus")}>About Us</Text>
            <Text style={[styles.listText]} onPress={() => navigation.navigate("Contact")}>Contact Us</Text>
            <Text style={[styles.listText,{position: "absolute",bottom: 130,paddingLeft: 20,borderTopWidth: 1,width: "100%",fontWeight: "300",fontSize: 20}]} onPress={() => logout()}>Logout -></Text>
           </View>
           </View>
      </SafeAreaView>
    
  )
}

export default DrawerScreen

const styles = StyleSheet.create({
      DrawerScreen: {
            padding: 10,
            height: "100%"
      },
      crossIcon: {
            height: 30,
            width: 30
      },
      closemenu: {
            marginTop: 20,
            marginLeft: 10
      },
      listText: {
            paddingVertical: 20,
            borderBottomColor: "#d8f2f2",
            
            fontSize: 16,
            fontWeight: "500"
      }
})