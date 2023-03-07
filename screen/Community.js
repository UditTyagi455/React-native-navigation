import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {SafeAreaView} from "react-native-safe-area-context"
import { ScrollView } from 'react-native-gesture-handler';
import Tabscreenheader from './Tabscreenheader';

const Community = () => {
  return (
      <SafeAreaView>
      <ScrollView>
      <Tabscreenheader menu={true} back={false} title="Community"/>
      <View>
       <Text>Community</Text>
      </View>
      </ScrollView>
</SafeAreaView>
  )
}

export default Community

const styles = StyleSheet.create({})