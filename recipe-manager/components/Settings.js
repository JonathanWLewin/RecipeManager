import { TouchableOpacity, Text, View } from "react-native";
import { globalStyles } from ".components/Styles";

export default function Settings() {
    return (
        <View style={globalStyles.settingsContainer}>
            <TouchableOpacity 
            onPress={() => alert('You are now in the Notification Manager tab')}
            style={globalStyles.button}>
                <Text style={globalStyles.buttonTextStyle}>Notification Manager</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => alert('You are now in the Sign In/ Sign Up tab')}
            style={globalStyles.button}>
                <Text style={globalStyles.buttonTextStyle}>Sign In/ Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}