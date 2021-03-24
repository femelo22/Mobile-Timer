import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import CustomButton from '../../components/custom-button/custom-button.component';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
});

const Hooks = () => {

    let [contador, setContador] = useState(10);
    let [outroContador, setOutroContador] = useState(100);

    useEffect(() => {
        console.log('useEffect');
    }, []);

    const handleCount = () => {
        setContador(contador++)
    }

    const handleOutro = () =>{
        setOutroContador(outroContador--)
    }

    return(
        <View style={styles.container}>
            <Text>Valor a somar: {contador}</Text>
            <CustomButton title='Somar' onPress={handleCount} />
            <Text>Valor a diminuir: {outroContador}</Text>
            <CustomButton title='Subtrair' onPress={handleOutro} />
        </View>
    )
}

export default Hooks;