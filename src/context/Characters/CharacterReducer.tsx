import { Result } from "../../interfaces/data";

export interface CharacterState {
    results: Result[] | null;
    character: Result | null;
    errorMessage: string;
    msg: string | null;
}

type CharacterAction = 
    |   {type: 'getCharacters', payload: {results: Result[]}}
    // |   {type: 'getCharactersByPage', payload: {results: Result[]}}
    |   {type: 'addError', payload: string}
    |   {type: 'removeError'}

export const characterReducer = (state: CharacterState, action: CharacterAction) : CharacterState => {
    switch(action.type) {
        case 'getCharacters' : 
            return {
                ...state,
                errorMessage: '',
                results : action.payload.results
            }
    // case 'getCharactersByPage' : 
        // return {
        //     ...state,
        //     errorMessage: '',
        //     results : action.payload.results
        // }
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
        default:
            return state
    }
}