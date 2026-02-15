import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'

const CoreComponents = () => {
    return (
        <View onLayout={(event) => {
            console.log("This is my size", event.nativeEvent.layout)
        }} style={{
            backgroundColor: '#ff5d7d',
            flex: 1
        }}>
            <View style={{
                width: 250, height: 250, backgroundColor: 'orange'
            }}></View>
            <Text style={{
                fontSize: 25
            }} numberOfLines={2}>CoreComponents sdf dfojknosidn fsdfj sidf iosdfjosidjfo sidjfoij isd sodmalsdkm sidfjnikjn</Text>
            <Image source={{
                uri: 'https://img.freepik.com/free-photo/blue-car-driving-road_114579-4056.jpg?semt=ais_user_personalization&w=740&q=80'
            }} style={{
                width: 300, height: 200
            }} />
            <TextInput style={{
                width: 300, height: 50, borderWidth: 1
            }} value='saket' placeholder='Enter your email' />
        </View>
    )
}

export default CoreComponents