/*
    “聊天”页面
*/

import React, { Component } from 'react';
import {
    Animated,
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    View,
    KeyboardAvoidingView,
    ScrollView,
    PixelRatio,
    FlatList
} from 'react-native';
import TitleBar from '../Components/TitleBar';
import I18n from '../I18n';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// 强行用控件，这是一个高度自动扩展的输入框
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

export default class ChatPage extends Component {

    constructor(props) {
        super(props);
        this.state = { flatlistHeight: 0 };
    }

    _onChange(event) {
        this.setState({ textValue: event.nativeEvent.text || '' });
    }

    render() {
        return (
            <View style={styles.container}>
                <TitleBar title={I18n.t('ChatList')} />
                <KeyboardAvoidingView
                    behavior='position' contentContainerStyle={{ flex: 1 }} style={{ flex: 1 }}>
                    <FlatList
                        style={styles.chatflatlist}
                        data={[{ key: 'a' }, { key: 'b' }]}
                        renderItem={({ item }) =>
                            <View></View>
                        }
                        onLayout={e => {
                            let height = e.nativeEvent.layout.height;
                            if (this.state.flatlistHeight < height) {
                                this.setState({ flatlistHeight: height })
                            }
                        }}
                    />
                    <View style={{
                        bottom: 0,
                        backgroundColor: '#ABC',
                        flexDirection: 'row'
                    }}>
                        <Icon style={{ alignSelf: 'center', marginLeft: 2 }} name='plus' size={35} color='#FFF' />
                        <TextInput
                            style={[styles.input, {
                                height: Math.max(40, this.state.textInputHeight < 180 ? this.state.textInputHeight : 180)
                            }]}
                            multiline={true}
                            controlled={true}
                            underlineColorAndroid="transparent"
                            returnKeyType="default"
                            value={this.state.inputValue}
                            placeholder="Type here to send message"
                            // ios only
                            enablesReturnKeyAutomatically={true}
                            onContentSizeChange={
                                (event) => {
                                    this.setState({ textInputHeight: event.nativeEvent.contentSize.height });
                                }
                            }
                            onChangeText={(text) => {
                                this.setState({ inputValue: text });
                            }}
                        />
                        {/* emoji按钮 */}
                        <Icon style={{ alignSelf: 'center' }} name='face' size={35} color='#FFF' />
                        {/* 当没有输入东西的时候，这个按钮是切换发送文字或者语音的 */}
                        <Icon style={{ alignSelf: 'center', marginLeft: 2 }} name={this.state.inputValue ? 'voice' : 'up'} size={35} color='#FFF' />
                    </View>
                </KeyboardAvoidingView>

            </View>
        )
    }
}

class MessageCell extends Component {
    render() {
        let { currentUser, message } = this.props;

        let differentStyle = {};
        if (message.from === currentUser) {
            differentStyle = {
                flexDirection: 'row-reverse',
                backgroundColor: '#92E649'
            };
        } else {
            differentStyle = {
                flexDirection: 'row',
                backgroundColor: '#FFFFFF'
            };
        }

        return (
            <View
                style={[styles.messageCell, { flexDirection: differentStyle.flexDirection }]}
            >
                <Image
                    source={{
                        uri: message.ext.avatar
                    }}
                    style={styles.avatar}
                />
                <View
                    style={[styles.contentView, { backgroundColor: differentStyle.backgroundColor }]}
                >
                    <Text style={styles.messageCellText}>{message.msg.content}</Text>
                </View>
                <View style={styles.endBlankBlock} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    bottomToolBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#AAA'
    },
    input: {
        flex: 1,
        color: '#000',
        fontSize: 15,
        padding: 10
    },
    messageCell: {
        marginTop: 5,
        marginBottom: 5,
    },
    messageCellText: {
        fontSize: 15
    },
    avatar: {
        borderRadius: 4,
        margin: 5,
        width: 40,
        height: 40
    },
    contentView: {
        borderRadius: 4,
        padding: 4,
        paddingHorizontal: 8,
        overflow: 'hidden',
        flex: 1,
        margin: 5,
        justifyContent: 'center'
    },
    endBlankBlock: {
        margin: 5,
        width: 50,
        height: 40
    }
})