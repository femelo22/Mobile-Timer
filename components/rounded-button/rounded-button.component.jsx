import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
    radius:{
        borderRadius: 50,
        width: 50,
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        backgroundColor: '#7289DA',
        borderWidth: 2,
    },
    textStyle: {
        color: 'white',
        fontSize: 24
    }
})

const RoundedButton = ({ title }) => {
    
    return(
        <TouchableOpacity style={styles.radius}>
            <Text style={styles.textStyle}> {title} </Text>
        </TouchableOpacity>
    )
}

export default RoundedButton;