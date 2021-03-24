import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from "react-native";

const RoundedButton = ({
    style = {},
    textStyle = {},
    size = 40,
    ...otherProps
}) => {

    return(
        <TouchableOpacity style={[styles(size). radius, style]}>
            <Text style={[styles(size).textStyle, textStyle]}>
                { otherProps.title}
            </Text>
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