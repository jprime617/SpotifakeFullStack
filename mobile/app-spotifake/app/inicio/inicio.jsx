import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import React, { useContext } from "react";
import { AuthContext } from "../../scripts/authContext";

export default function Inicio() {
    const { tokien, setTokien } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <View>
                <Link href={'/usuario/usuario'}>
                    <Pressable style={{ backgroundColor: 'blue' }}>
                        <Text style={{ color: 'white' }}>Perfil</Text>
                    </Pressable>
                </Link>
                <Text style={{ color: 'white' }}>{tokien}</Text>
                <Link href={'/pagamento/pagar'} asChild>
                    <Pressable>
                        <Text style={{color: 'white'}}>Pagar</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#250902',
        color: 'white'
    },
    pressable: {

    }
})