import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Focus from './features/focus/Focus';
import Hooks from './features/hooks/Hooks';
import Somando from './features/test/Somando'


export default function App() {
  return (
   <View style={styles.container}>
     <Somando /> 
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
