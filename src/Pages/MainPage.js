/*
    APP 主界面
    就是底部一个navigator，顶部一个titlebar
*/

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import I18n from '../I18n';
import Icon from '../Icons';
import ChatPage from './ChatPage';
import ContactPage from './ContactPage';
import MePage from './MePage';

export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Chats'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    {this._renderTabarItems('Chats', 'message', ChatPage)}
                    {this._renderTabarItems('Contact', 'message', ContactPage)}
                    {this._renderTabarItems('Me', 'user', MePage)}
                </TabNavigator>
            </View>
        )
    }

    // 一个渲染底部状态栏的方法
    _renderTabarItems(selectedTab, icon, Component) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={I18n.t(selectedTab)}
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Icon style={styles.icon} icon={icon} />}
                renderSelectedIcon={() => <Icon style={styles.icon} icon={icon} />}
                onPress={() => this.setState({ selectedTab: selectedTab })}
            >
                <Component />
            </TabNavigator.Item>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    tabText: {
        color: '#000000',
        fontSize: 10
    },
    selectedTabText: {
        color: '#D81E06'
    },
    icon: {
        width: 20,
        height: 20
    },

})