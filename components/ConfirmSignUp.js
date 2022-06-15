//React
import { TouchableOpacity, Text, View, TextInput } from "react-native";
import React, { useState } from 'react';

//Styles
import { globalStyles } from "./Styles";

//Amplify
import { Auth } from 'aws-amplify';

async function ConfirmSignUpThroughAws(code, username, navigation) {
    try {
        console.log(`Confirming username - ${username}`);
      await Auth.confirmSignUp(username, code);
      navigation.navigate('Profile');
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}

const ConfirmSignUp = ({ navigation, route }) => {
    const [verificationCode, onChangeverificationCode] = useState("");

    return (
       <View>
            <Text>
                Verification Code
            </Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={onChangeverificationCode}
                value={verificationCode}
            ></TextInput>
            <TouchableOpacity
            onPress={() => ConfirmSignUpThroughAws(verificationCode, route.params.username, navigation)}>
                <Text>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    )
};


export default ConfirmSignUp