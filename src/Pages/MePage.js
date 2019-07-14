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
import I18n from '../I18n';
import TitleBar from '../Components/TitleBar';

export default class MePage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TitleBar title={I18n.t('Me')} />
                <View style={styles.info}>
                    <View style={styles.left}>
                        <View style={styles.content}>
                            <Text>
                                xxx
                            </Text>
                            <Text style={styles.weixinId}>
                                yyy
                            </Text>
                        </View>
                    </View>
                    <View style={styles.right}>
                        <View style={styles.qrcode} />
                        <View color="#ccc" />
                    </View>
                </View>
                <View style={styles.posts}>
                    {/* <OneRow
                        iconName="photo"
                        text="My Posts"
                        handlePress={() => {
                            navigate('Posts', { name, id })
                        }}
                    /> */}
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
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 12
      },
      left: {
        flexDirection: 'row',
      },
      right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      posts: {
        marginTop: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
      },
      qrcode: {
        marginRight: 6,
      },
      content: {
        paddingLeft: 10,
        flex: 1,
        display: 'flex',
      },
      weixinId: {
        fontSize: 12,
        color: '#333',
        paddingTop: 10,
      },
})