import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default function Login() {
    return (
        <View style={styles.container}>
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