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
                <Pressable onPress={console.log(tokien)}>
                    <Text style={{ color: 'white' }}>Olokinho Meu</Text>
                </Pressable>
                <Text style={{ color: 'white' }}>{tokien}</Text>
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