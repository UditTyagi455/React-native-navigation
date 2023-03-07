import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {SafeAreaView} from "react-native-safe-area-context"
import { ScrollView } from 'react-native-gesture-handler'
import Tabscreenheader from './Tabscreenheader';

const Search = () => {
  return (
      <SafeAreaView>
            <ScrollView>
                  <Tabscreenheader menu={true} back={false} title="Search"/>
            <View>
              <Text>Search</Text>
            </View>
            </ScrollView>
      </SafeAreaView>
    
  )
}

export default Search

const styles = StyleSheet.create({})