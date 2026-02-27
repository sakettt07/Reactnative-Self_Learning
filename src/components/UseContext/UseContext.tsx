import { View, Text } from 'react-native'
import React, { createContext } from 'react';

export const UserContext = createContext();
// use Contect tutorial in react native 
const UseContext = () => {
    return (
        <UserContext.Provider value={{
            name: "saket", email: "saket@gmail.com"
        }}>
            <View>
                <Text></Text>
            </View>
        </UserContext.Provider>
    )
}

export default UseContext