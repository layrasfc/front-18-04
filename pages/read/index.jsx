import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import styles from './styles';
import AsyncStorage  from '@react-native-async-storage/async-storage'

export default function Read() {

    // Const GET
    const [userId, setUserId] = useState(0)
    const [usuario, setUsuario] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUF] = useState('')
    const [cep, setCep] = useState('')
    const [email, setEmail] = useState('')
    const [num, setNum] = useState('')
    const [userAdd, setUserEmail] = useState('')
    const [token, setToken] = useState('')

    // useEffect: TEM UMA FUNÇÃO E UMA LISTA
    // Executado em dois momentos, quando entra na tela e quando é chamado
    useEffect(()=>{
        // AsyncStorage: armazenamento interno do celular
        AsyncStorage.getItem('token') // procurar o token
        .then(tokenY =>{
            if(tokenY){
                setToken(tokenY)
                console.log("Token de login:", tokenY)
                console.log("Token sucesso!")
            } else {
                console.log("Token não encontrado")
            }
        }).catch((error)=>{
            console.error("Erro: ", error)
        })
    }, [token]) 

    // Método GET
    const get = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/usuario/' + userId, {
                headers: {
                    Authorization: 'Bearer' + token
                }
            })
                    setUsuario(response.data.nome)
                    setRua(response.data.rua)
                    setBairro(response.data.bairro)
                    setCidade(response.data.cidade)
                    setUF(response.data.uf)
                    setCep(response.data.cep)
                    setEmail(response.data.email)
                    setNum(response.data.numero)
        } catch (error){
            console.error("Erro: ", error)
        }
    }


    return (
        <View style={styles.container}>

            <Text style={styles.title}>Read</Text>

            <View style={styles.pesquisar}>
            <Text style={styles.subtitle}>Pesquisar pessoa:</Text>
            <Text style={styles.texto}>ID:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(e) => setUserId(e)}
            />
            {/* ##################### GET  ############################ */}
            <View>
                <Pressable
                    style={styles.btn}
                    onPress={get}
                >
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>GET</Text>
                </Pressable>
            </View>
            </View>

            <View style={styles.campo}>
            <Text style={styles.subtitle}>Resultado:</Text>
            <Text style={styles.texto}>Nome:</Text>
            <Text style={styles.resultado}>{usuario}</Text>
            <Text style={styles.texto}>Cep:</Text>
            <Text style={styles.resultado}>{cep}</Text>
            <Text style={styles.texto}>Rua:</Text>
            <Text style={styles.resultado}>{rua}</Text>
            <Text style={styles.texto}>Bairro:</Text>
            <Text style={styles.resultado}>{bairro}</Text>
            <Text style={styles.texto}>Cidade:</Text>
            <Text style={styles.resultado}>{cidade}</Text>
            <Text style={styles.texto}>UF:</Text>
            <Text style={styles.resultado}>{uf}</Text>
            <Text style={styles.texto}>Número:</Text>
            <Text style={styles.resultado}>{num}</Text>
            <Text style={styles.texto}>Email:</Text>
            <Text style={styles.resultado}>{email}</Text>
            </View>

            </View>
    );
}


