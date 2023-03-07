import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {SafeAreaView} from "react-native-safe-area-context"
import { ScrollView } from 'react-native-gesture-handler'
import Tabscreenheader from './Tabscreenheader';

const Contact = () => {
  return (
    <SafeAreaView>
 <ScrollView>
  <Tabscreenheader menu={false} back={true} title="Contact Us"/>
 <View>
      <Text>Contact</Text>
    </View>
</ScrollView>
    </SafeAreaView>
   
   
  )
}

export default Contact

const styles = StyleSheet.create({})