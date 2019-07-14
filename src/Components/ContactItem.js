/*
    列表项，左边一个头像，中间各种描述什么的，仿造qq吧
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

export default class ContactItem extends Component {

    render() {
        return (
            <TouchableHighlight
                style={styles.container}
            >
                <View>
                    <View sytle={styles.headportrait}></View>
                    <Text style={styles.username}>名字</Text>
                    <Text style={styles.msg}>消息</Text>
                    <Text style={styles.msgtime}>时间</Text>
                    <Text style={styles.unreadmsgcnt}>0</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderBottomColor: '#FFF',
        borderBottomWidth: 1,
        height: 70,
    },
    headportrait: {
        width: 60,
        height: 60,
        margin: 5
    }
})