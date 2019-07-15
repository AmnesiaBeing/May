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
    Dimensions
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

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }} source={require('../../img/loginbgimage.jpg')} resizeMode='cover'>
                    <Image style={{ width: 80, height: 80, alignSelf: 'center', marginTop: 150 }}
                        source={require('../../img/logo.png')} />
                    <TextInput style={styles.name} placeholder={'MayID'} numberOfLines={1} underlineColorAndroid={'transparent'} autoFocus={false} textAlign="center" />
                    <View style={{ height: 3, }} />
                    <TextInput style={styles.password} placeholder={'密码'} numberOfLines={1} underlineColorAndroid={'transparent'} secureTextEntry={true} textAlign="center" />
                    <View style={styles.login}>
                        <Text>登录</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'flex-end' }}>
                        <Text style={{ marginLeft: 10, color: '#000', fontSize: 14 }}> 忘记密码？ </Text>
                        <Text style={{ marginRight: 10, color: '#000', alignItems: 'flex-end', textAlign: 'right', flex: 1, fontSize: 14 }}> 新用户注册 </Text>
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