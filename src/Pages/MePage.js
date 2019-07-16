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
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import I18n from '../I18n';
import AsyncStorage from '@react-native-community/async-storage';

export default class MePage extends Component {

    static navigationOptions = {
        title: I18n.t('Me')
    }

    _btnLogoutPress = async () => {
        // 退出登录，清除AS中的信息，然后返回到登录页面
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headimg} ><Text style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 45 }}>头像</Text></View>
                <View style={styles.button}><Text style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 15 }}>名字</Text></View>
                <View style={styles.button}><Text style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 15 }}>MayID</Text></View>
                <View style={styles.button}><Text style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 15 }}>地区</Text></View>
                <View style={styles.button}><Text style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 15 }}>生日</Text></View>
                <View style={styles.button}><Text style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 15 }}>个性签名</Text></View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this._btnLogoutPress()}
                >
                    <Text style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 15 }}>退出登录</Text>
                </TouchableOpacity>
            </View >
        )
    }
}

var Dimensions = require('Dimensions');
var HeadImgWidth = Dimensions.get('window').width * 0.3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headimg: {
        alignSelf: 'center',
        width: HeadImgWidth,
        height: HeadImgWidth,
        borderRadius: HeadImgWidth * 0.5,
        backgroundColor: '#FFDAB9',
        marginTop: StatusBar.currentHeight + 45,
        marginBottom: 25
    },
    button: {
        height: 50,
        backgroundColor: '#FFEBCD',
    }
})