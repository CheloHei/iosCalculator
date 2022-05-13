import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor:'black',
        
    },
    calculatorContainer: {
        paddingHorizontal:20,
        flex:1,
        justifyContent:'flex-end',
    },
    resultado:{
        color:'white',
        fontSize:60,
        textAlign:'right',
        marginBottom:10

    },
    resultadoChico:{
        color:'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign:'right',

    },
    fila:{
        flexDirection:"row",
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10,
    },
    boton:{
        height:80,
        width:80,
        backgroundColor:'#333333',
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10,
    },
    botonText: {
        textAlign:'center',
        padding:10,
        fontSize:30,
        color:'black',
        fontWeight:'300',
    }
});