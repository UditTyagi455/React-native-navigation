import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Touchable,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyContext from "../component/CreateContextApi";
import { Formik } from "formik";
import Icon from 'react-native-vector-icons/Ionicons';

const Login = (props) => {
  const mytoken = useContext(MyContext);
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show,setShow] = useState(false)

  const registerUser = async () => {
    if (username == "" || password == "") return;
    if (username == "udittyagi455" && password == "123456") {
      await AsyncStorage.setItem("token", "k@jdsklfl343lsdflksd");
      //  mytoken.setMyToken(await AsyncStorage.setItem('token',"k@jdsklfl343lsdflksd"));
      //  navigation.navigate("Drawernavigate");
      props.navigation.reset({
        index: 0,
        routes: [{ name: "Drawernavigate" }],
      });
    } else {
      alert("wrong username or password !!");
      setUsername("");
      setPassword("");
    }
  };
  const handleSubmit = (values) => {
    console.log("enterd values :::", values);
  };
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <Formik
          initialValues={{
            username: "",
            password: "",
            confirmpassword: ""
          }}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <View style={styles.fullScreen}>
              <View style={{ position: "absolute", top: 75, left: 35 }}>
                <Text style={[styles.labels, { color: "#fff", fontSize: 45 }]}>
                  Welcome
                </Text>
              </View>
              <View style={styles.loginscreen}>
                <Text style={styles.labels}>Register</Text>
                <View style={[styles.usernamePassword,{marginTop: 10}]}>
                  <TextInput
                    style={styles.textField}
                    onChangeText={handleChange("username")}
                    value={values.username}
                    placeholder="Username..."
                    autoFocus={true}
                  />
                </View>
                <View style={styles.usernamePassword}>
                  <TextInput
                    style={styles.textField}
                    onChangeText={handleChange("password")}
                    value={values.password}
                    placeholder="Password..."
                    secureTextEntry={true}
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.textField}
                    onChangeText={handleChange("confirmpassword")}
                    value={values.confirmpassword}
                    placeholder="Confirm Password..."
                    secureTextEntry={!show ? true : false}
                  />
                  {show ?
                  <Icon name="eye" color="#4F8EF7" size={30} style={{position: "absolute",top: 0,right: 5}} onPress={() => setShow(!show)}/> :
                  <Icon name="eye-off" color="#4F8EF7" size={30} style={{position: "absolute",top: 0,right: 5}} onPress={() => setShow(!show)}/> }
                </View>

                <TouchableWithoutFeedback
                  style={styles.loginButton}
                  onPress={handleSubmit}
                >
                  <Text
                    style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}
                  >
                    Register User
                  </Text>
                </TouchableWithoutFeedback>

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 15,
                  }}
                >
                  <Text style={{ fontSize: 20 }}>Existing User?</Text>
                  <Text
                    style={{ color: "blue", fontSize: 20, paddingLeft: 5 }}
                    onPress={() => navigation.navigate("Login")}
                  >
                    Login..
                  </Text>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  fullScreen: {
    height: Dimensions.get("screen").height,
    display: "flex",
    backgroundColor: "#7FBEEB",
  },
  loginscreen: {
    paddingHorizontal: 25,
    marginVertical: Dimensions.get("screen").height * 0.25,
    paddingVertical: 30,
    // flex: 1,
    // justifyContent: "center",
    backgroundColor: "#fff",
    height: "100%",
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
  },
  usernamePassword: {
    marginBottom: 28,
  },
  textField: {
    borderBottomWidth: 1,
    height: 35,
    borderColor: "#AB2346",
    // paddingHorizontal: 8,
    fontSize: 18,
    // marginBottom: 15
  },
  labels: {
    fontSize: 24,
    marginVertical: 8,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
  loginButton: {
    borderWidth: 1,
    padding: 8,
    marginTop: 25,
    display: "flex",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 50,
  },
});
