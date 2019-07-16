/*
    表示用户的列表项，左边一个头像，中间各种描述什么的，右边有最近消息时间和未读消息数
*/

import React, { Component } from 'react';
import {
    Animated,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
    Image
} from 'react-native';

export default class UserItem extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headportrait}></View>
                <View style={styles.main}>
                    <View style={styles.content}>
                        <Text style={styles.name}>名字</Text>
                        <Text style={styles.message}>哈哈</Text>
                    </View>
                    <Text style={styles.time}>时间</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // 容器，分成左中右三个部分，flex布局，方向为横向
    container: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        paddingTop: 10,
        paddingBottom: 10,
        height: 70,
    },
    // 头像在左边，高度宽度固定
    headportrait: {
        width: 60,
        height: 60,
        alignSelf: 'center',
        marginStart: 5,
        borderRadius:40,
        backgroundColor: '#EECBAD',
    },
    main: {
        paddingLeft: 10,
        paddingTop: 2,
        paddingBottom: 2,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 14,
        flex: 1,
    },
    message: {
        fontSize: 12,
        color: '#333',
    },
    time: {
        fontSize: 10,
        textAlign: 'right',
        color: '#333',
    },
})