import { cualEsMayor } from "../components/MovieList/MovieList";

describe("Pruebas para la function cualEsMayor()" , () => {
    test("Deberia devolver  que numero es mayor", () => {
        expect(cualEsMayor(10002, 1000)).toBe(10002);
    });
    test("Deberia devolver  que no se puede comprar porque uno o los dos valores no son numeros", () => {
        expect(cualEsMayor(10002, [100221])).toBe("Datos no validos");
    });
})