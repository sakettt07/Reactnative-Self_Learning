import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='ScreenA' component={ScreenA} options={{
                    title: "ScreenA"
                }} />
                <Stack.Screen name='ScreenB' component={ScreenB} options={{
                    title: "ScreenB"
                }} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default StackNavigator