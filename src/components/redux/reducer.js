import { ADD_FAV, DELETE_FAV, FILTER, ORDER } from "./types";

const initialState = {
    allCharacters: [],
    myFavorites: []
};

export default function reducerFav(state = initialState, action) {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                allCharacters: [...state.allCharacters, action.payload],
                myFavorites: [...state.allCharacters, action.payload]
            };
        case DELETE_FAV:
            const filtBorrar = state.myFavorites.filter(fav => fav.id !== action.payload)
            return {
                ...state,
                allCharacters: filtBorrar,
                myFavorites: state.allCharacters
            };
        case FILTER:
            if(action.payload === 'All') {
                return {
                    ...state,
                    myFavorites: state.allCharacters
                }
            } else {
                return {
                    ...state,
                    myFavorites: state.allCharacters.filter(char => char.gender === action.payload)
                };
            };
            
        case ORDER:
            const orderCopy = [...state.allCharacters]
            const ordered = orderCopy.sort((a, b) => {
                if(action.payload === 'Ascendente') {
                    return a.id - b.id;
                } else {
                    return b.id - a.id;
                }}
            );
                return {
                    ...state,
                    myFavorites: ordered
                };
        default:
            return state;
    }
}