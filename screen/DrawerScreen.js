import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react';
import {SafeAreaView} from "react-native-safe-area-context"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native";

const DrawerScreen = (props) => {
      const navigation = useNavigation();
  return (
      <SafeAreaView>

            <TouchableWithoutFeedback onPress={() => props.navigation.closeDrawer()} style={styles.closemenu}>
            <Image source={require("../assets/img/x-mark.png")} style={styles.crossIcon}/>
            </TouchableWithoutFeedback>

           <View style={styles.DrawerScreen}>
            <Text style={styles.listText} onPress={() => props.navigation.closeDrawer()}>Home</Text>
            <Text style={styles.listText} onPress={() => navigation.navigate("Services")}>Our Services</Text>
            <Text style={styles.listText} onPress={() => navigation.navigate("Aboutus")}>About Us</Text>
            <Text style={styles.listText} onPress={() => navigation.navigate("Contact")}>Contact Us</Text>
           </View>
      </SafeAreaView>
    
  )
}

export default DrawerScreen

const styles = StyleSheet.create({
      DrawerScreen: {
            padding: 10,
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
            borderBottomWidth: 2,
            fontSize: 16,
            fontWeight: "500"
      }
})