import { View, Text, Image, StyleSheet, Button, Pressable } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from 'expo-image-picker';

export default function User() {
    const [foto, setFoto] = useState('https://play-lh.googleusercontent.com/r0xN9hXjVDp3Jy6auZhvByz7HN7PfnikPQAis49N3rMoltG1VT_z_iZPr9GHJQ5r9zg=w240-h480-rw');

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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
