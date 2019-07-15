/*
    标题栏，emmmmm
*/

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar
} from 'react-native';

export default class TitleBar extends Component {

    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#4a9df8",
        height: 50 + StatusBar.currentHeight,
        alignItems: "center",
        flexDirection: 'row'
    },
    headerTitle: {
        // 不想写样式
    }
})