import React, { Component, component } from 'react';
import {StyleSheet, AppRegistry,Text, View, Image,ImageBackground } from 'react-native';


export default class Splash extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <View 
                style={{
                    flex:1,
                    backgroundColor: '#002535',
                    
                }}>
                <Image style={{
                    justifyContent: 'center',
                    width: 400,
                    top:130                 
                }} source={require('../assets/gifimages.gif')} />
            </View>
        )
    }
}
