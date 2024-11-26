import { View, Text, StyleSheet, Image } from "react-native"

const Info = ({ titulo, link}) => {
    return(
        <View style={styles.container}>
            <Image style={{height: 100, width: 100}} source={{ uri: link}}/>
            <Text style={{fontSize: 15, color: 'white'}}>{titulo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        margin: 20,
        height: 150,
        width: 150
    }
})

export default Info