import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react';
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Tabscreenheader = ({menu=true,back=false,title="Welcome, Mate"}) => {
      const navigation = useNavigation();
  return (
    <View style={styles.tabHeader}>

      {menu && <TouchableWithoutFeedback onPress={() => navigation.openDrawer()} style={styles.closemenu}>
      <Image source={require("../assets/img/menu.png")} style={[styles.menuImage]}/>
      </TouchableWithoutFeedback>}
      
      {back && <TouchableWithoutFeedback onPress={() => navigation.goBack()} style={styles.closemenu}>
      <Image source={{uri: "https://static.thenounproject.com/png/251451-200.png"}} style={styles.menuImage}/>
      </TouchableWithoutFeedback>}

      <Text style={styles.welcomeText}>{title}</Text>
    </View> 
    )
}

export default Tabscreenheader

const styles = StyleSheet.create({
      tabscreen: {
            padding: 8,
            borderWidth: 2,
            borderColor: "black",
      },
      tabHeader: {
            backgroundColor: "#DCF763",
            height: 70,
            flex: 1,
            flexDirection: 'row',
      },
      menuImage:{
            height: 25,
            width: 25,
            marginTop: 25,
            marginLeft: 20,
      },
      welcomeText: {
            fontSize: 25,
            fontWeight: "bold",
            color: 'black',
            marginTop: 18,
            marginLeft: 20
      }
})