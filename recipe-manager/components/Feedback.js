import { TouchableOpacity, Text, View } from "react-native";
import { globalStyles } from ".components/Styles";

export default function Feedback() {
    return (
        <View style={globalStyles.feedbackContainer}>
            <TouchableOpacity 
            onPress={() => alert('You are now in the Feedback tab')}
            style={globalStyles.button}>
                <Text style={globalStyles.buttonTextStyle}>Feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => alert('You are now in the Donations tab')}
            style={globalStyles.button}>
                <Text style={globalStyles.buttonTextStyle}>Donations</Text>
            </TouchableOpacity>
        </View>
    )
};