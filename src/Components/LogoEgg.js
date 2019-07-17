/*
    传说中的彩蛋，Logo可以被拖动
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

export default class LogoEgg extends Component {

    render() {
        return (
            <View style={styles.Logo}>
                <Image style={{ width: 30, height: 30 }} source={require('../../img/may.png')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Logo: {
        position: 'absolute',
        top: 100,
        left: 100,
        width: 30,
        height: 30,
        elevation: 1,
        zIndex: -1
    }
})