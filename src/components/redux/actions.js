export const addFav = (personaje) => {
    return{
        type: 'ADD_FAV',
        payload: personaje
    }
};

export const deleteFav = (id) => {
    return{
        type: 'DELETE_FAV',
        payload: id
    }
};

export const filterCards = (gender) => {
    return {
        type: 'FILTER',
        payload: gender
    }
};

export const orderCards = (direction) => {
    return {
        type: 'ORDER',
        payload: direction
    }
};