import { characterReducer } from "../../context/Characters/CharacterReducer"
import { characters, characterDemo, location, Gender, Species, Status, info } from "../fixtures/dataTest";

const characterState = {
    cargando : true,
    character: null,   
    characterId: 1,  
    errorMessage: "",
    favorites:[characterDemo],
    info: null,
    location:  null,
    results: null,
}

describe('Test in CharacterReducer', () => {

    test('should return state character', () => {
        const state = characterReducer(characterState, {type: 'addFavorite', payload : {character: characterDemo}});
        expect(state.character).toEqual(characterDemo);
    })

    test('get characters', () => {
        const state = characterReducer(characterState, {type: 'getCharacters', payload : {results: characters, info }});
        expect(state.info?.next).toContain('2');
        expect(state.results).toEqual(characters)
    })

    test('get character by id', () => {
        const state = characterReducer(characterState, {type: 'getCharacterById', payload : {character: characterDemo}});
        expect(state.character?.id).toBe(1);
        expect(state.character).toEqual(characterDemo)
    })

    test('get character by location name', () => {
        const state = characterReducer(characterState, {type: 'getCharactersByLocationName', payload : {location }});
        expect(state.location).toEqual(location)
    })

    test('add favorite', () => {
        const newCharacter = {
            "id": 2,
            "name": "Morty Smith",
            "status":Status.Alive,
            "species": Species.Human,
            "type": "",
            "gender": Gender.Male,
            "origin": {
                "name": "unknown",
                "url": ""
            },
            "location": {
                "name": "Citadel of Ricks",
                "url": "https://rickandmortyapi.com/api/location/3"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            "episode": [
                "https://rickandmortyapi.com/api/episode/1",
            ],
            "url": "https://rickandmortyapi.com/api/character/2",
            "created": new Date("2017-11-04T18:50:21.651Z")
        }
        const state = characterReducer(characterState, {type: 'addFavorite', payload : {character: newCharacter}});
        expect(state.character).toEqual(newCharacter)
        expect(state.favorites).toEqual([...characterState.favorites || [], newCharacter])
    });

    test('remove favorite', () => {
        const characterId = 2;

        const state = characterReducer(characterState, {type: 'removeFavorite', payload : {characterId}});
        expect(state.favorites).toEqual(characterState.favorites!.filter((favorite) => (favorite.id !== characterId)));
    })
    test('remove filter', () => {
        const state = characterReducer(characterState, {type: 'removeFilter'});
        expect(state.location).toEqual(null);
    })
    test('remove error', () => {
        const state = characterReducer(characterState, {type: 'removeError'});
        expect(state.errorMessage).toEqual("");
    })
})