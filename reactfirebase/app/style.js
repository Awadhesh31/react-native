'use strict'

let React = require('react-native');
let {StyleSheet} = React;
const constants = {
    actionColor: 'red'
}

module.exports = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        backgroundColor: '#263238',
        borderBottomColor: '#4f5b62',
        borderColor: 'transparent',
        borderWidth: 1,
        justifyContent: 'center',
        height: 56,
        flexDirection: 'row',
    },
    navbarTitle: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500',
    },
    toolBar: {
        backgroundColor: '#ffffff',
        height: 22,
    },
    li: {
        height: 72,
        backgroundColor: '#E1E2E1',
        borderBottomColor: '#b8bdb8',
        borderTopColor: '#b8bdb8',
        borderBottomWidth: 1,
        justifyContent: 'center',
        paddingLeft: 24,
    },
    liText: {
        color: '#4f5b62',
        fontWeight: 'bold',
        fontSize: 15,
    },
    liSubText: {
        fontSize: 12,
    }
});