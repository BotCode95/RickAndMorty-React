import axios from "axios";
import { createContext, useReducer } from "react";
import { Data, Result } from "../../interfaces/data";
import { characterReducer, CharacterState } from "./CharacterReducer";


type CharacterContextProps = {
    errorMessage: string;
    results : Result[] | null;
    character : Result | null;
    getCharacters : (page? : number) => Promise<void>
    getCharacterById : (id? : number) => Promise<void>
    removeError : () => void;
}

const characterInitialState: CharacterState = {
    results: [],
    character: null,
    msg: null,
    errorMessage: ''
}
// TODO : Crear un campo en el state que sea favorites de tipo array y almacene todos los elementos que esten tildado como favoritos para mostrar en una respectiva pagina

export const CharacterContext = createContext({} as CharacterContextProps)

export const CharacterProvider = ({children} : any) => {

    const urlBase = 'https://rickandmortyapi.com/api'
    const [state, dispatch] = useReducer(characterReducer, characterInitialState);

    const getCharacters = async (page?: number) => {
        try {
            const {data} = await axios.get<Data>(`${urlBase}/character`, {
                params: {
                    page
                }
            });
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

    const getCharacterById = async (id?: number) => {
        try {
            const {data} = await axios.get<Result>(`${urlBase}/character/${id}`);
            dispatch({
                type: 'getCharacterById',
                payload: {character : data }
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
            getCharacterById,
            removeError
        }}>
            {children}
        </CharacterContext.Provider>
    )
}