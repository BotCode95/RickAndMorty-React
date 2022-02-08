import axios from "axios"
import { mount } from "enzyme"
import { Card } from "../../components/Listado/Card"
import { CharacterContext } from "../../context/Characters/CharacterContext"
import { Data, Result } from "../../interfaces/data"
import { LocationData } from "../../interfaces/location"
import { characterDemo, info, location } from "../fixtures/dataTest"

const urlBase : string = 'https://rickandmortyapi.com/api';

describe('Test useCard', () => {
    const wrapper = mount(
        <CharacterContext.Provider value={{
            cargando : false,
            errorMessage: '',
            results : [characterDemo],
            info,
            character : characterDemo,
            characterId : 1,
            location,
            favorites : [characterDemo],
            getCharacters : async (page? : number) : Promise<void> => {
                const {data} = await axios.get<Data>(`${urlBase}/character`, {
                params: {
                    page
                }
            });},
            getCharacterById : async (id? : number) =>  {const {data} = await axios.get<Result>(`${urlBase}/character/${id}`)},
            getCharactersByLocation : async (name?: string) => {
                const {data} = await axios.get<LocationData>(`${urlBase}/location`, {
                    params: {
                        name
                    }
                });
            },
            addFavorite : (character : Result) => {},
            removeError : () => {},
            removeFilter : () => {},
            removeFavorite : (id: number) => {}
            }}>
            <Card character={characterDemo}/>
        </CharacterContext.Provider>
    )

    test('should render component', () => {
        expect(wrapper).toMatchSnapshot();
    })


})