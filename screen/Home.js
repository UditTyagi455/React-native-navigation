import { StyleSheet, Text, View, Image, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Tabscreenheader from "./Tabscreenheader";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import HomeItems from "./HomeItems";

// function HomeComponent(){
//   return(

//   )
// }

const Home = (props) => {
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = React.useState(false);
  // const Drawer = createDrawerNavigator();

  // const empty =async () => {
  //  await AsyncStorage.removeItem("token")
  // }
  // useEffect(() => {
  //   empty();
  // })

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
      <SafeAreaView style={{flex: 1,flexDirection: "column"}} >
        <ScrollView
          // style={styles.homepage}
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Tabscreenheader menu={true} back={false} />
          <HomeItems/>
        </ScrollView>
      </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homepage: {
    backgroundColor: "#64B6AC",
    flex: 1,
  },
 
  scrollView: {
    // flex: 1,
    // flexDirection: "column",
    backgroundColor: "black",
  },
});
