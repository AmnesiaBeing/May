/*
    登录页面：基本复制粘贴某csdn博客中的代码
*/

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    ImageBackground,
    Dimensions,
    StatusBar,
    TouchableOpacity
} from 'react-native'
import SplashScreen from 'react-native-splash-screen';

export default class LoginPage extends Component {
    static navigationOptions = {
        header: null,
    }
    componentDidMount() {
        //2秒后关闭启动页
        setTimeout(() => { SplashScreen.hide() }, 2000)
    };

    static navigationOptions = {
        header: null,
    }

    _btnLoginPress(){
        // 网络请求什么的，验证，然后跳转到主界面
        this.props.navigation.navigate('App');
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height + StatusBar.currentHeight }} source={require('../../img/loginbgimage.jpg')} resizeMode='cover'>
                    <Image style={{ width: 80, height: 80, alignSelf: 'center', marginTop: 150 }}
                        source={require('../../img/logo.png')} />
                    <TextInput style={styles.name} placeholder={'May账号'} numberOfLines={1} underlineColorAndroid={'transparent'} autoFocus={false} textAlign="center" />
                    <View style={{ height: 0, }} />
                    <TextInput style={styles.password} placeholder={'密码'} numberOfLines={1} underlineColorAndroid={'transparent'} secureTextEntry={true} textAlign="center" />
                    <TouchableOpacity
                        style={styles.login}
                        activeOpacity={0.9}
                        onPress={() => this._btnLoginPress()}
                    >
                        <Text>登录</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginTop: 13, alignItems: 'flex-end' }}>
                        <Text style={{ marginLeft: 10, color: '#000', fontSize: 12 }}> 忘记密码？ </Text>
                        <Text style={{ marginRight: 10, color: '#000', alignItems: 'flex-end', textAlign: 'right', flex: 1, fontSize: 12 }}> 新用户注册 </Text>
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