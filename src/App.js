/*
    APP 入口文件
    逻辑如下：
    1、延时2s，SplashScreen隐藏
    2、如果当前已经登陆过了，则直接显示主界面，如果没有，显示Login界面。
*/

// import SplashScreen from 'react-native-splash-screen';
import { createAppContainer, createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import ChatPage from './Pages/ChatPage';
import LoginPage from './Pages/LoginPage';
import MatchPage from './Pages/MatchPage';
import MePage from './Pages/MePage';
import { getTabBarIcon } from './Components/TabBar';

const AppStack = createBottomTabNavigator(
    {
        Chat: { screen: ChatPage },
        Match: { screen: MatchPage },
        Me: { screen: MePage },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
                getTabBarIcon(navigation, focused, tintColor),
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

const AuthStack = createStackNavigator({ SignIn: LoginPage });

export default createAppContainer(createSwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'App',
    }
));