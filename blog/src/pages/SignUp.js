import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Logo from "../components/Logo";
import Form from "../components/form";
import { Actions } from 'react-native-router-flux';


export default class SignUp extends React.Component {
    render() {
        return (
            <View style={sty.loginCon}>
                <Logo/>
                <Form type="SignUp"/>
                <View style={sty.signup}>
                    <Text style={sty.Text}>Already Having An Account ?</Text>
                    <Text style={sty.signuptext} onPress={() => Actions.login()}>Sign In</Text>
                </View>
            </View>
        );
    }
}

const sty = StyleSheet.create({
    loginCon:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    Text: {
        color: "#455a64",
        fontWeight: 'bold',
    },
    signup: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginVertical: 15,
        flexDirection: 'row',
    },
    signuptext: {
        paddingHorizontal: 3,
        color: '#000a12',
        fontWeight: 'bold',
    }
});

