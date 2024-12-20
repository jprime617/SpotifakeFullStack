import React, { useContext } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, StatusBar, Button } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { AuthContext } from '../../scripts/authContext';


export default function Registro() {
    const { ngrok, setNogrok } = useContext(AuthContext)
    const router = useRouter();
    const [press, setPress] = useState(false)
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        senha: '',
        dataNascimento: '',
        cpf: ''
    })
    const [fontsLoaded] = useFonts({
        'Gotham-Black': require('../../assets/fonts/Gotham-Black.otf'),
        'Gotham-Bold': require('../../assets/fonts/Gotham-Bold.otf'),
        'Gotham-Bookitalic': require('../../assets/fonts/Gotham-BookItalic.otf'),
        'Gotham-Light': require('../../assets/fonts/Gotham-Light.otf'),
        'Gotham-Thin': require('../../assets/fonts/Gotham-Thin.otf'),
        'Gotham-Thinitalic': require('../../assets/fonts/Gotham-ThinItalic.otf'),
        'Gotham-Black': require('../../assets/fonts/Gotham-Black.otf'),
        'Gotham-Ultraitalic': require('../../assets/fonts/Gotham-UltraItalic.otf'),
        'Gotham-XLight': require('../../assets/fonts/Gotham-XLight.otf'),
        'Gotham-XLightItalic': require('../../assets/fonts/Gotham-XLightItalic.otf'),
    });

    if (!fontsLoaded) {
        return null;
    }


    const connect = async () => {
        try {
            const response = await fetch(`${ngrok}/autenticacao/registro`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.text();

            if (response.ok) {
                if (data == 'Esse Email já Está Cadastrado') {
                    return alert("Esse email ai Ja ta cadastrado");
                }
                if (data == 'tem que preencher tudo cabaço') {
                    return alert('preenche esse caralho ai porra')
                }
                    alert('Registrado com Sucesso');
                    router.push('/')
            } else {
                console.log("Erro ao realizar o Registro:", data);
            }

        } catch (error) {
            console.error(error);
            console.log('Erro', 'Não foi possível conectar ao servidor.');
        }
    };



    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.caixatitulo}>
                <Text style={styles.titulo}>Registro</Text>
            </View>
            <View style={styles.caixainput}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome'
                    value={formData.nome}
                    onChangeText={(nossa) => setFormData({ ...formData, nome: nossa})}
                    placeholderTextColor='gray'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Sobrenome'
                    value={formData.sobrenome}
                    onChangeText={(alek) => setFormData({ ...formData, sobrenome: alek })}
                    placeholderTextColor='gray'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={formData.email}
                    onChangeText={(alek) => setFormData({ ...formData, email: alek })}
                    placeholderTextColor='gray'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    value={formData.senha}
                    onChangeText={(alek) => setFormData({ ...formData, senha: alek })}
                    placeholderTextColor='gray'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Data de Nascimento'
                    value={formData.dataNascimento}
                    onChangeText={(alek) => setFormData({ ...formData, dataNascimento: alek })}
                    placeholderTextColor='gray'
                />
                <TextInput
                    style={styles.input}
                    placeholder='CPF *Opcional*'
                    value={formData.cpf}
                    onChangeText={(alek) => setFormData({ ...formData, cpf: alek })}
                    placeholderTextColor='gray'
                />
                <Pressable style={[styles.botao, press && styles.bpress]}
                    onPress={connect}
                    onPressIn={() => setPress(true)}
                    onPressOut={() => setPress(false)}
                >
                    <Text style={{ color: '#FFFF', fontSize: 20, fontFamily: 'Gotham-Black' }}>
                        Registrar
                    </Text>
                </Pressable>
                <Pressable onPress={console.log(formData)}>
                    <Text>Nossa</Text>
                </Pressable>
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
        textAlign: 'left',
        fontFamily: 'Gotham-XLight'
    },
    titulo: {
        color: '#FFFF',
        fontSize: 40,
        fontFamily: 'Gotham-Black'

    },
    caixatitulo: {
        // backgroundColor: 'gray',
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.5,
        marginTop: 55
    },
    caixainput: {
        // backgroundColor: 'blue',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        flex: 1.7
    },
})