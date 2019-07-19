/*
    APP 入口文件
    逻辑如下：
    1、延时2s，SplashScreen隐藏
    2、如果当前已经登陆过了，则直接显示主界面，如果没有，显示Login界面。
*/

import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createAppContainer, createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import ChatListPage from './Pages/ChatListPage';
import ChatPage from './Pages/ChatPage';
import LoginPage from './Pages/LoginPage';
import SignInPage from './Pages/SignInPage';
import MatchPage from './Pages/MatchPage';
import MePage from './Pages/MePage';
import Theme from './Theme';

const MainStack = createBottomTabNavigator(
    {
        ChatList: { screen: ChatListPage },
        Match: { screen: MatchPage },
        Me: { screen: MePage },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Icon;
                let iconName;
                if (routeName === 'ChatList') {
                    iconName = `chat`;
                }
                else if (routeName === 'Match') {
                    iconName = `heart${focused ? '' : '-outline'}`;
                }
                else if (routeName === 'Me') {
                    iconName = `account${focused ? '' : '-outline'}`;
                }
                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            }
        }),
        tabBarOptions: {
            activeTintColor: Theme.colors.BottomTabBarActive,
            inactiveTintColor: Theme.colors.BottomTabBarInactive,
        },
        backBehavior: false,
    }
);

const AppStack = createStackNavigator(
    {
        Main: MainStack,
        Chat: ChatPage,
        // Setting: SettingPage,
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none'
    }
);

const AuthStack = createStackNavigator({
    Login: LoginPage,
    SignIn: SignInPage
});

class AuthLoadingScreen extends Component {
    constructor() {
        super();
        // MainActivity中也有类似的代码
        StatusBar.setBackgroundColor('#00000000');
        StatusBar.setTranslucent(true);
        StatusBar.setBarStyle(Theme.values.StatusBarStyle);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('username');
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
        SplashScreen.hide();
    };

    render() {
        return (
            <View></View>
        );
    }
}

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
        headerMode: 'none'
    }
));
