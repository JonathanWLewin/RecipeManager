import { TouchableOpacity, Text, View, TextInput } from "react-native";
import { globalStyles } from "./Styles";
import React, { useState } from 'react';

//Amplify
import { Auth } from "aws-amplify";



const Profile = ({ navigation }) => {
    return <CallSignInSignUp navigation = {navigation}></CallSignInSignUp>
};

async function SignOut() {
    try {
        await Auth.signOut();
        navigation.navigate('Profile')
    }
    catch(error) {
        console.log('Error signing out: ', error);
    }
}

async function SignIn(username, password) {
    try {
        await Auth.signIn(username, password);
        navigation.navigate('Profile')
        console.log('Successfully Signed in');
    } catch (error) {
        console.log('error signing in', error);
    }
}

async function CheckIfUserIsAuthenticated() {
    try {
        var user = await Auth.currentAuthenticatedUser({
            bypassCache: true
        })
        console.log('User: ', user);
        return true;
    }
    catch(error) {
        console.log('User is not authenticated');
        return false;
    }
}

async function RetrieveCurrentUser() {
    try {
        var user = await Auth.currentAuthenticatedUser({
            bypassCache: true
        })
        return user;
    }
    catch(error) {
        console.log('User is not authenticated');
        return null;
    }
}

const CallSignInSignUp = (props) => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    CheckIfUserIsAuthenticated().then(response => {
        setIsSignedIn(response);
    });

    console.log(isSignedIn);
    if (isSignedIn) {
        return (
            <UserSignedIn></UserSignedIn>
        )
    }
    else {
        return (
            <UserNotSignedIn navigation={props.navigation}></UserNotSignedIn>
        )
    }
}

const UserSignedIn = (props) => {
    return (
        <View style={globalStyles.container}>
            <Text>
                {props.username}
            </Text>
            <TouchableOpacity 
                onPress={() => SignOut()}
                style={globalStyles.button}>
                <Text style={globalStyles.buttonTextStyle}>Sign-Out</Text>
            </TouchableOpacity>
        </View>
    )
}

const UserNotSignedIn = (props) => {
    const [username, onChangeUsername] = useState("");
    const [password, onChangePassword] = useState("");
    return (
        <View style={globalStyles.container}>
            <TextInput
                style={globalStyles.input}
                onChangeText={onChangeUsername}
                placeholder="Username"
                value={username}
                onSubmitEditing={() => SignIn(username, password)}
            ></TextInput>
            <TextInput
                style={globalStyles.input}
                onChangeText={onChangePassword}
                placeholder="Password"
                value={password}
                onSubmitEditing={() => SignIn(username, password)}
            ></TextInput>
            <TouchableOpacity 
                onPress={() => SignIn(username, password, props.navigation)}
                style={globalStyles.button}>
                <Text style={globalStyles.buttonTextStyle}>Sign-In</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => props.navigation.navigate('Sign Up')}
                style={globalStyles.button}>
                <Text style={globalStyles.buttonTextStyle}>Sign-Up</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile;