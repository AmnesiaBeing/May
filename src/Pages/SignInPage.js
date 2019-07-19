/*
    登录页面：基本复制粘贴某csdn博客中的代码
*/

import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { Dimensions, Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import I18n from '../I18n';

export default class LoginPage extends Component {
    static navigationOptions = {
        header: null,
    }

    _btnSignInPress = async () => {
        // 假的，就当注册成功了好吧
        
        this.props.navigation.navigate('App');
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height + StatusBar.currentHeight }} source={require('../../img/loginbgimage.jpg')} resizeMode='cover'>
                    <Image style={{ width: 80, height: 80, alignSelf: 'center', marginTop: 150 }}
                        source={require('../../img/logo.png')} />
                    <TextInput style={styles.name} placeholder={I18n.t('UsernameTint')} numberOfLines={1} underlineColorAndroid={'transparent'} autoFocus={false} textAlign="center" />
                    <View style={{ height: 0, }} />
                    <TextInput style={styles.password} placeholder={I18n.t('PasswordTint')} numberOfLines={1} underlineColorAndroid={'transparent'} secureTextEntry={true} textAlign="center" />
                    <TouchableOpacity
                        style={styles.login}
                        activeOpacity={0.9}
                        onPress={() => this._btnSignInPress()}
                    >
                        <Text>{I18n.t('SignIn')}</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: { flex: 1, resizeMode: 'contain', opacity: 1 },
    name: { backgroundColor: '#FFF', height: 50, marginTop: 10, fontSize: 15, marginLeft: 10, marginRight: 10, opacity: 0.7 },
    password: { backgroundColor: '#FFF', height: 50, fontSize: 15, marginLeft: 10, marginRight: 10, opacity: 0.7 },
    login: { height: 40, marginLeft: 10, marginRight: 10, backgroundColor: '#FFC125', marginTop: 15, alignItems: 'center', justifyContent: 'center', borderRadius: 5, },
})