import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyContext from "../component/CreateContextApi";
import Icon from 'react-native-vector-icons/Ionicons';

const Login = (props) => {
  const mytoken = useContext(MyContext);
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [validationSchema, setValidationSchema] = useState(
    Yup.object().shape({
      username: Yup.string().required("* Username required"),
      password: Yup.string().required("* password required"),
  })
  );

  const handleSubmit = (values) => {
    if (values.username == "" || values.password == "") return;
    if (values.username == "udittyagi455" && values.password == "123456") {
      AsyncStorage.setItem("token", "k@jdsklfl343lsdflksd");
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
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
      <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
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
            <Text style={styles.labels}>Log In</Text>
            <View style={styles.usernamePassword}>
              <TextInput
                style={styles.textField}
                onChangeText={handleChange("username")}
                value={values.username}
                placeholder="Username..."
                autoFocus={false}
              />
              <View style={styles.errorFieldWrap}>
                    {touched.username && errors.username && (
                      <Text style={styles.errorMessage}>{errors.username}</Text>
                    )}
                  </View>
            </View>
            <View>
              <TextInput
                style={styles.textField}
                onChangeText={handleChange("password")}
                value={values.password}
                placeholder="Password..."
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
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}>
                Login
              </Text>
            </TouchableWithoutFeedback>

            <View
              style={{
                // flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 15,
                // borderWidth: 5,
                // height: 40
              }}
            >
              <Text style={{ fontSize: 20 }}>New User?</Text>
              <Text
                style={{ color: "blue", fontSize: 20, paddingLeft: 5 }} onPress={() => navigation.navigate("Register")}
              >
                Register now..
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
    marginVertical: 28,
  },
  textField: {
    borderBottomWidth: 1,
    height: 35,
    borderColor: "#AB2346",
    // paddingHorizontal: 8,
    fontSize: 18,
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
