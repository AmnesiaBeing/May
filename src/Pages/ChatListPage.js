/*
    “会话列表”页面
    使用了rn-swipe-list-view，但是会报警告，要不就不用了？
*/

import React, { Component } from 'react';
import {
    Animated,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import TitleBar from '../Components/TitleBar';
import I18n from '../I18n';

import UserItem from '../Components/UserItem';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

export default class ChatListPage extends Component {

    static navigationOptions = {
        title: I18n.t('ChatList')
    }

    constructor(props) {
        super(props);
        this.state = {
            listViewData: Array(5).fill('').map((_, i) => ({ key: `${i}`, text: `item #${i}` })),
        };
    }

    closeRow(rowMap, rowKey) {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    }

    deleteRow(rowMap, rowKey) {
        this.closeRow(rowMap, rowKey);
        const newData = [...this.state.listViewData];
        const prevIndex = this.state.listViewData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        this.setState({ listViewData: newData });
    }

    deleteSectionRow(rowMap, rowKey) {
        this.closeRow(rowMap, rowKey);
        var [section, row] = rowKey.split('.');
        const newData = [...this.state.sectionListData];
        const prevIndex = this.state.sectionListData[section].data.findIndex(item => item.key === rowKey);
        newData[section].data.splice(prevIndex, 1);
        this.setState({ sectionListData: newData });
    }

    onChatPress(rowMap, rowKey)
    {
        this.props.navigation.navigate('Chat');
    }

    render() {
        return (
            <View style={styles.container}>
                <TitleBar title={I18n.t('ChatList')} />
                <SwipeListView
                    useFlatList
                    data={this.state.listViewData}
                    disableRightSwipe={true}
                    renderItem={(data, rowMap) => (
                        <TouchableNativeFeedback onPress={_ => this.onChatPress(rowMap, data.item.key)}>
                            <UserItem />
                        </TouchableNativeFeedback>
                    )}
                    renderHiddenItem={(data, rowMap) => (
                        <View style={styles.rowBack}>
                            <TouchableOpacity style={[styles.backBtn]} onPress={_ => this.deleteRow(rowMap, data.item.key)}>
                                <Text>{I18n.t('delete')}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    rightOpenValue={-75}
                />
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
    }
})