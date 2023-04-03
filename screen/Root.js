import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Loktaklake } from '../api/Images/Images';

const Root = (props) => {

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('token')
      .then(res => {
        res
          ? props.navigation.reset({
              index: 0,
              routes: [{name: 'Drawernavigate'}],
            })
          : props.navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            });
      })
      .catch(err => {
        console.log(err);
      });
    }, 1000);
     
  },[])
  return (
    <View>
      <Image source={{uri: Loktaklake[0].url}} style={styles.rootImage}/>
    </View>
  )
}

export default Root

const styles = StyleSheet.create({
  rootImage: {
    height: 800
  }
})