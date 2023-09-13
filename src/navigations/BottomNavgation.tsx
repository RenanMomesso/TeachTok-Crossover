import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import StackNavigation from './StackNavigation';
import { ClockIcon, DiscoverIcon, HomeIcon, ProfileIcon, SavePostIcon } from '@components/Icons/Icon';

const Tab = createBottomTabNavigator();

const tabNavigationOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarStyle: {
        backgroundColor: '#000',
        paddingTop: 5,
        height: 50
    },
    tabBarActiveTintColor: '#fff',
    tabBarLabelStyle: {
        fontFamily: 'SF_PRO_ROUNDED',
    }
}

const getTabBarIcon = (IconComponent: any) => {
    return ({ focused }: { focused: boolean }) => {
        return <IconComponent fillColor={focused ? '#fff' : '#666'} width={24} height={24} />;
    };
};

const BottomNavigation: React.FC = () => {
    return (
        <Tab.Navigator screenOptions={tabNavigationOptions} >
            <Tab.Screen name="Home" component={StackNavigation}
                options={{ tabBarIcon: getTabBarIcon(HomeIcon) }}
            />
            <Tab.Screen name="Discover" component={StackNavigation}
                options={{ tabBarIcon: getTabBarIcon(DiscoverIcon) }}
            />
            <Tab.Screen name="Activity" component={StackNavigation}
                options={{ tabBarIcon: getTabBarIcon(ClockIcon) }}
            />
            <Tab.Screen name="Bookmarks" component={StackNavigation}
                options={{ tabBarIcon: getTabBarIcon(SavePostIcon) }}
            />
            <Tab.Screen name="Profile" component={StackNavigation}
                options={{ tabBarIcon: getTabBarIcon(ProfileIcon) }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigation;
