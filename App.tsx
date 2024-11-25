/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationProvider} from './src/Screens/Common/NavigationSource';
import AuthStackNavigator from './src/common/routes/auth/auth.stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Layout} from './src/styles/Layout';
import RootRoutes from './src/common/routes/user/RootRoutes';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {PlayerNavigationProvider} from './src/Screens/Common/PlayerNavigationSource';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={[Layout.flex1]}>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <NavigationProvider>
            <PlayerNavigationProvider>
              <RootRoutes />
            </PlayerNavigationProvider>
          </NavigationProvider>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});

export default App;
