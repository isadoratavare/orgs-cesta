import React from 'react';
import { Text } from 'react-native';

export default function Texto({children}){
    return <Text>{children}</Text>
}
const styles = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
    }
})