import { getHeroeByIdAsync } from '../components/TestFunctions/heroesAsync';

describe('Pruebas en heroesAsync.js', () => {
    test('getHeroeByIdAsync Debe retornar un heroe', (done) => { 
        const id = 1;
        getHeroeByIdAsync(id)
        .then((heroe) => {
            expect(heroe).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
            done();
        });
      
     })
     test('getHeroeByIdAsync Debe retornar un Error si el hero no existe', (done) => { 
        const id = 100;
        getHeroeByIdAsync(id).then((heroe) => {
            expect(heroe).toBeFalsy();
            done();
        })
        .catch((error) => {
            expect(error).toBe(`No se pudo retornar el heroe con id: ${id}`)
            done();
        })
      
     })
})