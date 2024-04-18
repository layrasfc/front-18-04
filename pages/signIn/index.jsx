import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Pre, Pressable } from 'react-native'
import styles from './styles'
import AsyncStorage  from '@react-native-async-storage/async-storage'
import axios from 'axios'

export default function Login({ navigation }) {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState(null)

    useEffect( ()=>{
        // AsyncStorage: armazenamento interno do celular
        AsyncStorage.setItem('token', token) // procurar o token
        .then(()=>{
            if(token !=null){
                setToken(token)
                console.log("Token de login:", token)
                console.log("Token sucesso!")
            }
        }).catch((error)=>{
            console.error("Erro: ", error)
        })
    }, [token]) 
    
    // o gatilho será sempre que tiver um token novo
    const fetchToken = async () => { // async pois terão vários tokens ativos ao mesmo tempo
        try{
            // Enviar o login feito pelo usuário
            const response = await axios.post(
                'http://127.0.0.1:8000/token/', {
                    username: user,
                    password: password
                }
            ) // await esperar até encontrar

            setToken(response.data.access)
            navigation.navigate('Read')
            
        } catch(error){
            console.error("Deu erro: ", error)
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Bem-vindo(a)!</Text>
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
                onPress={fetchToken}
            >
                <Text  style={{color: 'white', fontWeight: 'bold'}}>Entrar</Text>
            </Pressable>

            <Pressable
                style={styles.btnOk}
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={{color: 'white', fontWeight: 'bold'}}>Cadastrar</Text>
            </Pressable>

            </View>


        </View>
    )
}