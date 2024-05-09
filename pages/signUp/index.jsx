import React, { useState, useEffect } from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
import { FontAwesome, AntDesign } from "@expo/vector-icons"
import styles from './styles'
import axios from 'axios'
import AsyncStorage  from '@react-native-async-storage/async-storage'

export default function SignUp({navigation}) {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [erro, setErro] = useState(null)
    const [token, setToken] = useState(null)

    useEffect( ()=>{
        // AsyncStorage: armazenamento interno do celular
        AsyncStorage.setItem('token', token) // procurar o token
        .then(()=>{
            if(token !=null){
                setToken(token)
                console.log("SIGN IN - Token de login:", token)
            }
        }).catch((error)=>{
            console.error("Erro: ", error)
        })
    }, [token]) 

    const createUser =  async()=>{
        try{
            const response = await axios.post(
                'http://127.0.0.1:8000/create_user/', {
                    username: user,
                    password: password
                }
            )

            const resp = await axios.post(
                'http://127.0.0.1:8000/token/', {
                    username: user,
                    password: password
                }
            ) // await esperar até encontrar
            setToken(resp.data.access)
            navigation.navigate('Read')
        } catch(error){
            console.error("Deu erro: ", error)
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Cadastre-se</Text>
            </View>

            <View style={styles.input}>
            <TextInput
                placeholder='Digite seu usuario...'
                placeholderTextColor="#8c8c8c" 
                onChangeText={setUser}
                value={user}
                style={styles.caixa}
            />
            <TextInput
                placeholder='Digite sua senha...'
                placeholderTextColor="#8c8c8c" 
                onChangeText={setPassword}
                value={password}
                style={styles.caixa}
                secureTextEntry={true}
            />


            <Pressable
                style={styles.btnOk}
                onPress={createUser}
            >
                <Text style={{color: 'white', fontWeight: 'bold'}}>Cadastrar</Text>
            </Pressable>

            </View>


        </View>
    )
}