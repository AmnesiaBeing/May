/*
    登录页面：基本复制粘贴某csdn博客中的代码
*/

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
} from 'react-native'
import Icon from '../Icons'
import Svg, {
    Path,
} from 'react-native-svg';

export default class LoginPage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Icon icon='logo' style={{ width: 70, height: 70, alignSelf: 'center', marginTop: 30 }} />
                <TextInput style={styles.name} placeholder={'May账号'} numberOfLines={1} underlineColorAndroid={'transparent'} autoFocus={false} textAlign="center" />
                <View style={{ height: 1, backgroundColor: '#f4f4f4' }} />
                <TextInput style={styles.password} placeholder={'密码'} numberOfLines={1} underlineColorAndroid={'transparent'} secureTextEntry={true} textAlign="center" />
                <View style={styles.login}>
                    <Text>登录</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 13, alignItems: 'flex-end' }}>
                    <Text style={{ marginLeft: 10, color: '#42cc66' }}> 忘记密码？ </Text>
                    <Text style={{ marginRight: 10, color: '#42cc66', alignItems: 'flex-end', textAlign: 'right', flex: 1 }}> 新用户注册 </Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F4F4F4', },
    name: { backgroundColor: '#FFF', height: 50, marginTop: 10, fontSize: 15, },
    password: { backgroundColor: '#FFF', height: 50, fontSize: 15, },
    login: { height: 40, marginLeft: 10, marginRight: 10, backgroundColor: '#42cc66', marginTop: 15, alignItems: 'center', justifyContent: 'center', borderRadius: 5, },
})