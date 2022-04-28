import { TouchableOpacity, Text, View } from "react-native";
import { globalStyles } from "./Styles";

export default function Ingredients() {
    return (
        <View style={globalStyles.ingredientsContainer}>
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
};