import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const ScreenB = ({ navigation }) => {
    const route = useRoute();
    return (
        <View style={{
            flex: 1
        }}>
            <Text>ScreenB {route.params.user.email}</Text>
            <Button title='go back' onPress={() => navigation.goBack()}></Button>
        </View>
    )
}

export default ScreenB;