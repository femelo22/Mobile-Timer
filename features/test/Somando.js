import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Consolas',
        fontSize: '20px',
        marginTop: '20px'
    },
    viewButton: {
        marginTop: '10px'
    },
    inputText: {
        marginTop: '5px'
    }
})


const Somador = () => {
    let [primeiroNumero, setPrimeiroNumero] = useState(null);
    let [segundoNumero, setSegundoNumero] = useState(null);
    let [total, setTotal] = useState();


    const handleSomar = (primeiroNumero, segundoNumero) => {

        total = (primeiroNumero + segundoNumero);

        return total;
    }


    return (
        <View>
            <TextInput
                style={styles.inputText}
                onSubmitEditing={({ nativeEvent }) => {
                    setPrimeiroNumero(nativeEvent.text);
                  }}
            />
            <TextInput
            style={styles.inputText}
                onSubmitEditing={({ nativeEvent }) => {
                    setSegundoNumero(nativeEvent.text);
                  }}
            />
            <View style={styles.viewButton}>
                <Button
                    title={'Somar'}
                    onPress={() => setTotal(handleSomar(primeiroNumero, segundoNumero))}
                />
                <Text style={styles.text}>Resultado: {total}</Text>
            </View>
        </View>
    )


}

export default Somador;