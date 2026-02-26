import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from './UseContext'

const CompC = () => {
    const newUser = useContext(UserContext);
    return (
        <View>
            <Text>CompC</Text>
        </View>
    )
}

export default CompC