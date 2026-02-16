import { View, Text, Image, TextInput, TouchableOpacity, Alert, FlatList, ScrollView, SectionList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const CoreComponents = () => {
    const [name, setName] = useState("");
    return (
        <SafeAreaView onLayout={(event) => {
            console.log("This is my size", event.nativeEvent.layout)
        }} style={{
            backgroundColor: '#ff5d7d',
            flex: 1
        }}>
            <View style={{
                width: 400, height: 200, backgroundColor: 'orange'
            }}></View>
            <Text style={{
                fontSize: 25
            }} numberOfLines={2}>CoreComponents sdf dfojknosidn fsdfj sidf iosdfjosidjfo sidjfoij isd sodmalsdkm sidfjnikjn</Text>
            <Image source={{
                uri: 'https://img.freepik.com/free-photo/blue-car-driving-road_114579-4056.jpg?semt=ais_user_personalization&w=740&q=80'
            }} style={{
                width: 300, height: 200
            }} />
            <TextInput onChangeText={text => {
                setName(text)
            }} style={{
                width: 300, height: 50, borderWidth: 1
            }} value={name} placeholder='Enter your email' editable={true} />

            <TouchableOpacity style={{
                borderRadius: 20,
                backgroundColor: "#fff",
                width: 200,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center'
            }}
                onPress={() => {
                    Alert.alert("Are you sure")
                }}>
                <Text>Login</Text>
            </TouchableOpacity>

            <FlatList data={[1, 1, 1, 1, 1, 1]} renderItem={({ item, index }) => (

                <View style={{
                    width: 300,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: "center",
                    backgroundColor: "#f2f2f2",
                    marginTop: 10
                }}>
                    <Text>{item}</Text>
                </View>
            )} />

            <SectionList sections={[{ data: [1, 2, 2, 3, 3], title: 'clothes' }, { data: [3, 4, 5, 5], title: 'Mobile' }]} renderItem={({ item, index }) => (

                <View style={{
                    width: 300,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: "center",
                    backgroundColor: "#f2f2f2",
                    marginTop: 10
                }}>
                    <Text>{item}</Text>
                </View>
            )} renderSectionHeader={({ section: { title } }) => {
                return <Text>{title}</Text>
            }} />
        </SafeAreaView>
    )
}

export default CoreComponents