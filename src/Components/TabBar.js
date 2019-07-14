import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconWithBadge } from './IconWithBadge';
const ChatIconWithBadge = props => {
    // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
    return <IconWithBadge {...props} badgeCount={3} />;
};
export const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let IconComponent = Icon;
    let iconName;
    if (routeName === 'Chat') {
        iconName = `chat`;
        // We want to add badges to home tab icon
        IconComponent = ChatIconWithBadge;
    }
    else if (routeName === 'Match') {
        iconName = `heart${focused ? '' : '-outline'}`;
    }
    else if (routeName === 'Me') {
        iconName = `account${focused ? '' : '-outline'}`;
    }
    // You can return any component that you like here!
    return <IconComponent name={iconName} size={25} color={tintColor} />;
};
