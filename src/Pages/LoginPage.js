/*
    登录页面：基本复制粘贴某csdn博客中的代码
*/

import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { Dimensions, Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import I18n from '../I18n';

import { WToast } from 'react-native-smart-tip';

import { xmppstore } from '../Stores';

export default class LoginPage extends Component {
    static navigationOptions = {
        header: null,
    }

    _btnLoginPress = () => {
        var toast = {
            duration: WToast.duration.SHORT,
            position: WToast.position.TOP,
        };

        if (!this.state.username.trim() && !this.state.password.trim()) {
            // 用户名和密码为空，？？？
            toast.data = '？？？';
            WToast.show(toast);
            return;
        }
        if (!this.state.username.trim()) {
            // 用户名为空
            toast.data = I18n.t('EmptyUsername');
            WToast.show(toast);
            return;
        }
        if (!this.state.password.trim()) {
            // 密码为空
            toast.data = I18n.t('EmptyPassword');
            WToast.show(toast);
            return;
        }
        // this.login();
        xmppstore.login(this.state.username, this.state.password);
    };

    _btnSignInPress = () => {
        this.props.navigation.navigate('SignIn');
    };

    // 初始化函数，这个函数的内容想办法用一个Helper包起来，语法现在还是不熟悉
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isConnected: xmppstore.isConnected,
            isOnline: xmppstore.isOnline,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height + StatusBar.currentHeight }} source={require('../../img/loginbgimage.jpg')} resizeMode='cover'>
                    <Image style={{ width: 80, height: 80, alignSelf: 'center', marginTop: 150 }}
                        source={require('../../img/logo.png')} />
                    <TextInput
                        style={styles.name}
                        placeholder={I18n.t('UsernameTint')}
                        numberOfLines={1}
                        underlineColorAndroid={'transparent'}
                        autoFocus={false}
                        textAlign="center"
                        onChangeText={(e) => this.setState({ username: e })} />
                    <TextInput
                        style={styles.password}
                        placeholder={I18n.t('PasswordTint')}
                        numberOfLines={1}
                        underlineColorAndroid={'transparent'}
                        secureTextEntry={true}
                        textAlign="center"
                        onChangeText={(e) => this.setState({ password: e })}
                    />
                    <TouchableOpacity
                        style={styles.login}
                        activeOpacity={0.9}
                        onPress={() => this._btnLoginPress()}
                    >
                        <Text>{I18n.t('Login')}</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginTop: 13, justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 10, color: '#000', fontSize: 12 }}>{I18n.t('ForgetPassword')}</Text>
                        <TouchableOpacity
                            style={{ marginRight: 10, }}
                            activeOpacity={0.9}
                            onPress={() => this._btnSignInPress()}
                        >
                            <Text style={{ color: '#000', textAlign: 'right', flex: 1, fontSize: 12 }}>{I18n.t('SignIn')}</Text>
                        </TouchableOpacity>
                    </View>
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