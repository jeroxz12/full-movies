import { primerLetraMayuscula } from "../helpers/functions";
describe("Pruebas de la function primerLetraMayuscula", () => {

    test("Debe devolver Hola Que Tal", () => {
        expect(primerLetraMayuscula("Hola que Tal")).toBe("Hola Que Tal");
    });
    test("Debe devolver un mensaje de error por datos (parametro) no valido", () => {
        expect(primerLetraMayuscula(1800,{"Hola": ""}, ["Hola"])).toBe("Datos no validos");
    });
})