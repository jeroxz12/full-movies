import { filtrarNumeroMasAlto } from "../components/MovieList/MovieList";

describe ("Pruebas para la funcion filtrarNumeroMasAlto", () => {
    test("Deberia devolver el numero mas alto del arreglo", () => {
        expect(filtrarNumeroMasAlto([1, 4,5, 29,1000000, 20000,30090929, 1000002333])).toBe(1000002333);
    })
    test('Deberia devolver un mensaje de error, porque un elemento del array no es Number', () => { 
        expect(filtrarNumeroMasAlto([1, 4,5, 29,10000000, '20000','aasd', 1000002333])).toBe('El parametro no es un arreglo de numeros.');
     })
})
