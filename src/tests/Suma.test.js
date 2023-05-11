import { mensaje, suma } from "../components/MovieList/MovieList";

describe("Pruebas a la funciona suma", () => {
    test("Devuelve la suma correctamente", () => {
       let respuesta = suma(25 , 25)
        expect(respuesta).toBe(50);
    })
    test("Le paso un parametro que no es un numero y me devuelve mensaje de error", () => {
        let respuesta = suma("Siete", 24);
        expect(respuesta).toBe("Datos no validos");
    })
});
