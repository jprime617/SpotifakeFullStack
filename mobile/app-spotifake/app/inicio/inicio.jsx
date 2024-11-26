import { View, Text, StyleSheet, Image, Pressable, SafeAreaView, FlatList } from "react-native";
import { Link } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../scripts/authContext";
import Info from "../../components/ArtInfo";
import Header from "../../components/Header";



export default function Inicio() {
    const [artInfo, setArtInfo] = useState([])
    const [artAlbu, setArtAlbu] = useState([])
    const { ngrok } = useContext(AuthContext)

    useEffect(() => {
        const Nossa = async () => {
            try {
                const response = await fetch(`${ngrok}/musica/artistas`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: null,
                })

                const responseA = await fetch(`${ngrok}/musica/albums`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: null,
                })

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                const dataA = await responseA.json();
                console.log("Dados recebidos:", JSON.stringify(data)); // Log para depuração
                setArtInfo(data); // Certifique-se de que `data` seja um array
                setArtAlbu(dataA)


            } catch (error) {
                console.log(error)
            };
        }
        Nossa()
    }, []);


    return (
        <View style={styles.container}>
            <Header titulo={'Home'}/>
            <View style={styles.flatmassa}>
                <Text style={{ color: 'white', fontSize: 25 }}>Artistas</Text>
                <FlatList
                    horizontal
                    data={artInfo}
                    renderItem={({ item }) => <Info titulo={item.nome} link={item.imageUrl} />}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.flatmassa}>
                <Text style={{ color: 'white', fontSize: 25 }}>Albums</Text>
                <FlatList
                    horizontal
                    data={artAlbu}
                    renderItem={({ item }) => <Info titulo={item.title} link={item.coverImageUrl} />}
                    keyExtractor={item => item.id}
                />
            </View>

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

    },
    flatmassa: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#250902',
        color: 'white',
        height: 250
    }

})