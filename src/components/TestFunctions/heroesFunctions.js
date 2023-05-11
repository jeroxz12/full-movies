import heroes from "../../data/heroes";

export const findById = (id) => heroes.find((heroe) => heroe.id === id)
export const filterByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)