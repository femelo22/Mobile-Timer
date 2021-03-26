import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Focus from './features/focus/Focus';
import Hooks from './features/hooks/Hooks';
import Somando from './features/test/Somando'
import Fetch from './features/test/Fetch';


export default function App() {

  const [focusSubject, setFocusSubject] = useState(null);

  return (
   <View style={styles.container}>
     {
       focusSubject ?<Text style={styles.text}> Meu foco agora é! </Text> :(
        <Focus addSubject={setFocusSubject}/>
       )
     } { focusSubject }
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
  text: {
    fontFamily: 'Consolas',
    fontSize: '15px',
    marginBottom: '10px',
    color: 'red'
  }
});
