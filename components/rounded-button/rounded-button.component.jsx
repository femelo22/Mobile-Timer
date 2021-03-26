import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from "react-native";

const RoundedButton = ({
    title,
    size = 40,
    position ='center',
    textColor = 'white',
    style = {},
    textStyle = {},
    ...otherProps
}) => {

    return(
        <TouchableOpacity 
            style={[styles(size, position, textColor).radius, style]}
                {...otherProps}
        >
            <Text style={[styles(size).textStyle, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = (size)  => StyleSheet.create({
    radius:{
        borderRadius: size/2,
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'blue',
        borderWidth: 2,
    },
    textStyle: {
        color: 'blue',
        fontSize: size / 3,
    }
})

export default RoundedButton;