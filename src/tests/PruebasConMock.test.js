import { cualEsMayor, filtrarNumeroMasAlto, primerLetraMayuscula } from "../helpers/functions";
import { devolverElDobleDelMasAlto, convertirYverificarMayusculas, sumarleAlNumeroMasAlto } from "../components/TestFunctions/testFunctions";

jest.mock("../helpers/functions");
describe('Pruebas para la funcion devolverElDobleDelMasAlto', () => {


    test('Devuelve el doble del numero mas alto del array', () => {
        filtrarNumeroMasAlto.mockReturnValueOnce(5)

        let response = devolverElDobleDelMasAlto([1,2,3,4,5])

        expect(response).toBe(10)
    })
    test('Devuelve un mensaje de error porque no puede devolver string', () => {
        filtrarNumeroMasAlto.mockReturnValueOnce('El parametro no es un arreglo de numeros.')

        let response = devolverElDobleDelMasAlto("['Arreglo',10] ")

        expect(response).toBe('Error: el parametro ingresado no es un arreglo')
    })
})
describe('Pruebas para la funcion convertirYverificarMayusculas', () => {
    test('Deberia devolver un mensaje positivo si todas las palabras empiezan con mayuscula', () => {

        primerLetraMayuscula.mockReturnValueOnce('Hola Que Talco')

        let response = convertirYverificarMayusculas("Hola que Talco")


        expect(response).toBe('Todas las palabras empiezan con mayuscula')
    })
    test('Deberia devolver un mensaje negativo porque no todas son string', () => {

        primerLetraMayuscula.mockReturnValueOnce('Hola Que Talco')

        let response = convertirYverificarMayusculas(12312312)


        expect(response).toBe('El parametro no es un texto')
    })
    test('Deberia devolver un mensaje negativo porque no todas las palabras empiezan con mayuscula', () => {

        primerLetraMayuscula.mockReturnValueOnce('Hola Que talco')

        let response = convertirYverificarMayusculas("Hola que Talco")


        expect(response).toBe('Una de las palabras no empieza con mayuscula')
    })
})
describe('Pruebas para la funcion sumarleAlNumeroMasAlto', () => {
    test('Deberia devolver la suma correcta del mayor entre los dos primeros numeros y el tercero', () => {
        cualEsMayor.mockReturnValueOnce(3);
        let response = sumarleAlNumeroMasAlto(2,3,2)
        expect(response).toBe(5)
    })
    test('Deberia devolver un mensaje negativo porque no todos los elementos son numeros', () => {
        cualEsMayor.mockReturnValueOnce(3);
        let response = sumarleAlNumeroMasAlto("asd",[123,'asd?'],2)
        console.log(response);
        expect(response).toBe('Error: los parametros deben ser numeros')
    })
})