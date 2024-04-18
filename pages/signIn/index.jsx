import React, { useState } from 'react'
import { View, Text, TextInput, Pre, Pressable } from 'react-native'
import styles from './styles'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Bem-vindo(a)!</Text>
            </View>

            <View style={styles.input}>
            <TextInput
                placeholder='Digite seu email'
                onChangeText={setEmail}
                value={email}
                style={styles.caixa}
            />
            <TextInput
                placeholder='Digite sua senha'
                onChangeText={setPassword}
                value={password}
                style={styles.caixa}
                secureTextEntry={true}
            />

            <Pressable
                style={styles.btnOk}
                onPress={()=> navigation.navigate('Read')}
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