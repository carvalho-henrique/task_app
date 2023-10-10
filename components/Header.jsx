import { ImageBackground, View, Text, StyleSheet } from "react-native";

const image = require('../resources/bg.jpg')

const Header = () => {
    return(
        <ImageBackground 
            source={image}
            style={styles.image}
        >
            <View style={styles.coverView}>
                <Text style={styles.textHeader}>Lista de Tarefas - Apenas</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
    },
    coverView: {
        width: '100%',
        height: 100,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    textHeader: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        marginTop: 35,
    },
}); 
 

export default Header