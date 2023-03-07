import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context"
import { ScrollView } from 'react-native-gesture-handler'
import Tabscreenheader from './Tabscreenheader'

const Aboutus = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Tabscreenheader menu={false} back={true} title="About Us"/>
      <View>
        <Text>Aboutus</Text>
     </View>
      </ScrollView>
    </SafeAreaView>
    
  )
}

export default Aboutus

const styles = StyleSheet.create({})