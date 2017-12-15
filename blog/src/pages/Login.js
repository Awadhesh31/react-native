import React from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import Logo from "../components/Logo";
import Form from "../components/form";
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
  render() {
    return (
      <View style={sty.loginCon}>
        <Logo/>
        <Form type="Login"/>
        <View scrollEnabled={false} style={sty.signup}>
            <Text style={sty.Text}>Don't Having An Account Yet ?</Text>
            <Text style={sty.signuptext} onPress={() => Actions.signup()}>Sign Up</Text>
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

