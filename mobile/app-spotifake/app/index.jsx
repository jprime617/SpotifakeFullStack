import React from 'react';
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { Link } from 'expo-router'

export default function App() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={(vish) => setEmail(vish)}

            />
            <TextInput
                placeholder='Senha'
                value={senha}
                onChangeText={(vish) => setSenha(vish)}

            />
            <Pressable onPress={() => { console.log(email); console.log(senha) }}>
                <Text>
                    Nossa
                </Text>
            </Pressable>
            <Link href={'/spotifake/registro'} asChild>
                <Pressable>
                    <Text>
                        Crie Sua Conta
                    </Text>
                </Pressable>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})