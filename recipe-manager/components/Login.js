import { TouchableOpacity, Text, View } from "react-native";
import { globalStyles } from "./Styles";

export default function Login() {
    return (
        <View style={globalStyles.ingredientsContainer}>
            <TouchableOpacity 
            onPress={() => alert('You are now in the Sign-In tab')}
            style={styles.button}>
                <Text style={styles.buttonTextStyle}>Sign-In</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => alert('You are now in the Sign-Up tab')}
            style={styles.button}>
                <Text style={styles.buttonTextStyle}>Sign-Up</Text>
            </TouchableOpacity>
        </View>
    )
};