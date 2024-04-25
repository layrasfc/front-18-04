import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, Pressable, Alert, CheckBox } from 'react-native';
import styles from './styles';
import AsyncStorage  from '@react-native-async-storage/async-storage';


export default function Delete() {

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
    useEffect(() => {
        AsyncStorage.getItem('token')
            .then((tokenY) => {
                setToken(tokenY);
                console.log('UPDATE - Token de login: ', tokenY)
                
            })
            .catch(error => {
                console.error('Erro ao recuperar token:', error);
            });
    }, []);

    const dados = {
        'nome': usuario,
        'rua': rua,
        'bairro': bairro,
        'cidade': cidade,
        'uf': uf,
        'cep': cep,
        'email': email,
        'numero': num,
    }

    const update = async (dados, token) => {
        try {
             const response = await axios.put('http://127.0.0.1:8000/api/usuario/' + userId, dados, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },  
            })
                setBairro('')
                setUsuario('')
                setRua('')
                setCidade('')
                setUF('')
                setCep('')
                setEmail('')
                setNum('')
            }
        catch(erro){
            console.log(erro)
        }
    }

    // Método GET
    const get = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/usuario/' + userId, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUsuario(response.data.nome)
            setRua(response.data.rua)
            setBairro(response.data.bairro)
            setCidade(response.data.cidade)
            setUF(response.data.uf)
            setCep(response.data.cep)
            setEmail(response.data.email)
            setNum(response.data.numero)
        }
        catch (erro) {
            console.error(erro);
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Update</Text>

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
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>Pesquisar</Text>
                </Pressable>
            </View>
            </View>

            <View style={styles.campo}>
            <Text style={styles.subtitle}>Mude o quê deseja alterar:</Text>
            
            <Text style={styles.texto}>Nome:</Text>
            <TextInput style={styles.resultado} onChangeText={setUsuario} value={usuario}/>
            <Text style={styles.texto}>Cep:</Text>
            <TextInput style={styles.resultado} onChangeText={setCep} value={cep}/>
            <Text style={styles.texto}>Rua:</Text>
            <Text style={styles.resultado}>{rua}</Text>
            <Text style={styles.texto}>Bairro:</Text>
            <Text style={styles.resultado}>{bairro}</Text>
            <Text style={styles.texto}>Cidade:</Text>
            <Text style={styles.resultado}>{cidade}</Text>
            <Text style={styles.texto}>UF:</Text>
            <Text style={styles.resultado}>{uf}</Text>
            <Text style={styles.texto}>Número:</Text>
            <TextInput style={styles.resultado} onChangeText={setNum} value={num}/>
            <Text style={styles.texto}>Email:</Text>
            <TextInput style={styles.resultado} onChangeText={setEmail} value={email}/>
            <Pressable style={styles.btnUpdate} onPress={()=>update(dados, token)}>
                    <Text style={{ fontWeight: 'bold', color: '#fff' }}>PUT</Text>
            </Pressable>
            </View>

            </View>
    );
}


