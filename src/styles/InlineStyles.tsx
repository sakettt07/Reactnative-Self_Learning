import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const InlineStyles = () => {
    return (
        <SafeAreaView style={{
            flex: 1, justifyContent: "center", alignItems: "center"
        }}>
            <Text style={{
                fontSize: 20
            }}>InlineStyles</Text>
        </SafeAreaView>
    )
}

export default InlineStyles