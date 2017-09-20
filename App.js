import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from 'screens/Login';
import Main from 'screens/Main';
import { KeepAwake } from 'expo';
import { Root, StyleProvider, Toast } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import { GetUserDetail } from 'helpers/UserDetail';

const App = StackNavigator({
  Main: {
    screen: GetUserDetail() ?  Main : Login
  },
  MainScreen: {
    screen: Main
  }
}, {
  initialRouteName: 'Main'
});

KeepAwake.activate();

export default () => (
  <Root>
    <StyleProvider style={getTheme(material)}>
      <App />
    </StyleProvider>
  </Root>
)
