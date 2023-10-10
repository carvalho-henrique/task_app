import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonAdd = ({handlePress}) => {
    return(
        <TouchableOpacity
            onPress={() => handlePress()}
        >
            <Text style={styles.btnTaskAdd}>Adicionar Tarefa!</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnTaskAdd: {
        width: 200,
        padding: 8,
        backgroundColor: 'gray',
        marginTop:20,
        color:'white'
    },
}); 
 

export default ButtonAdd