import { findById, filterByOwner } from '../components/TestFunctions/heroesFunctions'
describe('Pruebas en HeroesFunctions.js' , () => {
    test('getHeroesById debe devolver un heroe que coincida con el ID enviado por parametro.', () => {
        const id = 1;
        const heroe = findById(id);
        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })
    test('getHeroesById debe devolver undefined si no existe el heroe con ese id', () => {
        const id = 100;
        const heroe = findById(id);
        expect(heroe).t
    })
    test('getHeroesById debe devolver heroes de DC', () => {
        const owner = 'DC';
        const heroes =  filterByOwner(owner);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])
    })
})