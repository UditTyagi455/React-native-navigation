import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Home from './Home';
import Search from './Search';
import Community from './Community';
import Chats from './Chats';

const Bottomnavigator = () => {
  const Bottomtabs = createBottomTabNavigator();
  return (
    <View
          style={{
            flex: 1,
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: 'green',
          }}>
    <Bottomtabs.Navigator screenOptions={({route}) => ({
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focused}) =>(
                      
                            <View style= {[
                                {
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  alignContent: 'center',
                                  flex: 1,
                                  paddingLeft: 25,
                                  paddingRight: 25,
                                  borderTopWidth: 3,
                                },     
                                focused ? {borderColor: '#f87f81'}
                                : {borderColor: '#fff'}, 
                      ]}>
            
                        {route.name == 'Home' && focused ? (
                      <Image
                        source={require('../assets/img/home.png')}
                        style={{height: 20, width: 25}}
                      />
                    ) : null}
                    {route.name == 'Home' && !focused ? (
                      <Image
                        source={require('../assets/img/home.png')}
                        style={{height: 20, width: 25}}
                      />
                    ) : null}
                    
                    {route.name == 'Search' && focused ? (
                      <Image
                        source={require('../assets/img/search.png')}
                        style={{height: 25, width: 25}}
                      />
                    ) : null}
                    {route.name == 'Search' && !focused ? (
                      <Image
                        source={require('../assets/img/search.png')}
                        style={{height: 25, width: 25}}
                      />
                    ) : null}
                    
                    {route.name == 'Chat' && focused ? (
                      <Image
                        source={require('../assets/img/chat.png')}
                        style={{height: 25, width: 25}}
                      />
                    ) : null}
                   {route.name == 'Chat' && !focused ? (
                      <Image
                        source={require('../assets/img/chat.png')}
                        style={{height: 25, width: 25}}
                      />
                    ) : null}

                    {route.name == 'Community' && focused ? (
                      <Image
                        source={require('../assets/img/group-users.png')}
                        style={{height: 25, width: 25}}
                      />
                    ) : null}
                   {route.name == 'Community' && !focused ? (
                      <Image
                        source={require('../assets/img/group-users.png')}
                        style={{height: 25, width: 25}}
                      />
                    ) : null}
                            </View>
                    ), 
                  })
                  }>
      <Bottomtabs.Screen name="Home" component={Home}/>
      <Bottomtabs.Screen name="Search" component={Search}/>
      <Bottomtabs.Screen name="Chat" component={Chats}/>
      <Bottomtabs.Screen name="Community" component={Community}/>
    </Bottomtabs.Navigator>
    </View>
  )
}

export default Bottomnavigator

const styles = StyleSheet.create({})