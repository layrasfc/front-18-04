import React, { useState, useEffect } from 'react'
import AsyncStorage  from '@react-native-async-storage/async-storage'
import styles from './styles';
import {View, Text} from 'react-native'


export default function Home() {

    const [token, setToken] = useState('')
    useEffect(()=>{
        AsyncStorage.getItem('token') 
        .then(tokenY =>{
            if(tokenY){
                setToken(tokenY)
                console.log("HOME - Token de login:", tokenY)
            } else {
                console.log("Token não encontrado")
            }
        }).catch((error)=>{
            console.error("Erro: ", error)
        })
    }, [token]) 

    const latlong = []

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.texto, styles.title]}>Minha escola</Text>
            </View>

            <View style={styles.content}>
                <Text style={[styles.texto, styles.inicial]}>Olá, Layra</Text>
                <View style={styles.line}/>
                <Text style={[styles.texto, styles.inicial, {color: '#C10000'}]}>Mapa em tempo real:</Text>
                <View style={styles.mapa}>

                </View>
                <View style={styles.more}>
<Text style={[styles.texto, styles.subtitle]}>Informações gerais:</Text>
                <Text style={[styles.texto]}>Sensores ativos agora: 3 unidades</Text>
                <Text style={[styles.texto]}>Sensor mais próximo: MT11 (2km)</Text>

                </View>
                
            </View>
        </View>
    )
}

