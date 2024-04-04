
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        backgroundColor: '#fff'
    },
    campo: {
        width: "60%",
    },
    pesquisar: {
        width: '60%',

    },
    title: {
        fontSize: 30,
        fontWeight: 700,
        paddingBottom: 30,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 600,
        paddingBottom: 15,

    },
    input: {
        height: 30,
        borderRadius: 5,
        borderWidth: 1,
        padding: 5,
        borderColor: '#8a8a8a',
    },

    resultado: {
        width: '100%',
        height: 30,
        borderRadius: 5,
        backgroundColor: '#e3e3e3',
        borderWidth: 1,
        padding: 5,
        borderColor: '#8a8a8a',
    },
    texto: {
        fontSize: 15,
        fontWeight: 500,
        padding: 2,
    },
    btn: {
        height: 30,
        marginTop: 25,
        marginBottom: 10,
        borderWidth: 0,
        backgroundColor: '#32a852',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default styles