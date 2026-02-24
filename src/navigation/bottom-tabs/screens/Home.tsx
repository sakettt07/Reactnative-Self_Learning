import { View, Text, Dimensions, TextInput, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const Home = () => {
    const [orientation, setOrientation] = useState('Portrait');
    const inputRef = useRef(null);

    useEffect(() => {
        const handleOrientationChange = () => {
            const { width, height } = Dimensions.get('window');
            setOrientation(width > height ? 'Landscape' : 'Portrait');
        }
        const subscription = Dimensions.addEventListener(
            'change', handleOrientationChange
        );
        return () => {
            subscription.remove();  // necessary to avoid memory leak
        }
    }, [])
    return (
        <View>
            <Text>Understanding useState</Text>
            <TextInput ref={inputRef} style={{
                width: '90%', height: 50, borderWidth: 1, marginTop: 20
            }} />
            <Button onPress={() => {
                inputRef.current.focus();
            }} title='Focus Input' />
        </View>
    )
}

export default Home