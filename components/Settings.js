import { TouchableOpacity, Text, View } from "react-native";
import { globalStyles } from "./Styles";

export default function Settings() {
    return (
        <View style={globalStyles.container}>
            <TouchableOpacity 
            onPress={() => alert('You are now in the Notification Manager tab')}
            style={globalStyles.button}>
                <Text style={globalStyles.buttonTextStyle}>Notification Manager</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => alert('You are now in the Account Settings tab')}
            style={globalStyles.button}>
                <Text style={globalStyles.buttonTextStyle}>Account Settings</Text>
            </TouchableOpacity>
        </View>
    )
}