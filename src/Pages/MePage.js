/*
    “我”页面
    反正就是仿造
*/

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import I18n from '../I18n'

export default class MePage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titlebar}>
                    <Text>{I18n.t('Me')}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bbbbbb'
    },
    titlebar: {
        height: 10
    }
})