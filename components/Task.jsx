
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons'

const Task = ({desc, id, handlePress}) => {
    return(
        <View style={styles.tarefaSingle}>
            <View style={{flex: 1, width: '100%', marginLeft:10}}>
                <Text>{desc}</Text>
            </View>
            <View style={{flex: 1, alignItems:'flex-end', padding:10}}>
                <TouchableOpacity onPress={() => handlePress(id)}>
                    <AntDesign name='minuscircleo' size={24} color={'black'}></AntDesign>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tarefaSingle: {
        marginTop: 30,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexDirection: 'row',
        paddingBottom: 10
    }
})
 

export default Task