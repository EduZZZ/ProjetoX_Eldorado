import React from 'react';

import {Image, Text, StyleSheet, Dimensions, View} from 'react-native';

import logoVendedor from '../../../assets/logo.png';

export default function Detalhes(){
    return<>
    <Text style={styles.detalhes}>Detalhes do Carrinho</Text>
      <Text style={styles.titulo}>Kit IoT </Text>

      <View style={styles.vendedor}>
      <Image style={styles.logoVendedor} source={logoVendedor}/>
      <Text style={styles.nomeVendedor}>Nuvem's Shopping</Text>
      </View>

      <Text style={styles.desc}>Um kit IoT que revoluciona a vida dos estudantes!</Text>
      <Text style={styles.preco}> R$ 99,00</Text>

    </>
    ;

}
const styles = StyleSheet.create({
    
  detalhes:{
    fontWeight:"bold",
    fontSize: 25,
    lineHeight: 35,
    textAlign:"center",
  },
  titulo:{
    color:"#FF4408",
    fontWeight:"bold",
    fontSize: 25,
    lineHeight: 35,
    textAlign:"center",

  },
  nomeVendedor:{
    color: "#a3a3a3",
    fontSize: 18,
    lineHeight: 26,
    marginLeft: 10,
  },
  desc:{
    color: "#a1a1a1",
    fontSize: 20,
    paddingVertical: 10,
    

  },
  preco:{
    fontSize: 35,
    fontWeight:"bold",
    textAlign:"right",
    paddingHorizontal: 10,
  },
  logoVendedor:{
    width: 32,
    height: 32,
    marginLeft: 30,

  },
  vendedor:{
    flexDirection:"row",
    padding: 10
  },









    
})
