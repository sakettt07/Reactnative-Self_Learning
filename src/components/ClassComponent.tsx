import { Component, ReactNode } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomMyButton from "./CustomMyButton";

class ClassCompo extends Component {
    render(): ReactNode {
        return (
            <SafeAreaView>
                <Text>This is my class component</Text>
                <CustomMyButton />
            </SafeAreaView>
        )
    }
}
export default ClassCompo