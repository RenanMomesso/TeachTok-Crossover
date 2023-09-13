import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native'
import ThemeProvider from 'src/theme/ThemeProvider';
import RouteNavigation from 'src/navigations/RouteNavigation';
import BottomNavigation from 'src/navigations/BottomNavgation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App: React.FC = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar translucent backgroundColor={"transparent"} />
        <ThemeProvider>
          <RouteNavigation>
            <BottomNavigation />
          </RouteNavigation>
        </ThemeProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
};

export default App;
