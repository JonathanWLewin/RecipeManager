import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default function Settings() {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            onPress={() => alert('You are now in the Notification Manager tab')}
            style={styles.button}>
                <Text style={styles.buttonTextStyle}>Notification Manager</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => alert('You are now in the Account Settings tab')}
            style={styles.button}>
                <Text style={styles.buttonTextStyle}>Account Settings</Text>
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
})