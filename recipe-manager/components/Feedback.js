import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { globalStyles } from ".components/Styles";

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
            style={globalStyles.button}>
                <Text style={globalStyles.buttonTextStyle}>Donations</Text>
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