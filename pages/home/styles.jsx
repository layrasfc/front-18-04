import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        flex:1
    },
    header: {
        height: '12%',
        backgroundColor: '#F5F5F5',
        justifyContent: 'flex-end',
        paddingVertical: 10,
        marginBottom: 10,
        
    },
    title: {
        fontSize: 22,
        fontWeight: 700,
        
    },
    content:{
        height: '100%',
    
    },

    texto: {
        fontFamily: 'System',
        paddingHorizontal: 30,
        fontSize: 15,
    },

    inicial: {
        fontWeight: 600,
        fontSize: 18,
        paddingVertical: 15,
    },

    line: {
        height: 2,
        backgroundColor: '#F5F5F5',
    },

    mapa: {
        backgroundColor: '#E6E6E6',
        height: '55%',
        width: '85%',
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#C1C1C1'
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 600,
    },

    more: {
        flexDirection: 'column',
        gap: 5,
        paddingVertical: 20,
    }

})

export default styles