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
    PixelRatio
} from 'react-native';
import TitleBar from '../Components/TitleBar';
import I18n from '../I18n';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// 强行用控件，这是一个高度自动扩展的输入框
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

export default class ChatPage extends Component {

    constructor(props) {
        super(props);
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
                    <ScrollView>
                        {/* 这里应该查询数据库，然后看看需要渲染些什么东西，目前就凑合一下 */}
                    </ScrollView>
                    <View style={{
                        bottom: 0,
                        backgroundColor: '#ABC',
                        flexDirection: 'row'
                    }}>
                        <Icon style={{ alignSelf: 'center', marginLeft: 2 }} name='plus' size={35} color='#FFF' />
                        <AutoGrowingTextInput
                            // onChange={(event) => this._onChange(event)}
                            style={styles.textInput}
                            placeholder={'Your Message'}
                            placeholderTextColor='#66737C'
                            maxHeight={120}
                            enableScrollToCaret
                        />
                        <Icon style={{ alignSelf: 'center'}} name='face' size={35} color='#FFF' />
                        <Icon style={{ alignSelf: 'center', marginLeft: 2 }} name='voice' size={35} color='#FFF' />
                    </View>
                </KeyboardAvoidingView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    standalone: {
        marginTop: 30,
        marginBottom: 30,
    },
    standaloneRowFront: {
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
        height: 50,
    },
    standaloneRowBack: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    backTextWhite: {
        color: '#FFF'
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        backgroundColor: 'red',
        right: 0
    },
    controls: {
        alignItems: 'center',
        marginBottom: 30
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5
    },
    switch: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        paddingVertical: 10,
        width: Dimensions.get('window').width / 4,
    },
    trash: {
        height: 25,
        width: 25,
    },
    textInput: {
        marginTop: 2,
        marginBottom: 2,
        paddingLeft: 10,
        fontSize: 17,
        flex: 1,
        backgroundColor: 'white',
        borderWidth: 0,
        borderRadius: 4,
    },
})