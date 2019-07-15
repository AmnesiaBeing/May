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
                <View style={styles.headimg}><Text>头像</Text></View>
                <View style={styles.button}><Text>按钮1</Text></View>
                <View style={styles.button}><Text>按钮2</Text></View>
                <View style={styles.button}><Text>按钮3</Text></View>
                <View style={styles.button}><Text>按钮4</Text></View>
                <View style={styles.button}><Text>按钮5
                    </Text></View>
            </View>
        )
    }
}

var Dimensions = require('Dimensions');
var HeadImgWidth = Dimensions.get('window').width * 0.65;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    headimg: {
        alignSelf: 'center',
        width: HeadImgWidth,
        height: HeadImgWidth,
        borderRadius: HeadImgWidth * 0.5,
        backgroundColor: '#BBB',
        marginTop: StatusBar.currentHeight + 10,
        marginBottom :10
    },
    button:{
        height: 50,
        backgroundColor: '#BBB',
    }
})