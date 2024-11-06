import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import User from "../usuario/user";
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <View style={styles.container}>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: 'transparent', // Torna a barra inferior transparente
                        borderTopWidth: 0, // Remove a borda superior da barra
                        position: 'absolute', // Faz com que a barra fique sobreposta ao conteúdo
                        bottom: 0, // Fixando a barra na parte inferior da tela
                        left: 0,
                        right: 0,
                        height: 60, // Altura da barra inferior
                        zIndex: 999, // Garantir que a barra fique acima de outros elementos
                    },
                    tabBarActiveTintColor: '#fff', // Cor do ícone ativo
                    tabBarInactiveTintColor: '#8c8c8c', // Cor do ícone inativo
                    tabBarLabelStyle: {
                        fontSize: 14,
                        fontWeight: 'bold',
                    },
                }}
            >
                <Tab.Screen
                    name="Inicio"
                    component={User}
                    options={{
                        tabBarIcon: ({ color, size }) => (<Icon name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Buscar"
                    component={User}
                    options={{
                        tabBarIcon: ({ color, size }) => (<Icon name="search" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Biblioteca"
                    component={User}
                    options={{
                        tabBarIcon: ({ color, size }) => (<Icon name="albums-outline" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Premium"
                    component={User}
                    options={{
                        tabBarIcon: ({ color, size }) => (<Icon name="cash-outline" size={size} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})