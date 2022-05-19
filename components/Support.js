import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { globalStyles } from "./Styles";
export default function Support() {
    
    const [donation, onChangeDonation] = React.useState("");

    return (
        <View style={globalStyles.container}>
            <TextInput
                style={globalStyles.input}
                onChangeText={onChangeDonation}
                placeholder="Donation Amount"
                value={donation}
                onSubmitEditing={() => alert(`You are donating $${donation}`)}
                >
            </TextInput>
            <TouchableOpacity 
            onPress={() => alert(`You are donating $${donation}`)}
            style={globalStyles.button}>
                <Text style={globalStyles.buttonTextStyle}>Donate</Text>
            </TouchableOpacity>
        </View>
    )
}