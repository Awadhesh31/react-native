import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class Form extends React.Component {
    render(){
        return(
            <View style={formstyle.container}>
                <TextInput style={formstyle.inputBox}
                           underlineColorAndroid = 'rgba(0,0,0,0)'
                           placeholder="Email"
                           placeholderTextColor="#bcbcbc"
                />
                <TextInput style={formstyle.inputBox}
                           underlineColorAndroid = 'rgba(0,0,0,0)'
                           placeholder="Password"
                           secureTextEntry={true}
                           placeholderTextColor="#bcbcbc"
                />
                <TouchableOpacity style={formstyle.btn}>
                    <Text style={formstyle.btnlogin}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const formstyle = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    inputBox: {
        backgroundColor: '#eeeeee',
        width: 300,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    },
    btn: {
        backgroundColor: '#1c313a',
        width: 300,
        paddingVertical: 14,
        borderRadius:25,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    btnlogin: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    }
});