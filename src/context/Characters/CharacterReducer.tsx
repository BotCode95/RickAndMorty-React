import { Info, Result } from "../../interfaces/data";
import { Location } from "../../interfaces/location";

export interface CharacterState {
    cargando : boolean;
    character: Result | null;   
    characterId: number;   
    errorMessage: string | null;
    favorites: Result[] | null;
    info: Info | null
    location: Location | null;
    results: Result[] | null;
}

type CharacterAction = 
    |   {type: 'addFavorite', payload: {character: Result}}
    |   {type: 'addError', payload: string}
    |   {type: 'getCharacters', payload: {results: Result[] , info : Info}}
    |   {type: 'getCharacterById', payload: {character: Result}}
    |   {type: 'getCharactersByLocationName', payload: {location: Location}}
    |   {type: 'getFavorites', payload: {favorites: Result[]}}
    |   {type: 'removeError'}
    |   {type: 'removeFavorite', payload: {characterId: number}}
    |   {type: 'removeFilter'}

export const characterReducer = (state: CharacterState, action: CharacterAction) : CharacterState => {
    switch(action.type) {
        case 'getCharacters' : 
            return {
                ...state,
                errorMessage: '',
                cargando: false,
                results : action.payload.results,
                info : action.payload.info,
            }
        case 'getCharacterById' : 
            return {
                ...state,
                errorMessage: '',
                character : action.payload.character,
                cargando: false
            }
        case 'getCharactersByLocationName': 
            return {
                ...state,
                errorMessage: '',
                location : action.payload.location,
                cargando: false
            }
        case 'addFavorite':
            return {
                ...state,
                character: action.payload.character,
                favorites: [...state.favorites || [], action.payload.character],
                cargando: false,
            }
        case 'addError':
            return {
                ...state,
                errorMessage: action.payload
            }
        case 'removeError' : 
            return {
                ...state,
                errorMessage: ''
            }
        case 'removeFilter' : 
            return {
                ...state,
                location: null
            }
        case 'removeFavorite': 
            return {
                ...state,
                favorites: state.favorites!.filter((favorite) => (favorite.id !== action.payload.characterId
                ))
            }
        default:
            return state
    }
}