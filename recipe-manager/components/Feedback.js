import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Feedback() {

    const [feedback, onChangeFeedback] = React.useState("");

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeFeedback}
                placeholder="Feedback"
                value={feedback}
                onSubmitEditing={() => alert(`Thank you for your feedback - ${feedback} - it's going in the bin.`)}
                >
            </TextInput>
            <TouchableOpacity 
            onPress={() => alert(`Thank you for your feedback - ${feedback} - it's going in the bin.`)}
            style={styles.button}>
                <Text style={styles.buttonTextStyle}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    },
    button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 100,
    },
    buttonTextStyle: {
    color: '#fff',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: '#000',
    },
})
