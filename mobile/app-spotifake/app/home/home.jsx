import React, { useContext, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthContext } from "../../scripts/authContext";
import Inicio from "../inicio/inicio";
import Icon from 'react-native-vector-icons/Ionicons';
import User from "../usuario/usuario";
import Player from "../player/player";

const Tab = createBottomTabNavigator();

export default function Home() {
    const { foto, setFoto } = useContext(AuthContext)



    return (
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Define transparência para a barra
                        borderTopWidth: 0, // Remove a borda superior da barra
                        position: 'absolute', // Faz a barra flutuar sobre o conteúdo
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 75,
                        zIndex: 999,
                        elevation: 0, // Remove sombra no Android

                    },
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: '#8c8c8c',
                    tabBarLabelStyle: {
                        fontSize: 14,
                        fontWeight: 'bold',
                    },
                }}
            >
                <Tab.Screen
                    name="Inicio"
                    component={Inicio}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Buscar"
                    component={Inicio}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="search" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Biblioteca"
                    component={Player}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="albums-outline" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Usuário"
                    component={User}
                    options={{
                        tabBarIcon: () => (
                            <Image style={{width: 40, height: 40, borderRadius: 100}} source={{ uri: foto }} />
                        ),
                    }}
                />
            </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
