import React from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';
import { Link } from 'expo-router'

export default function App() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [press, setPress] = useState(false)
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.caixatitulo}>
                <Text style={styles.titulo}>SpotiFake</Text>
                <Text style={{color: '#FFFF', marginTop: 70, fontWeight: 'bold'}}>Login</Text>
            </View>
            <View style={styles.caixainput}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={(vish) => setEmail(vish)}
                    style={styles.input}
                    placeholderTextColor='gray'

                />
                <TextInput
                    placeholder='Senha'
                    value={senha}
                    onChangeText={(vish) => setSenha(vish)}
                    style={styles.input}
                    placeholderTextColor='gray'

                />
                <Pressable style={[styles.botao, press && styles.bpress]}
                    onPress={() => { console.log(email); console.log(senha) }}
                    onPressIn={() => setPress(true)}
                    onPressOut={() => setPress(false)}
                >
                    <Text style={{color: '#FFFF', fontSize: 20, fontWeight: 'bold'}}>
                        Login
                    </Text>
                </Pressable>
                <Link href={'/spotifake/registro'} asChild>
                    <Pressable style={styles.link}>
                        <Text style={{ textDecorationLine: 'underline', color: '#FFFF' }}>
                            Crie Sua Conta
                        </Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#250902'
    },
    botao: {
        backgroundColor: '#800E13',
        padding: 15,
        borderRadius: 20,
        width: 150,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bpress: {
        backgroundColor: '#38040E'
    },
    input: {
        backgroundColor: '#640D14',
        height: 50,
        width: 300,
        marginBottom: 30,
        borderRadius: 30,
        color: '#FFFF',
        paddingLeft: 20,
        textAlign: 'left'
    },
    titulo: {
        color: '#FFFF',
        fontSize: 40,
        fontWeight: 'bold'

    },
    caixatitulo: {
        // backgroundColor: 'gray',
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 50
    },
    caixainput: {
        // backgroundColor: 'blue',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        flex: 1.5,
        marginTop: 50
    },
    link: {
        padding: 20,
    }
})