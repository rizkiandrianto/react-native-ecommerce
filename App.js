import React from 'react';
import { StackNavigator } from 'react-navigation';
import Main from 'screen/Main';

const App = StackNavigator({
  Main: {
    screen: Main
  },
}, {
  initialRouteName: 'Main'
});

export default App
