import React from "react";
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';
import { TextInput } from 'react-native-paper';

import CustomButton from "../../components/custom-button/custom-button.component";

const Focus = () => {
    return(
        <View style={styles.container}>
        <TextInput />
        <CustomButton 
          title='Clica Aqui'
          onPress={handlePress}
        />
      </View>
    )

}

export default Focus;