import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import StackNavigator from './src/navigation/StackNavigation'; // Ensure the path is correct

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* <Text>Hello</Text> */}
      <StackNavigator />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
