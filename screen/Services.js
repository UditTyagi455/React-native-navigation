import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {SafeAreaView} from "react-native-safe-area-context"
import Tabscreenheader from './Tabscreenheader';
import { ScrollView } from 'react-native-gesture-handler';

const Services = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <Tabscreenheader menu={false} back={true} title="Our Services"/>
    <View>
      <Text>Services</Text>
    </View>
    </ScrollView>
</SafeAreaView>
  )
}

export default Services

const styles = StyleSheet.create({})