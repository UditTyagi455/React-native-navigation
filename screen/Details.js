import { StyleSheet, Text, View, Image,Dimensions } from "react-native";
import React from "react";
import { Loktaklake } from "../api/Images/Images";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import Tabscreenheader from "./Tabscreenheader";

const Details = ({  route }) => {
  const _id = route.params.id;
  const result = route.params.selectedLake.filter((item) => item.id === _id);

  return (
    <SafeAreaView style={{height: Dimensions.get("screen").height}}>
      <ScrollView style={{backgroundColor: '#03254E',marginBottom: 45}}>
        <Tabscreenheader menu={false} back={true} title={route.params.name} />
        <View style={{ flex: 1, alignItems: "center", marginTop: 15 }}>
          {result?.map((ele, index) => {
            return (
              <Image
                source={{ uri: ele.url }}
                style={styles.DetailScreenImage}
                key={index}
              />
            );
          })}
          <Text
              style={{
                fontWeight: "400",
                fontSize: 18,
                textAlign: "center",
                marginVertical: 45,
                marginHorizontal: 5,
                color: "white",
              }}
            >
             {route.params.description}
            </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  DetailScreenImage: {
    height: 320,
    width: 380,
    marginHorizontal: 1,
    borderRadius: 5,
  },
});
