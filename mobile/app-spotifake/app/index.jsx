import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, StatusBar, Button } from 'react-native';
import { Link, useRouter } from 'expo-router'
import { useFonts } from 'expo-font';
import { AuthContext } from '../scripts/authContext.js';

export default function Login() {
    const { tokien, setTokien, ngrok } = useContext(AuthContext)
    const router = useRouter();
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [fontsLoaded] = useFonts({
        'Gotham-Black': require('../assets/fonts/Gotham-Black.otf'),
        'Gotham-Bold': require('../assets/fonts/Gotham-Bold.otf'),
        'Gotham-Bookitalic': require('../assets/fonts/Gotham-BookItalic.otf'),
        'Gotham-Light': require('../assets/fonts/Gotham-Light.otf'),
        'Gotham-Thin': require('../assets/fonts/Gotham-Thin.otf'),
        'Gotham-Thinitalic': require('../assets/fonts/Gotham-ThinItalic.otf'),
        'Gotham-Black': require('../assets/fonts/Gotham-Black.otf'),
        'Gotham-Ultraitalic': require('../assets/fonts/Gotham-UltraItalic.otf'),
        'Gotham-XLight': require('../assets/fonts/Gotham-XLight.otf'),
        'Gotham-XLightItalic': require('../assets/fonts/Gotham-XLightItalic.otf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const connect = async () => {
        try {
            const response = await fetch(`${ngrok}/autenticacao/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
            });
            const data = await response.json();
            console.log(response.ok)
            if (response.ok) {
                console.log("Login realizado com sucesso!");
                setTokien(JSON.stringify(data.tokenJWT))
                console.log(tokien)
                router.push('home/home')
            } else {
                console.log("Erro ao realizar login:", data.error);
                alert(data.error);
            }
        } catch (error) {
            console.error("Erro ao conectar ao servidor:", error);
        }
    };

    useEffect(() => {
        const nossa = async () => {
            try{
                const response = await fetch(`${ngrok}/usuarios/receber`)
            }catch (error) {
                console.log(error)
            }
        }
    }, [])



    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.caixatitulo}>
                <Text style={styles.titulo}>SpotiFake</Text>
                <Text style={{ color: '#FFFF', marginTop: 70, fontFamily: 'Gotham-Black' }}>Login</Text>
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

                <Pressable style={styles.botao}
                    onPress={connect}
                >
                    <Text style={{ color: '#FFFF', fontSize: 20, fontFamily: 'Gotham-Black' }}>
                        Login
                    </Text>
                </Pressable>

                <Link href={'/cadastro/registro'} asChild>
                    <Pressable style={styles.link}>
                        <Text style={{ textDecorationLine: 'underline', color: '#FFFF', fontFamily: 'Gotham-XLight' }}>
                            Crie Sua Conta
                        </Text>
                    </Pressable>
                </Link>
                <Link href={'oh my god'} asChild>
                    <Text style={{color: 'blue'}}>Telas</Text>
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
    input: {
        backgroundColor: '#640D14',
        height: 50,
        width: 300,
        marginBottom: 30,
        borderRadius: 30,
        color: '#FFFF',
        paddingLeft: 20,
        paddingRight: 10,
        textAlign: 'left',
        fontFamily: 'Gotham-XLight'
    },
    titulo: {
        color: '#FFFF',
        fontSize: 40,
        fontFamily: 'Gotham-Bold',

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