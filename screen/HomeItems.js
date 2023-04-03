import { StyleSheet, Text, View, Image, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator, DrawerActions } from "@react-navigation/drawer";
import Services from "./Services";
import Aboutus from "./Aboutus";
import Contactus from "./Contact";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Tabscreenheader from "./Tabscreenheader";
import Images from "../api/Images/Images";
import { Loktaklake } from "../api/Images/Images";
import { Lonarlake } from "../api/Images/Images";
import { Snowvalley } from "../api/Images/Images";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const HomeItems = () => {
    const navigation = useNavigation();

  const [refreshing, setRefreshing] = React.useState(false);
  return (
    <View>
    <Text style={styles.Hometext}>Loving Nature )</Text>
          <View style={{ flex: 1, alignItems: "center", marginTop: 15 }}>
            <Image source={{ uri: Images[0].url }} style={styles.images1} />
          </View>

          <View>
            <Text style={styles.Hometext}>Beautiful Palaces</Text>
            <Text
              style={[styles.Hometext, { marginLeft: 18, color: "#5F5AA2" }]}
            >
              1. Loktak Lake,Manipur
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 18,
                textAlign: "center",
                marginVertical: 5,
                marginHorizontal: 5,
                color: "white",
              }}
            >
              Loktak Lake is a freshwater lake in Northeast India. It is the
              largest freshwater lake in South Asia along with Manchar Lake in
              Pakistan. It is a pulsating lake, with surface area varying from
              250 sq km to 500 sq km during rainy season with a typical area of
              287 sq km.
            </Text>

            <ScrollView horizontal={true} style={styles.allimages}>
              {Loktaklake.map((ele) => {
                return (
                  <Image
                    source={{ uri: ele.url }}
                    style={styles.images2}
                    key={ele.id}
                  />
                );
              })}
            </ScrollView>
          </View>

          <View>
            <Text
              style={[styles.Hometext, { marginLeft: 18, color: "#5F5AA2" }]}
            >
              2. Lonar Lake,Maharashtra
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 18,
                textAlign: "center",
                marginVertical: 5,
                marginHorizontal: 5,
                color: "white",
              }}
            >
              Lonar Lake, also known as Lonar crater, is a notified National
              Geo-heritage Monument, saline, soda lake, located at Lonar in
              Buldhana district, Maharashtra, India. Lonar Lake is an astrobleme
              created by a meteorite impact during the Pleistocene Epoch.
            </Text>

            <ScrollView horizontal={true} style={styles.allimages}>
              {Lonarlake.map((ele) => {
                return (
                  <Image
                    source={{ uri: ele.url }}
                    style={styles.images2}
                    key={ele.id}
                  />
                );
              })}
            </ScrollView>
          </View>

          <View style={{ marginBottom: 30 }}>
            <Text
              style={[styles.Hometext, { marginLeft: 18, color: "#5F5AA2" }]}
            >
              3. Snow Valley, Kashmir
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 18,
                textAlign: "center",
                marginVertical: 5,
                marginHorizontal: 5,
                color: "white",
              }}
            >
              The Kashmir Valley, also known as the Vale of Kashmir, is an
              intermontane valley concentrated in the Kashmir Division of Jammu
              and Kashmir, India.The valley is surrounded by ranges of the
              Himalayas, bounded on the southwest by the Pir Panjal Range and on
              the northeast by the greater Himalayan range.
            </Text>

            <ScrollView horizontal={true} style={styles.allimages}>
              {Snowvalley.map((ele) => {
                return (
                  <Image
                    source={{ uri: ele.url }}
                    style={styles.images2}
                    key={ele.id}
                  />
                );
              })}
            </ScrollView>
          </View>
          </View>
  )
}

export default HomeItems

const styles = StyleSheet.create({
    homepage: {
        backgroundColor: "#64B6AC",
        flex: 1,
      },
      openDrawer: {
        padding: 20,
      },
      Hometext: {
        flex: 1,
        alignItems: "center",
        fontWeight: "bold",
        fontSize: 22,
        marginTop: 15,
        marginLeft: 10,
        color: "white",
      },
      allimages: {
        marginTop: 20,
      },
      images1: {
        height: 250,
        width: 320,
        marginHorizontal: 3,
        borderRadius: 5,
      },
      images2: {
        height: 150,
        width: 150,
        marginHorizontal: 3,
        borderRadius: 5,
      },
      scrollView: {
        // flex: 1,
        // flexDirection: "row",
        // flexWrap: "wrap",
        // width: "100%",
        backgroundColor: "gray",
        // alignItems: 'center',
        // justifyContent: 'center',
        // zIndex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
      },
})