import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function cesta(){
    return <> 
        <Image style={styles.topo} source={topo} />
        <Text style={styles.title}>Detalhe da cesta</Text>

        <View style={styles.cesta}>
            
            <Text style={styles.nome}>Cesta de Verduras</Text>
            <View style={styles.infoFazenda}>
                <Image source={logo} style={styles.imagemFazenda}/>
                <Text style={styles.nomeFazenda}>Jenny Jack Farm</Text>
            </View>
            <Text style={styles.descricao}>Uma cesta com produtos selecionados cuidadosamente
                da fazenda direto para a sua cozinha
            </Text>
            <Text style={styles.preco}>R$40,00</Text>
        </View>
    </>
   
}
const styles = StyleSheet.create({
    topo : {
        width: width,
        height: 578 / 768 * width,
        fontFamily: "MontserratBold"
    },
    title:{
        width: width,
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontFamily: "MontserratBold",
        padding: 16
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontFamily: "MontserratBold"
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily: "MontserratBold"
    },
    imagemFazenda:{
        width: 32,
        height: 32, 
        marginRight: 12
    },
    infoFazenda:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 16,
        fontFamily: "MontserratRegular",
    },
    descricao: {
        color:"#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }

})