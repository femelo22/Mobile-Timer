import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { light, orangePalette } from '../../utils/colors'
import { spacing, fontSize } from '../../utils/sizes'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: orangePalette.orangeLight
    },
    title: {
        color: light.black,
        textAlign: 'center',
        fontSize: fontSize.xl
    },
    task: {
        color: light.black,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: fontSize.xl,
        marginTop: 15
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