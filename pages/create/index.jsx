import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import styles from './styles';
import { SectionList } from 'react-native-web';

// 
export default function Create() {
    const [usuario, setUsuario] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUF] = useState('')
    const [cep, setCep] = useState('')
    const [email, setEmail] = useState('')
    const [num, setNum] = useState('')
    const [pass, setPassword] = useState('')

    const post = () => {
        axios.post('http://127.0.0.1:8000/api/usuarios', {
            'nome': usuario,
            'rua': rua,
            'bairro': bairro,
            'cidade': cidade,
            'uf': uf,
            'cep': cep,
            'email': email,
            'numero': num,
        }).then((response)=>{
            console.log(response)
            setBairro('')
            setUsuario('')
            setRua('')
            setCidade('')
            setUF('')
            setCep('')
            setEmail('')
            setNum('')
        }).catch((error)=>{
            console.log(error)
        })
    }

    const buscar = () => {
        axios.get('https://viacep.com.br/ws/' + cep + '/json/')
            .then((response) => {
                setRua(response.data.logradouro)
                setBairro(response.data.bairro)
                setCidade(response.data.localidade)
                setUF(response.data.uf)
                setNum(response.data.numero)
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create</Text>
            <View style={styles.campo}>
            <Text style={styles.subtitle}>Insira os dados:</Text>
            <Text style={styles.texto}>Nome:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setUsuario}
                value={usuario}
            />
                <Text style={styles.texto}>Cep:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setCep}
                    value={cep}
                />
                <Pressable
                    style={styles.btnBuscar}
                    onPress={buscar}
                >
                    <Text style={{ fontWeight: 'bold', color: '#fff' }}>Buscar endereço</Text>
                </Pressable>
                <Text style={styles.texto}>Rua:</Text>
                <Text style={styles.resultado}>{rua}</Text>
                <Text style={styles.texto}>Nº</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setNum}
                    value={num}
                />
            <Text style={styles.texto}>Bairro:</Text>
            <Text style={styles.resultado}>{bairro}</Text>
            <Text style={styles.texto}>Cidade:</Text>
            <Text style={styles.resultado}>{cidade}</Text>
            <Text style={styles.texto}>UF:</Text>
            <Text style={styles.resultado}>{uf}</Text>

            <Text style={styles.texto}>Email:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
            />


            <Text style={styles.texto}>Senha:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(e) => setPassword(e)}
                value={pass}
                secureTextEntry={true}
                
            />
            <Pressable
                    style={styles.btnPost}
                    onPress={post}
                >
                    <Text style={{ fontWeight: 'bold', color: '#fff' }}>POST</Text>
                </Pressable>
            </View>


        </View>
    );
}


