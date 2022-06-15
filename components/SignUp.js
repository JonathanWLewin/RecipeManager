//React
import { TouchableOpacity, Text, View, TextInput } from "react-native";
import React, { useState } from 'react';

//Styles
import { globalStyles } from "./Styles";

//Amplify
import { Auth } from 'aws-amplify';

async function SignUpThroughCognito(username, password, email, phone_number, navigation) {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                phone_number,   // optional - E.164 number convention
                // other custom attributes 
            }
        });
        console.log(user);
        navigation.navigate('Confirm Sign Up', {username: username})
    } catch (error) {
        console.log('error signing up:', error);
    }
}

const SignUp = ({ navigation }) => {
    const [email, onChangeEmail] = useState("");
    const [username, onChangeUsername] = useState("");
    const [phoneNumber, onChangePhoneNumber] = useState("");
    const [password, onChangePassword] = useState("");

    return (
       <View>
            <Text>
                Email
            </Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={onChangeEmail}
                value={email}
            ></TextInput>
            <Text>
                Username
            </Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={onChangeUsername}
                value={username}
            ></TextInput>
            <Text>
                Phone Number
            </Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={onChangePhoneNumber}
                value={phoneNumber}
            ></TextInput>
            <Text>
                Password
            </Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={onChangePassword}
                value={password}
            ></TextInput>
            <TouchableOpacity
            onPress={() => SignUpThroughCognito(username, password, email, phoneNumber, navigation)}>
                <Text>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    )
};


export default SignUp