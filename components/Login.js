import { TouchableOpacity, Text, View } from "react-native";
import { globalStyles } from "./Styles";

export default function Login() {
    return (
        <View style={globalStyles.container}>
            <TouchableOpacity 
            onPress={() => alert('You are now in the Sign-In tab')}
            style={globalStyles.button}>
                <Text style={globalStyles.buttonTextStyle}>Sign-In</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => alert('You are now in the Sign-Up tab')}
            style={globalStyles.button}>
                <Text style={globalStyles.buttonTextStyle}>Sign-Up</Text>
            </TouchableOpacity>
        </View>
    )
};