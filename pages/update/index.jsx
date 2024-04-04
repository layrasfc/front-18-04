import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, Pressable, Alert, CheckBox } from 'react-native';
import styles from './styles';

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

    // Método GET
    const get = () => {
        axios.get('http://127.0.0.1:8000/api/usuario/' + userId)
            .then((response) => {
                setUsuario(response.data.nome)
                setRua(response.data.rua)
                setBairro(response.data.bairro)
                setCidade(response.data.cidade)
                setUF(response.data.uf)
                setCep(response.data.cep)
                setEmail(response.data.email)
            })
    }

    const update = () => {
        axios.delete('http://127.0.0.1:8000/api/usuario/' + userId)
        .then(()=> {
            setBairro('')
            setUsuario('')
            setRua('')
            setCidade('')
            setUF('')
            setCep('')
            setEmail('')
            setNum('')
            setPassword('')
        })
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Update</Text>

            <View style={styles.pesquisar}>
            <Text style={styles.subtitle}>Pesquisar pessoa</Text>
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
            <TextInput style={styles.resultado} value={usuario}/>
            <Text style={styles.texto}>Cep:</Text>
            <TextInput style={styles.resultado} value={cep}/>
            <Text style={styles.texto}>Rua:</Text>
            <TextInput style={styles.resultado} value={rua}/>
            <Text style={styles.texto}>Bairro:</Text>
            <TextInput style={styles.resultado} value={bairro}/>
            <Text style={styles.texto}>Cidade:</Text>
            <TextInput style={styles.resultado} value={cidade}/>
            <Text style={styles.texto}>UF:</Text>
            <TextInput style={styles.resultado} value={uf}/>
            <Text style={styles.texto}>Email:</Text>
            <TextInput style={styles.resultado} value={email}/>
            <Pressable style={styles.btnUpdate} onPress={update}>
                    <Text style={{ fontWeight: 'bold', color: '#fff' }}>UPDATE</Text>
            </Pressable>
            </View>

            </View>
    );
}


