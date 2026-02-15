import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StylesSheetStyle = () => {
    return (
        <View>
            <Text>StylesSheetStyle</Text>
        </View>
    )
}

export default StylesSheetStyle

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})