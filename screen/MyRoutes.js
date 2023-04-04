import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Drawernavigate from './Drawernavigate';
import Aboutus from './Aboutus';
import Services from './Services';
import Contact from './Contact';
import Tabscreenheader from './Tabscreenheader';
import Login from './Login';
import MyContext from '../component/CreateContextApi';
import Root from './Root';
import Register from './Register';
import Details from './Details';

const MyRoutes = () => {
      const getMyToken = useContext(MyContext)
      const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName='root' screenOptions={{
         headerShown: false
       }}>
           <Stack.Screen name='root' component={Root}/>
           <Stack.Screen name='Aboutus' component={Aboutus}/>
           <Stack.Screen name='Services' component={Services}/>
           <Stack.Screen name="Contact" component={Contact}/>
           <Stack.Screen name="Drawernavigate" component={Drawernavigate}/>
           <Stack.Screen name='Login' component={Login} />
           <Stack.Screen name="Register" component={Register}/>
           <Stack.Screen name="Details" component={Details}/>
       </Stack.Navigator>
  )
}

export default MyRoutes ;
const styles = StyleSheet.create({})