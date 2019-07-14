/*
    强行自学js封装组件
    这个文件用于提供常用的图标库给APP
*/

import React, { Component } from 'react';
// import Svg, {
//     Path,
// } from 'react-native-svg';
import { Image } from 'react-native';

export default class Icon extends Component {
    render() {
        switch (this.props.icon) {
            case 'logo':
                return (
                    <Image style={this.props.style} source={require("../img/user.png")}></Image>
                )
            case 'message':
                return (
                    <Image style={this.props.style} source={require("../img/message.png")}></Image>
                )
            case 'user':
                return (
                    <Image style={this.props.style} source={require("../img/user.png")}></Image>
                )
            default:
                break;
        }
    }
}
