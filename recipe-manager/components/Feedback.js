import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default function Feedback() {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            onPress={() => alert('You are now in the Feedback tab')}
            style={styles.button}>
                <Text style={styles.buttonTextStyle}>Feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => alert('You are now in the Donations tab')}
            style={styles.button}>
                <Text style={styles.buttonTextStyle}>Donations</Text>
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