import React from 'react'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

import HomeScreen from '@screens/HomeScreen'

const Stack = createStackNavigator()

const StackNavigation: React.FC = () => {

    const stackNavigationOptions: StackNavigationOptions = {
        headerShown: false
    }
    return (
        <Stack.Navigator screenOptions={stackNavigationOptions}>
            <Stack.Screen name="Posts" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation