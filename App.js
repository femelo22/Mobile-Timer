import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Focus from './features/focus/Focus';
import Timer from './features/timer/Timer';
import { light, orangePalette } from './utils/colors';


export default function App() {

  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      {
        focusSubject ?
         <Timer focusSubject={focusSubject} /> : 
          (
            <Focus addSubject={setFocusSubject} />
          )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: orangePalette.orangeMiddle,
  }
});
