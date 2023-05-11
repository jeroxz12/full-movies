// *Funcion devolverElDobleDelMasAlto(Array)  -  Depende de la función "filtrarNumeroMasAlto"
// test1  -Devuelve el doble del numero mas alto del array
// test2 -No puede devolver otro dato que no sea un numero
// test3 -No puede recibir otro dato que no sea un Array

import { cualEsMayor, filtrarNumeroMasAlto, primerLetraMayuscula } from "../../helpers/functions";

export function devolverElDobleDelMasAlto(arr){
    if( Array.isArray(arr) ){

        const respuesta = filtrarNumeroMasAlto(arr) * 2
        return !isNaN(respuesta) ? respuesta : 'Error: Datos no validos'

    } else{
        return 'Error: el parametro ingresado no es un arreglo'
    }
}

// *Función convertirYverificarMayusculas(Texto) -  Depende de la función "primerLetraMayuscula"
// test1  -Devuelve un mensaje positivo si es que todas la palabras del texto empiezan en mayuscula
// test2 -Solo puede recibir un texto
// test3 -Devuelve un mensaje de error si alguna palabra no empieza con mayuscula 
export function convertirYverificarMayusculas(text) {
    if( typeof text === 'string' ){
        let textoConvertido = primerLetraMayuscula(text)

        const palabras = textoConvertido.split(' ');
    
        return palabras.every( (palabra) => /^[A-Z]/.test(palabra)) ? 'Todas las palabras empiezan con mayuscula' : 'Una de las palabras no empieza con mayuscula'; 
    } return 'El parametro no es un texto'
}

// *Funcion sumarleAlNumeroMasAlto(numero1, numero2, numero3) - Depende de las funciones "cualEsMayor" y "suma"
// test1  -Devuelve la suma del mayor de los dos primeros numeros mas el tercer numero
// test2 -Todos los parametros deben ser numero sino devolver un mensaje de error 

export function sumarleAlNumeroMasAlto(numero1, numero2, numero3){

        if( [numero1,numero2, numero3].every(number => typeof number === 'number')){
            const respuesta = cualEsMayor(numero1,numero2) + numero3
            return respuesta
        }
        return 'Error: los parametros deben ser numeros'
}