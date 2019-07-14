/*
    APP 入口文件
    逻辑如下：
    1、延时2s，SplashScreen隐藏
    2、如果当前已经登陆过了，则直接显示主界面，如果没有，显示Login界面。
*/

import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import LoginPage from './Pages/LoginPage'
import MainPage from './Pages/MainPage';

import {
    NativeModules,
    View
} from 'react-native';

// import IMUI from 'aurora-imui-react-native';
// var MessageList = IMUI.MessageList;
// var ChatInput = IMUI.ChatInput;
// const AuroraIMUIController = IMUI.AuroraIMUIController; // the IMUI controller, use it to operate  messageList and ChatInput.


export default class Main extends Component {

    // 当组件加载完成时，延时1.5s关闭SplashScreen
    componentDidMount() {
        this.timer = setTimeout(
            () => { SplashScreen.hide(); },
            1000
        );
    }

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    render() {
        // 这个当前已经登录了怎么判断呢
        if (true) {
            return (
                <MainPage />
            )
        }
        else {
            return (
                <LoginPage />
            )
        }
    }

    // render() {
    //     return (
    //         <View>
    //             <MessageList />
    //             <ChatInput />
    //         </View>
    //     )
    // }
}
