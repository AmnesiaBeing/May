/*
    “会话列表”页面
    使用了rn-swipe-list-view，但是会报警告，要不就不用了？
*/

import React, { Component } from 'react';
import {
    Animated,
    FlatList,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
    Image
} from 'react-native';
import TitleBar from '../Components/TitleBar';
import I18n from '../I18n';

import UserItem from '../Components/UserItem';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

import Theme from '../Theme';

export default class ChatListPage extends Component {

    static navigationOptions = {
        title: I18n.t('ChatList')
    }

    constructor(props) {
        super(props);
        this.state = { flatlistHeight: 0 };
    }

    onChatPress(item) {
        this.props.navigation.navigate('Chat');
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TitleBar title={I18n.t('ChatList')} />
                <FlatList
                    style={styles.container}
                    data={[{ key: 'a' }, { key: 'b' }]}
                    renderItem={({ item }) =>
                        <TouchableNativeFeedback onPress={_ => this.onChatPress(item)}>
                            <UserItem />
                        </TouchableNativeFeedback>
                    }
                    ListEmptyComponent={() => {
                        return (
                            <TouchableOpacity
                                style={{ height: this.state.flatlistHeight, justifyContent: 'center' }}
                                activeOpacity={0.6}
                                onPress={() => this.props.navigation.navigate('Match')}>
                                <Text style={{ textAlign: 'center' }}>{I18n.t('GotoMatch')}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    onLayout={e => {
                        let height = e.nativeEvent.layout.height;
                        if (this.state.flatlistHeight < height) {
                            this.setState({ flatlistHeight: height })
                        }
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.ChatListBG,
    },
})