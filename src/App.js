/*
    APP 入口文件
    逻辑如下：
    1、延时2s，SplashScreen隐藏
    2、如果当前已经登陆过了，则直接显示主界面，如果没有，显示Login界面。
*/

// import SplashScreen from 'react-native-splash-screen';
import { createAppContainer, createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import ChatListPage from './Pages/ChatListPage';
import LoginPage from './Pages/LoginPage';
import MatchPage from './Pages/MatchPage';
import MePage from './Pages/MePage';
import SplashScreen from 'react-native-splash-screen';
import { View, AsyncStorage, } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatIconWithBadge = props => {
    // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
    return <IconWithBadge {...props} badgeCount={3} />;
};

const AppStack = createBottomTabNavigator(
    {
        Chat: { screen: ChatListPage },
        Match: { screen: MatchPage },
        Me: { screen: MePage },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Icon;
                let iconName;
                if (routeName === 'Chat') {
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
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

const AuthStack = createStackNavigator({ SignIn: LoginPage });

class AuthLoadingScreen extends Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        SplashScreen.hide();
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            // 以后可能要在这个地方做SplashScreen，从现在的效果来看，现有的react-native-splash-screen效果有点差
            <View>
            </View>
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
    }
));