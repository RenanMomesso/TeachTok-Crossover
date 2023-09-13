import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

interface RouteNavigationProps {
    children: React.ReactNode
}
const RouteNavigation: React.FC<RouteNavigationProps> = ({ children }) => {
    return (
        <NavigationContainer>
            {children}
        </NavigationContainer>
    )
}

export default RouteNavigation;