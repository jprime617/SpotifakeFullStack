import { View, Text, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av"
import React, { useState, useEffect } from "react";
import Slider from '@react-native-community/slider';



export default function Player() {

    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [position, setPosition] = useState(0); // Posição atual do áudio
    const [duration, setDuration] = useState(0); // Duração total do áudio

    const playAudio = async () => {
        try {
            // Se já há um áudio carregado, reproduza-o
            if (sound) {
                await sound.playAsync();
                setIsPlaying(true);
                return;
            }

            // Caso contrário, carregue um novo áudio
            const { sound: newSound } = await Audio.Sound.createAsync({
                uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            });

            setSound(newSound);
            await newSound.playAsync(); // Reproduza o áudio
            setIsPlaying(true);

            // Escute o término do áudio
            newSound.setOnPlaybackStatusUpdate((status) => {
                if (status.didJustFinish) {
                    setIsPlaying(false); // Atualize o estado quando o áudio terminar
                }
            });
        } catch (error) {
            console.error('Erro ao reproduzir áudio:', error);
        }
    };

    const pauseAudio = async () => {
        if (sound) {
            await sound.pauseAsync();
            setIsPlaying(false);
        }
    };

    const stopAudio = async () => {
        if (sound) {
            await sound.stopAsync();
            setSound(null);
            setIsPlaying(false);
        }
    };

    useEffect(() => {
        return () => {
            if (sound) {
                sound.unloadAsync(); // Libera os recursos de áudio
            }
        };
    }, [sound]);



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Player de Áudio</Text>
            <Button title={isPlaying ? 'Pausar' : 'Tocar'} onPress={isPlaying ? pauseAudio : playAudio} />
            <Button title="Parar" onPress={stopAudio} disabled={!isPlaying} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#250902',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        color: 'white'
    },
});