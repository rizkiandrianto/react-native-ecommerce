import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from 'screens/Login';
import { KeepAwake } from 'expo';
import { Root, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

const App = StackNavigator({
  Main: {
    screen: Login
  },
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
