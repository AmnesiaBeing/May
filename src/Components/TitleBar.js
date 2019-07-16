/*
    标题栏，emmmmm
*/

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image,
    Dimensions
} from 'react-native';

export default class TitleBar extends Component {

    render() {
        return (
            
            <View style={styles.header}>
                <Image style={styles.headerImage}
                    source={require('../../img/may.png')} /> 
               
                
            </View>
                
        )
        
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#fff",
        height: 35+ StatusBar.currentHeight,
        alignItems: "center",
        flexDirection: 'row'
    },
    headerTitle: {
        alignSelf: 'center',
        justifyContent: 'center', 
        marginTop:30,
        marginLeft:50
    },
    headerImage:{
        
        width:30, 
        height:30, 
        alignItems: 'center', 
        marginTop: 20 ,
        justifyContent:'center',
        marginLeft:190,
        

    }
})