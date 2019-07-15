/*
    “我”页面
    反正就是仿造
*/

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
} from 'react-native';
import I18n from '../I18n';
import TitleBar from '../Components/TitleBar';

export default class MePage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headimg} ><Text style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 45}}>头像</Text></View>
                <View style={styles.button}><Text style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 15 }}>名字</Text></View>
                <View style={styles.button}><Text style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 15 }}>MayID</Text></View>
                <View style={styles.button}><Text style={{ alignSelf: 'center', justifyContent: 'center' , marginTop: 15}}>地区</Text></View>
                <View style={styles.button}><Text style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 15 }}>生日</Text></View>
                <View style={styles.button}><Text style={{ alignSelf: 'center', justifyContent: 'center' , marginTop: 15}}>个性签名</Text></View>
            </View>
        )
    }
}

var Dimensions = require('Dimensions');
var HeadImgWidth = Dimensions.get('window').width * 0.3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD39B'
    },
    headimg: {
        alignSelf: 'center',
        width: HeadImgWidth,
        height: HeadImgWidth,
        borderRadius: HeadImgWidth * 0.5,
        backgroundColor: '#FFA54F',
        marginTop: StatusBar.currentHeight +45,
        marginBottom :25
    },
    button:{
        height:50,
        backgroundColor: '#BBB',
    }
})