import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context"
import { ScrollView } from 'react-native-gesture-handler'
import Tabscreenheader from './Tabscreenheader'

const Chats = () => {
  return (
      <SafeAreaView>
            <ScrollView>
            <Tabscreenheader menu={true} back={false} title="Chat"/>
            <View>
             <Text>Chats</Text>
            </View>
            </ScrollView>
      </SafeAreaView>
    
  )
}

export default Chats

const styles = StyleSheet.create({})