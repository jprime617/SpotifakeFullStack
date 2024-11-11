import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

export default function Pagar() {
    const [formData, setFormData] = useState({
        numeroCartao: '',
        senha: '',
        data: '',
        CVV: ''
    })
    return (
        <View style={{ backgroundColor: '#250902', flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
            <Text style={{color: '#FFFF', marginBottom: 30, fontSize: 30, marginTop: 30}}> Assinar Premium</Text>
            <TextInput
                style={styles.input}
                placeholder='Numero do Cartão'
                value={formData.numeroCartao}
                onChangeText={(alek) => setFormData({ ...formData, numeroCartao: alek })}
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
                placeholder='Data de Vencimento'
                value={formData.data}
                onChangeText={(alek) => setFormData({ ...formData, data: alek })}
                placeholderTextColor='gray'
            />
            <TextInput
                style={styles.input}
                placeholder='CVV'
                value={formData.CVV}
                onChangeText={(alek) => setFormData({ ...formData, CVV: alek })}
                placeholderTextColor='gray'
            />
            <Pressable style={styles.botao}>
                <Text>Assinar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#640D14',
        height: 30,
        width: 300,
        marginBottom: 30,
        borderRadius: 30,
        color: '#FFFF',
        paddingLeft: 20,
        textAlign: 'left',
        fontFamily: 'Gotham-XLight'
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
})