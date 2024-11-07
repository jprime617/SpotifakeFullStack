import { View, Text, Image, StyleSheet } from "react-native";
import React, {useContext} from "react";
import { AuthContext } from "../../scripts/authContext";

export default function User() {
    const { tokien, setTokien } = useContext(AuthContext)
    return(
        <View style={styles.container}>
            <Image 
                style={{height: 40, width: 40, borderRadius: 60}}
                source={require('../../assets/images/icon.png')}
            />
            <Text style={{color: 'white'}}>{JSON.stringify(tokien)}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})