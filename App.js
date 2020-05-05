import React, { Component } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
// import Home from './components/Home';
import Calculator from './components/Calculator';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack>
          {/* <Scene key="home" component={Home} /> */}
            <Scene key="calculate" component={Calculator} />
        </Stack>
      </Router>
    );
  }
}
