import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { globalStyles } from ".components/Styles";

export default function Ingredients() {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Shopping List')}
            style={globalStyles.button}>
                <Text style={globalStyles.buttonTextStyle}>Shopping List</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => alert('You are now in the Pantry tab')}
            style={globalStyles.button}>
                <Text style={globalStyles.buttonTextStyle}>Pantry</Text>
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