import axios from "axios";
import { createContext, useReducer } from "react";
import { Data, Result } from "../../interfaces/data";
import { characterReducer, CharacterState } from "./CharacterReducer";


type CharacterContextProps = {
    errorMessage: string;
    results : Result[] | null;
    character : Result | null;
    getCharacters : () => Promise<void>
    // getCharacterByPage : (page: string) => Promise<void>
    removeError : () => void;
}

const characterInitialState: CharacterState = {
    results: [],
    character: null,
    msg: null,
    errorMessage: ''
}


export const CharacterContext = createContext({} as CharacterContextProps)

export const CharacterProvider = ({children} : any) => {

    const urlBase = 'https://rickandmortyapi.com/api'
    const [state, dispatch] = useReducer(characterReducer, characterInitialState);

    const getCharacters = async () => {
        try {
            const {data} = await axios.get<Data>(`${urlBase}/character`);
            dispatch({
                type: 'getCharacters',
                payload: data
            })
        } catch (error) {
            dispatch({
                type: 'addError',
                payload: 'Error'
            })
        }
    }

    
    const removeError = () => {
        dispatch({type: 'removeError'})
    }

    return (
        <CharacterContext.Provider value={{
            results : state.results,
            character : state.character,
            errorMessage : state.errorMessage,
            getCharacters,
            // getCharacterPage,
            removeError
        }}>
            {children}
        </CharacterContext.Provider>
    )
}