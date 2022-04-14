import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default function Ingredients() {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Shopping List')}
            style={styles.button}>
                <Text style={styles.buttonTextStyle}>Shopping List</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => alert('You are now in the Pantry tab')}
            style={styles.button}>
                <Text style={styles.buttonTextStyle}>Pantry</Text>
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