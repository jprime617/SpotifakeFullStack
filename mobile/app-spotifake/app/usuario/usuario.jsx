import { View, Text, Image, StyleSheet, Button, Pressable } from "react-native";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../scripts/authContext";
import * as ImagePicker from 'expo-image-picker';
import { jwtDecode } from 'jwt-decode'
import { AdvancedImage, upload } from 'cloudinary-react-native';
import { Cloudinary } from "@cloudinary/url-gen";
import { Link } from "expo-router";

export default function User() {
    const { foto, setFoto, tokien, setTokien } = useContext(AuthContext)
    const infoUser = jwtDecode(tokien)




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
});
