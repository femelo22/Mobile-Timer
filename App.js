import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Focus from './features/focus/Focus'
import Hello from './features/hello/Hello'


export default function App() {
  return (
   <View style={styles.container}>
     <Hello />
     {/* <Focus /> */}
   </View>
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
