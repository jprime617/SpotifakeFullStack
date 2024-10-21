import React from 'react';
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Registro() {
    const [formData, setFormData] = useState({
        'nome': '',
        'sobrenome': '',
        'email': '',
        'senha': '',
        'dataNascimento': ''
    })
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Nome'
                value={formData.nome}
                onChangeText={(alek) => setFormData({ ...formData, nome: alek })}
            />
            <TextInput
                placeholder='Sobrenome'
                value={formData.sobrenome}
                onChangeText={(alek) => setFormData({ ...formData, sobrenome: alek })}
            />
            <TextInput
                placeholder='Email'
                value={formData.email}
                onChangeText={(alek) => setFormData({ ...formData, email: alek })}
            />
            <TextInput
                placeholder='Senha'
                value={formData.senha}
                onChangeText={(alek) => setFormData({ ...formData, senha: alek })}
            />
            <TextInput
                placeholder='Data de Nascimento'
                value={formData.dataNascimento}
                onChangeText={(alek) => setFormData({ ...formData, dataNascimento: alek })}
            />
            <Pressable onPress={() => console.log(formData)}>
                <Text>
                    Nossa
                </Text>
            </Pressable>

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