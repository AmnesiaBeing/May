/*
    “联系人”页面
*/

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import TitleBar from '../Components/TitleBar';
import I18n from '../I18n';

export default class MatchPage extends Component {

    static navigationOptions = {
        title: I18n.t('Match')
    }

    render() {
        return (
            <View style={styles.container}>
                <TitleBar title={I18n.t('Match')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee'
    },
})