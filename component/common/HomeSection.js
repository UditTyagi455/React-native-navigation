import { StyleSheet, Text, View, Image, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useCallback } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator, DrawerActions } from "@react-navigation/drawer";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Loktaklake } from "../../api/Images/Images";
// import { Lonarlake } from "../api/Images/Images";
// import { Snowvalley } from "../api/Images/Images";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import Home_Page from "../../api/Images/Demo_data";

const HomeSection = ({ title, description, allData }) => {
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = React.useState(false);
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);
  const [numberOfLine, setNumberOfLine] = useState(4);

  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const detailScreen = (_id, name,myArray,description) => {
    navigation.navigate("Details", {
         id: _id, 
         name: name,
         selectedLake: myArray,
         description: description 
        });
  };

  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= 4);
  }, []);
  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={[styles.Hometext, { marginLeft: 18, color: "#E7F0FF" }]}>
        {title}
      </Text>
      <Text
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : numberOfLine}
        style={{
          fontWeight: "400",
          fontSize: 18,
          // textAlign: "center",
          marginTop: 10,
          marginHorizontal: 15,
          color: "white",
          lineHeight: 21,
        }}
      >
        {description}
      </Text>
      {lengthMore ? (
        <Text
          onPress={toggleNumberOfLines}
          style={{
            lineHeight: 21,
            marginTop: 5,
            marginLeft: 10,
            color: "white",
          }}
        >
          {textShown ? "Read less..." : "Read more..."}
        </Text>
      ) : null}

      <ScrollView horizontal={true} style={styles.allimages} showsHorizontalScrollIndicator={false}>
        {allData.lakeImages.map((ele) => {
          return (
            <TouchableWithoutFeedback
              key={ele.id}
              onPress={() => detailScreen(ele.id,allData.title,allData.lakeImages,allData.description)}
            >
              <Image source={{ uri: ele.url }} style={styles.images2} />
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HomeSection;

const styles = StyleSheet.create({
  homepage: {
    backgroundColor: "#B9BEA5",
    flex: 1,
  },
  openDrawer: {
    padding: 20,
  },
  Hometext: {
    flex: 1,
    alignItems: "center",
    fontWeight: "800",
    fontSize: 22,
    marginTop: 15,
    marginLeft: 10,
    color: "white",
  },
  allimages: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  images1: {
    height: 300,
    width: 350,
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
});
