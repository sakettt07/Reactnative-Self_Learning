import { View, Text, Image } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Chat from './screens/Chat';
import Settings from './screens/Settings';
import CustomBottomTab from './CustomBottomTab';

// to avoid the notch area we will be adding 
const Bottom = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Bottom.Navigator screenOptions={{
            tabBarStyle: {
                height: 70
            },
            tabBarActiveBackgroundColor: "#ff5d7d"
        }} tabBar={(props) => <CustomBottomTab {...props} />}>
            <Bottom.Screen name='Home' component={Home} options={{
                headerShown: false, tabBarIcon: ({ size, color }) => {
                    return <Image style={{
                        width: size, height: size
                    }} source={require("../../assets/images/home.png")} />
                }
            }} />
            <Bottom.Screen name='Chat' component={Chat} options={{
                headerShown: false, tabBarIcon: ({ size, color }) => {
                    return <Image style={{
                        width: size, height: size
                    }} source={require("../../assets/images/email.png")} />
                }
            }} />
            <Bottom.Screen name='Settings' component={Settings} options={{
                headerShown: false, tabBarIcon: ({ size, color }) => {
                    return <Image style={{
                        width: size, height: size
                    }} source={require("../../assets/images/setting.png")} />
                }
            }} />
        </Bottom.Navigator>
    )
}

export default BottomTabNavigator