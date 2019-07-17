/*
    表示用户的列表项，左边一个头像，中间各种描述什么的，右边有最近消息时间和未读消息数
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import IconWithBadge from './IconWithBadge';
import Theme from '../Theme';

export default class UserItem extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headimg}></View>
                <View style={{ flex: 1, justifyContent: 'space-between', marginLeft: 5 }}>
                    <Text style={styles.name}>名字</Text>
                    <Text style={styles.message}>哈哈哈哈哈哈哈哈</Text>
                </View>
                <View style={{ justifyContent: 'space-between' }}>
                    <Text style={styles.time}>2019-07-17</Text>
                    {/* {} */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // 容器，分成左中右三个部分，flex布局，方向为横向
    container: {
        flexDirection: 'row',
        height: Theme.values.UserItemHeight,
        backgroundColor: Theme.colors.UserItemBG,
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        padding: 5
    },
    // 头像在左边，高度宽度固定
    headimg: {
        alignSelf: 'center',
        width: Theme.values.UserItemImgWidth,
        height: Theme.values.UserItemImgWidth,
        borderRadius: Theme.values.UserItemImgRadius,
        backgroundColor: '#EECBAD',
    },
    name: {
        fontSize: Theme.values.UserItemNameFontSize,
    },
    message: {
        fontSize: Theme.values.UserItemMsgFontSize,
    },
    time: {
        fontSize: Theme.values.UserItemTimeFontSize,
    },
})