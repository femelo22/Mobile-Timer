import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { colorsDefault } from '../../utils/colors'
import { spacing, fontSize } from '../../utils/sizes'


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: colorsDefault.black,
        textAlign: 'center',
        fontSize: fontSize.xl
    },
    task: {
        color: colorsDefault.black,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

const Timer = ({ focusSubject }) => {

    return(
        <View style={styles.container}>
            <View style={{ paddingTop: spacing.xxxl}}>
                <Text style={styles.title}>Meu foco agora é:</Text>
                <Text style={styles.task}> { focusSubject } </Text>
            </View>
        </View>
    )

}


export default Timer;