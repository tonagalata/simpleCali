import React, { Component } from 'react';
import { Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';

const Home = () => {
  return ( 
  <View>
    <Text>Home</Text>
    <Button
    title="Go to Chat"
    onPress={() => {
      Actions.push('chat');
    }}
    // style={styles.container}
    />
  </View> 
  );
}
 
export default Home;