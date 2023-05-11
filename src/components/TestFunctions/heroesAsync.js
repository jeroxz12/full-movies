import { findById } from "./heroesFunctions";

export const getHeroeByIdAsync = (id) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            
            const p1 = findById(id);
            if ( p1 ){
                resolve(p1)
            }else{
                reject("No se pudo retornar el heroe con id: " + id);
            }

        }, 1000);
    })
}