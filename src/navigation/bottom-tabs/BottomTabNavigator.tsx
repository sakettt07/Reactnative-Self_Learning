import { View, Text } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Chat from './screens/Chat';
import Settings from './screens/Settings';

// to avoid the notch area we will be adding 
const Bottom = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Bottom.Navigator>
            <Bottom.Screen name='Home' component={Home} options={{
                headerShown: false
            }} />
            <Bottom.Screen name='Chat' component={Chat} options={{
                headerShown: false
            }} />
            <Bottom.Screen name='Settings' component={Settings} options={{
                headerShown: false
            }} />
        </Bottom.Navigator>
    )
}

export default BottomTabNavigator