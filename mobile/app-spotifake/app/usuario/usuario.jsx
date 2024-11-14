import { View, Text, Image, StyleSheet, Button, Pressable, Modal, TextInput } from "react-native";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../scripts/authContext.js";
import * as ImagePicker from 'expo-image-picker';
import { jwtDecode } from 'jwt-decode'
import { Link } from "expo-router";

export default function User() {
    const { foto, setFoto, tokien, ngrok } = useContext(AuthContext)
    const infoUser = jwtDecode(tokien)
    const [formData, setFormData] = useState({ foto: '', email: infoUser.email, senha: '' })
    const [modalVisible, setModalVisible] = useState(false)





    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setFoto(result.assets[0].uri);
        }
    };

    const handleSendImage = async () => {
        try {
            const data = {
                "file": foto,
                "upload_preset": "ml_default",
                "name": "teste"
            }
            const res = await fetch('https://api.cloudinary.com/v1_1/ds4obhf70/upload',
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
            const result = await res.json()
            console.log(result.url)
            setFormData({ ...formData, foto: result.url})
            console.log(formData)
            uploadFoto()
        } catch (erro) {
            console.log(e)
        }
    };


    const atualizaSenha = async () => {
        try {
            const response = await fetch(`${ngrok}/usuarios/atualiza`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const data = await response.text()
            if (response.ok) {
                if (data == 'Atualizou') {
                    alert('Atualizou a Senha Man')
                }
            }
        } catch (erro) {
            console.log(erro)
        }
    };

    const uploadFoto = async () => {
        try {
            const response = await fetch(`${ngrok}/usuarios/setfoto`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const data = await response.text()
            if (response.ok) {
                if (data == 'Postou') {
                    alert('Foi a Foto')
                }
            }
        } catch (error) {
            console.log(error)
            console.log(formData)
        }
    }





    return (
        <View style={styles.container}>
            <Pressable onPress={() => pickImage()}>
                <Image
                    style={{ height: 200, width: 200, borderRadius: 100 }}
                    source={{ uri: foto }}
                />
            </Pressable>
            <Text style={{ color: 'white', width: 200 }}>{infoUser.nome_completo}</Text>
            <Text style={{ color: 'white', width: 200 }}>{infoUser.status}</Text>
            <Link href={'pagamento/pagar'} asChild>
                <Pressable style={styles.botao}>
                    <Text style={{ color: 'white' }}>Premium</Text>
                </Pressable>
            </Link>
            <Pressable onPress={() => handleSendImage()}>
                <Text style={{ color: 'white' }}>upload</Text>
            </Pressable>
            <Pressable onPress={() => setModalVisible(true)}>
                <Text style={{ color: 'white' }}>Trocar Senha</Text>
            </Pressable>
            <Text style={{color: 'white'}}>Clique na imagem para trocar</Text>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal Fechou');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.container}>
                    <Text style={{color: 'white', marginBottom: 30, fontSize: 30}}>Trocar Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Senha Nova'
                        value={formData.senha}
                        onChangeText={(alek) => setFormData({ ...formData, senha: alek })}
                        placeholderTextColor='gray'
                    />
                    <Pressable style = {styles.botao} onPress={() => {atualizaSenha(), setModalVisible(false)}}>
                        <Text style = {{color: 'white'}}>Trocar</Text>
                    </Pressable>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#250902',
    },
    image: {
        width: 200,
        height: 200,
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
});
