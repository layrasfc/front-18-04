import React, { useState, useEffect } from 'react'
import AsyncStorage  from '@react-native-async-storage/async-storage'

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

    return (
        <View></View>
    )
}

