import { TouchableHighlight, Modal, View, Text, TextInput, StyleSheet } from "react-native";

const ModalTask = ({modal, handlePress, handleChangeText}) => {
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TextInput 
                        autoFocus={true}
                        onChangeText={text => handleChangeText(text)}
                    ></TextInput>

                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => handlePress(modal)}
                    >
                        <Text style={styles.textStyle}>Adicionar Tarefa</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex:5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
 

export default ModalTask