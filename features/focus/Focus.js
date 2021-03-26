import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';
import { TextInput } from 'react-native-paper';

import CustomButton from "../../components/custom-button/custom-button.component";
import RoundedButton from "../../components/rounded-button/rounded-button.component";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: 'center'
  },
  title: {
    color: 'black',
    fontWeight: 700,
    fontSize: 20,
    fontFamily: 'Consolas'

  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: 'row'
  }
});




const Focus = ({ addSubject }) => {


  const [tempItem, setTempItem] = useState(null);

  const handleOnPress = () =>{
    console.log('entrou no handle FOCUS')
    addSubject(tempItem);
  }

    return(
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Não posso procastinar em: </Text>
              <View style={styles.inputContainer}>
                <TextInput 
                  style={{flex: 1, marginRight: 10}}              
                  onSubmitEditing={({ nativeEvent }) => {
                    setTempItem(nativeEvent.text);
                  }}
                 />
                <RoundedButton
                title="+"
                size={50}
                position="center"
                textColor='blue'
                style={{backgroundColor: '#bfc4dc'}}
                textStyle={{color: 'black'}}
                onPress={handleOnPress}
                />
               
              </View>
          </View>
        </View>
    )

}

export default Focus;