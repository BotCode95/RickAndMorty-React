import {useEffect, useContext, useRef} from "react";
import { CharacterContext } from "../../context/Characters/CharacterContext";
import { Card } from "./Card";

export const Listado = () => {
    const characterContext = useContext(CharacterContext);
    const {results, getCharacters} = characterContext;
    
    useEffect(() => {
        if(results?.length !== 0){
            // getCharactersByPage()
        }
        getCharacters()
        
    }, [])
  return (
    <>
    <div>
        <h2>Listado</h2>
    </div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Origin</th>
                    <th>Species</th>
                    <th>Location</th>
                </tr>
            </thead>
            {results?.map((item) : React.ReactElement => (
                
                <tbody key={item.id}>
                    <Card item={item}/>
                </tbody>
            ))}
        </table>
        
    </>
  )
};
