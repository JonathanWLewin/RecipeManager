import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Support() {
    
    const [donation, onChangeDonation] = React.useState("");

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeDonation}
                placeholder="Donation Amount"
                value={donation}
                onSubmitEditing={() => alert(`You are donating $${donation}`)}
                >
            </TextInput>
            <TouchableOpacity 
            onPress={() => alert(`You are donating $${donation}`)}
            style={styles.button}>
                <Text style={styles.buttonTextStyle}>Donate</Text>
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