import { View, Text, Image } from 'react-native'
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Settings from './screens/Settings';
import Messages from './screens/Messages';
import CustomDrawer from './CustomDrawer';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{
                drawerStyle: {
                    backgroundColor: "#ff5d7d"
                },
                drawerActiveBackgroundColor: "#fff",
                drawerActiveTintColor: "#000",
                drawerInactiveTintColor: "#fff",
            }} drawerContent={props => <CustomDrawer {...props} />}>
                <Drawer.Screen name='Home' component={Home} options={{
                    drawerIcon: ({ size, focused }) => {
                        return (
                            <Image style={{
                                width: size, height: size, tintColor: focused ? "blue" : "black"
                            }} source={require('../../assets/images/home.png')} />
                        )
                    },
                    drawerLabel: ({ size, focused }) => {
                        return (
                            <Text style={{ color: focused ? 'blue' : "black", fontSize: 18 }}>{'Home'}</Text>
                        )
                    }
                }} />
                <Drawer.Screen name='Settings' component={Settings} options={{
                    drawerIcon: ({ size, focused }) => {
                        return (
                            <Image style={{
                                width: size, height: size, tintColor: focused ? "blue" : "black"
                            }} source={require('../../assets/images/setting.png')} />
                        )
                    },
                    drawerLabel: ({ size, focused }) => {
                        return (
                            <Text style={{ color: focused ? 'blue' : "black", fontSize: 18 }}>{'Settings'}</Text>
                        )
                    }
                }} />
                <Drawer.Screen name='Messages' component={Messages} options={{
                    drawerIcon: ({ size, focused }) => {
                        return (
                            <Image style={{
                                width: size, height: size, tintColor: focused ? "blue" : "black"
                            }} source={require('../../assets/images/email.png')} />
                        )
                    },
                    drawerLabel: ({ size, focused }) => {
                        return (
                            <Text style={{ color: focused ? 'blue' : "black", fontSize: 18 }}>{'Messages'}</Text>
                        )
                    }
                }} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigation;

// 27:30