import { StyleSheet, Text, View} from "react-native";
import React from "react";
import {useNavigation } from "@react-navigation/native";
import HomeSection from "../component/common/HomeSection";
import Home_Page from "../api/Images/Demo_data";
import { Video, ResizeMode } from 'expo-av';

const HomeItems = () => {
  const video = React.useRef(null);
  const navigation = useNavigation();
  const [status, setStatus] = React.useState({});

  return (
    <View>
      <View style={{flex:1,alignItems: "center"}}>
      <Text style={styles.Hometext}>Psithurism </Text>
      </View>
      <View >
      <Video
        ref={video}
        style={styles.backgroundVideo}
        source={{
          uri: 'https://mazwai.com/videvo_files/video/free/2018-12/small_watermarked/180607_A_090_preview.webm',
        }}
        useNativeControls={false}
        resizeMode={ResizeMode.CONTAIN}
        isLooping={true}
        shouldPlay={true}    
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      </View>
      <Text style={[styles.Hometext,{marginLeft: 18}]}>Beautiful Palaces :</Text>
      <View>
        {Home_Page?.map((item, index) => {
          return (
            <HomeSection
              title={item.title}
              description={item.description}
              allData={item}
              key={index}
            />
          );
        })}
      </View>
    </View>
  );
};

export default HomeItems;

const styles = StyleSheet.create({
  homepage: {
    backgroundColor: "#B9BEA5",
    flex: 1,
  },
  openDrawer: {
    padding: 20,
  },
  Hometext: {
    fontWeight: "800",
    fontSize: 25,
    color: "#4392F1",
    marginTop: 8,
  },
  allimages: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  images1: {
    height: 230,
    width: 400,
    // marginHorizontal: 3,
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
  backgroundVideo: {
    height:250,
    width: "100%",
  }
});
