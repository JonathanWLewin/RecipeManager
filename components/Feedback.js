import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { globalStyles } from "./Styles";

export default function Feedback() {

    const [feedback, onChangeFeedback] = React.useState("");

    return (
        <View style={globalStyles.container}>
            <TextInput
                style={globalStyles.input}
                onChangeText={onChangeFeedback}
                placeholder="Feedback"
                value={feedback}
                onSubmitEditing={() => alert(`Thank you for your feedback - ${feedback} - it's going in the bin.`)}
                >
            </TextInput>
            <TouchableOpacity 
            onPress={() => alert(`Thank you for your feedback - ${feedback} - it's going in the bin.`)}
            style={globalStyles.button}>
                <Text style={globalStyles.buttonTextStyle}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
