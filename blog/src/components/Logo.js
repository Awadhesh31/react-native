import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends React.Component {
    render(){
        return(
            <View style={logos.picture}>
                <Image
                    style={{width: 150, height: 150}}
                    source = {require('../img/logo.gif')}
                />
                <Text style={logos.picturetext}>
                   Welcome to Tech Brain
                </Text>
            </View>
        )
    }
}

const logos = StyleSheet.create({
    picture: {
        flexGrow:1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    picturetext: {
        color: "#000a12",
        fontSize: 18,
        fontWeight: 'bold'
    }
});