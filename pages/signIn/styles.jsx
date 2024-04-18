import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        gap: 15,
    },
    caixa:{
        height: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        borderWidth: 1,
        padding: 5,
        borderColor: '#8a8a8a',
    },
    title:{
        fontSize: 25,
        fontWeight:'bold'
    },
    caixas:{
        alignItems:'center',
        justifyContent:'center',
        padding:20,
    },
    btnOk:{
        height: 30,
        borderWidth: 0,
        backgroundColor:'#6666ff', 
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 11,
    },
    input: {
        flexDirection: 'column',
        gap: 10,
        width: '60%'
    }
})

export default styles