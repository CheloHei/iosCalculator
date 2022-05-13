import { useRef,useState } from 'react';
enum Operators{
    sumar,restar,multiplicar,dividir
}

export const useCalculadora = () => {
 
    const [numero, setnumero] = useState('0');
    const [numeroAnterior, setnumeroAnterior] = useState('0');

    const ultimaOperacion = useRef<Operators>();

    const limpiar = () => {
        setnumero('0');
        setnumeroAnterior('0');
    }
    const del = () => {
        //mi implementacion
        // setnumero(numero.substring(0, numero.length - 1));
        // if(numero.length === 0) setnumero('0')
        let negativo = '';
        let numeroTemp = numero;
        if(numero.includes('-')){
            negativo = '-';
            numeroTemp = numero.substr(1);
        }
        if(numero.length>1){
            setnumero(negativo + numeroTemp.slice(0,-1));
        }else{
            setnumero('0');
        }
    }

    const armarNumero = (numeroText: string) => {
        //no aceptar doble punto
        if(numero.includes('.') && numeroText === '.') return;
        
        if(numero.startsWith('0') || numero.startsWith('-0')){
            //punto decimal
            if(numeroText === '.'){
                setnumero(numero + numeroText);
                //evaluar si es otro cero y hay punto
            }else if(numeroText ==='0' && numero.includes('.')){
                setnumero(numero + numeroText);
                //evaluar si es diff a cero y no tiene punto
            }else if(numeroText !=='0' && !numero.includes('.')){
                setnumero(numeroText);
            }else if(numeroText === '0' &&  !numero.includes('.')){
                setnumero(numero);
            }else{
                setnumero(numero + numeroText)
            }


        }else{
            setnumero(numero + numeroText)
        }

    }
    const masMenos = () => {
        if(numero.includes('-')){
            setnumero(numero.replace('-', ''));
        }else{
            setnumero('-'+ numero);
        }
    }

    const changeNumber = () => {
        if(numero.endsWith('.')){
            setnumeroAnterior(numero.slice(0,-1));
        }else{
            setnumeroAnterior(numero);
        }
        setnumero('0');
    }

    const btnDivir = ()=> {
        changeNumber();
        ultimaOperacion.current = Operators.dividir;
    }
    const btnMultiplicar = ()=> {
        changeNumber();
        ultimaOperacion.current = Operators.multiplicar;
    }
    const btnRestar = ()=> {
        changeNumber();
        ultimaOperacion.current = Operators.restar;
    }
    const btnSumar = ()=> {
        ultimaOperacion.current = Operators.sumar;
        changeNumber();
    }

    const calcular = ()=> {

        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operators.sumar:
                setnumero(`${num1+num2}`);
                
                break;
            case Operators.restar:
                setnumero(`${num2-num1}`);
                
                break;
            case Operators.dividir:
                
                setnumero(`${num2/num1}`);
                
                break;
            case Operators.multiplicar:
                setnumero(`${num1*num2}`);
                break;
        }

        setnumeroAnterior('0')


    }
  return {
      numero,
      numeroAnterior,
      limpiar,
      del,
      calcular,
      btnDivir,
      btnMultiplicar,
      btnRestar,
      btnSumar,
      masMenos,
      armarNumero
  }
}
