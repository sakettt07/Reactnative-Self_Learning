import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native'
import React, { useReducer, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, { id: Date.now().toString(), text: action.payload }]
        case "REMOVE_TODO":
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state;
    }
}

const UseReducer = () => {

    const [todos, dispatch] = useReducer(todoReducer, []);
    const [task, setTask] = useState('');

    return (
        <SafeAreaView>
            <Text>To-Do List</Text>
            <TextInput style={{
                borderWidth: 3, borderColor: "#000", color: "#000"
            }} value={task} onChangeText={setTask} placeholder='Add a task' />
            <Button title='Add' onPress={() => {
                dispatch({ type: "ADD_TODO", payload: task });
                setTask('')
            }} />
            <FlatList style={{
                marginTop: 8
            }} data={todos} keyExtractor={item => item.id} renderItem={({ item }) => (
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    alignItems: "center"
                }}>
                    <Text>
                        {item.text}
                    </Text>
                    <TouchableOpacity onPress={() => {
                        dispatch({ type: "REMOVE_TODO", payload: item.id });
                        setTask('')
                    }} style={{

                    }}><Text>Remove</Text></TouchableOpacity>
                </View>
            )} />
        </SafeAreaView>
    )
}

export default UseReducer