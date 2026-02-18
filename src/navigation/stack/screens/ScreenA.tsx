import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ScreenA = () => {
    const navigation = useNavigation();
    return (
        <View style={{
            flex: 1, justifyContent: "center", alignItems: "center"
        }}>
            <Button title='"Go to Screen B' onPress={() => {
                navigation.navigate('ScreenB', {
                    name: 'saket'
                })
            }} />
        </View>
    )
}

export default ScreenA;

//18:40