import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CustomBottomTab = ({ state, descriptors, navigation }) => {
    return (
        <View style={{
            width: '100%',
            flexDirection: 'row', justifyContent: 'space-evenly', alignItems: "center", height: 80, backgroundColor: 'white'
        }}>{
                state.routes.map((tab, index) => {
                    console.log('tab', tab);
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate(tab.name)
                        }} style={{
                            alignItems: 'center', gap: 10, borderTopColor: 'blue', borderTopWidth: state.index == index ? 2 : 0, height: '100%', justifyContent: 'center'
                        }}>
                            <Image style={{
                                width: 20, height: 20
                            }} source={tab.name == 'Home' ? require('../../assets/images/home.png') : tab.name == 'Settings' ? require('../../assets/images/setting.png') : tab.name == 'Chat' ? require('../../assets/images/email.png') : require('../../assets/images/home.png')} />
                            <Text style={{
                                color: state.index == index ? 'blue' : 'black'
                            }}>{tab.name}</Text>
                        </TouchableOpacity>
                    )
                })}
        </View>
    )
}

export default CustomBottomTab