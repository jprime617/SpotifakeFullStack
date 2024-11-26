import { View, Text, StyleSheet } from "react-native";


const Header = ({titulo}) => {
    return(
        <View style={{alignItems: 'flex-start', justifyContent: 'center', backgroundColor: '#AD2831', width: '100%', height: 40, position: 'absolute', top: 0}}>
            <Text style={{color: 'white', fontSize: 25, marginLeft: 20}}>{titulo}</Text>
        </View>
    )
}

export default Header