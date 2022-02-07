import axios from "axios";
import { createContext, useReducer } from "react";
import { Data, Info, Result } from "../../interfaces/data";
import { Location, LocationData } from "../../interfaces/location";
import { characterReducer, CharacterState } from "./CharacterReducer";


type CharacterContextProps = {
    cargando : boolean;
    errorMessage: string | null;
    results : Result[] | null;
    info : Info | null;
    character : Result | null;
    characterId : number;
    location : Location| null;
    favorites : Result[] | null;
    getCharacters : (page? : number) => Promise<void>
    getCharacterById : (id? : number) => Promise<void>
    getCharactersByLocation : (name?: string) => Promise<void>
    addFavorite : (character : Result) => void;
    removeError : () => void;
    removeFilter : () => void;
    removeFavorite : (id: number) => void;
}

const characterInitialState: CharacterState = {
    results: [],
    info: null,
    cargando: true,
    character: null,
    characterId: 0,
    location: null,
    favorites: [],
    errorMessage: null
}

export const CharacterContext = createContext({} as CharacterContextProps)

export const CharacterProvider = ({children} : any) => {

    const urlBase : string = 'https://rickandmortyapi.com/api';
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
                payload: {results:  data.results, info: data.info}
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

    
    const getCharactersByLocation = async (name?: string) => {
        try {
            const {data} = await axios.get<LocationData>(`${urlBase}/location`, {
                params: {
                    name
                }
            });
            dispatch({
                type: 'getCharactersByLocationName',
                payload: {location : data.results[0]}
            })
        } catch (error) {
            dispatch({
                type: 'addError',
                payload: 'La busqueda no arroja resultados'
            })
        }
    }

    const addFavorite = (character : Result) => {
        dispatch({type: 'addFavorite',
             payload: {character }
        })
    }

    const removeFavorite = (characterId: number) => {
        dispatch({
            type: 'removeFavorite',
            payload: {characterId}
        })
    }
    
    const removeError = () => {
        dispatch({type: 'removeError'})
    }

    const removeFilter = () => {
        dispatch({type: 'removeFilter'})
    }

    return (
        <CharacterContext.Provider value={{
            cargando: state.cargando,
            character : state.character,
            characterId : state.characterId,
            errorMessage : state.errorMessage,
            favorites : state.favorites,
            info : state.info,
            location : state.location,
            results : state.results,
            addFavorite,
            getCharacterById,
            getCharacters,
            getCharactersByLocation,
            removeError,
            removeFavorite,
            removeFilter,
        }}>
            {children}
        </CharacterContext.Provider>
    )
}