/*
    标题栏，emmmmm
*/

import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Theme from '../Theme';

export default class TitleBar extends Component {

    render() {
        return (
            <View style={{ backgroundColor: Theme.colors.TitleBarBG }}>
                <View style={{ height: Theme.values.TitleBarHeight, marginTop: StatusBar.currentHeight }}>
                    <Text style={{
                        color: Theme.colors.TitleBarText,
                        fontSize: Theme.values.TitleBarTextSize,
                        marginLeft: Theme.values.TitleBarTextMargin,
                    }}>{this.props.title}</Text>
                </View>
                <View style={{ backgroundColor: Theme.colors.TitleBarSplitBG, height: 2, }} />
            </View >

        )

    }
}