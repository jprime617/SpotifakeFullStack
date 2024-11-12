import { View, Text, StyleSheet, Image, Pressable, SafeAreaView } from "react-native";
import { Link } from "expo-router";
import React, { useContext } from "react";
import { AuthContext } from "../../scripts/authContext";

export default function Inicio() {

    return (
        <View style={styles.container}>
                <Link href={'/usuario/usuario'}>
                    <Pressable style={{ backgroundColor: 'blue' }}>
                        <Text style={{ color: 'white' }}>Perfil</Text>
                    </Pressable>
                </Link>
                <Link href={'/pagamento/pagar'} asChild>
                    <Pressable>
                        <Text style={{ color: 'white' }}>Pagar</Text>
                    </Pressable>
                </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#250902',
        color: 'white'
        
    },
    pressable: {

    }
})