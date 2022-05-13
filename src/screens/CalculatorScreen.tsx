import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { useCalculadora } from '../hooks/useCalculadora'
import { styles } from '../theme/appTheme'

enum Operators {
    sumar, restar, multiplicar, dividir
}

export const CalculatorScreen = () => {

    const {numero,
        numeroAnterior,
        limpiar,
        del,
        calcular,
        btnDivir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        masMenos,
        armarNumero} = useCalculadora();


    return (
        <View style={styles.calculatorContainer}>
            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoChico}>{numeroAnterior}</Text>
                )
            }
            <Text
                style={styles.resultado}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>

            <View style={styles.fila}>
                <BotonCalc texto="C" color="#2d2d2d" accion={limpiar} />
                <BotonCalc texto="+/-" accion={masMenos} />
                <BotonCalc texto="del" color="#2d2d2d" accion={del} />
                <BotonCalc texto="/" color="#ff9427" accion={btnDivir} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="7" accion={armarNumero} />
                <BotonCalc texto="8" accion={armarNumero} />
                <BotonCalc texto="9" accion={armarNumero} />
                <BotonCalc texto="*" color="#ff9427" accion={btnMultiplicar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="4" accion={armarNumero} />
                <BotonCalc texto="5" accion={armarNumero} />
                <BotonCalc texto="6" accion={armarNumero} />
                <BotonCalc texto="-" color="#ff9427" accion={btnRestar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="3" accion={armarNumero} />
                <BotonCalc texto="2" accion={armarNumero} />
                <BotonCalc texto="1" accion={armarNumero} />
                <BotonCalc texto="+" color="#ff9427" accion={btnSumar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="0" ancho accion={armarNumero} />
                <BotonCalc texto="." accion={armarNumero} />
                <BotonCalc texto="=" color="#ff9427" accion={calcular} />

            </View>
        </View>
    )
}
