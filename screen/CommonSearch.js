import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'

const CommonSearch = () => {
    const navigator = useNavigation()
    
    const pressMe = () => {
        navigator.navigate("Services")
    }
    useEffect(() =>{
        // console.log("component render")
    })
  return (
   
    <View style={{}}>
    <Pressable style={{margin: 5,paddingVertical: 5,paddingHorizontal: 5}} onPress={() => pressMe()}>
      <TextInput 
       placeholder='Search here..'/>
       <TouchableOpacity style={{padding: 5,
    backgroundColor: "#DCF763"}}>
        <Text>Search</Text>
       </TouchableOpacity>
    </Pressable>
    </View>
   
  )
}

export default CommonSearch

const styles = StyleSheet.create({})