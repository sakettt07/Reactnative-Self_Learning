import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const CustomDrawer = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor: "rgba(213, 213, 108, 0.87)", alignItems: 'center'
        }}>
            <Image style={{
                width: 100, height: 100
            }} source={require("./../../assets/images/user.png")} />
            <Text style={{
                marginTop: 10
            }}>{'View Profile'}</Text>
            <TouchableOpacity style={{
                flexDirection: 'row', width: '90%', height: 50, marginTop: 10, gap: 10, backgroundColor: "#fff", alignItems: "center", paddingLeft: 10, borderRadius: 50
            }} onPress={() => {
                navigation.navigate("Home")
            }}>
                <Image style={{
                    width: 20, height: 20
                }} source={require("./../../assets/images/home.png")} />
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                flexDirection: 'row', width: '90%', height: 50, marginTop: 10, gap: 10, backgroundColor: "#fff", alignItems: "center", paddingLeft: 10, borderRadius: 50
            }} onPress={() => {
                navigation.navigate("Settings")
            }}>
                <Image style={{
                    width: 20, height: 20
                }} source={require("./../../assets/images/setting.png")} />
                <Text>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                flexDirection: 'row', width: '90%', height: 50, marginTop: 10, gap: 10, backgroundColor: "#fff", alignItems: "center", paddingLeft: 10, borderRadius: 50
            }} onPress={() => {
                navigation.navigate("Messages")
            }}>
                <Image style={{
                    width: 20, height: 20
                }} source={require("./../../assets/images/email.png")} />
                <Text>Messages</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default CustomDrawer