import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { globalStyles } from ".components/Styles";

export default function Settings() {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            onPress={() => alert('You are now in the Notification Manager tab')}
            style={globalStyles.button}>
                <Text style={globalStyles.buttonTextStyle}>Notification Manager</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => alert('You are now in the Sign In/ Sign Up tab')}
            style={styles.button}>
                <Text style={globalStyles.buttonTextStyle}>Sign In/ Sign Up</Text>
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
})