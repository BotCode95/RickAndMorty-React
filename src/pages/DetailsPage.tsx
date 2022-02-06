import { useContext, useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import { Title } from "../components/Layout/Title";
import { Card } from "../components/Listado/Card";
import { CharacterContext } from "../context/Characters/CharacterContext";


export const DetailsPage = () => {

    const {id} : Readonly<Params<string>>= useParams();
    const characterContext = useContext(CharacterContext);
    const {character, getCharacterById} = characterContext;

    useEffect(() => {
        getCharacterById(parseInt(id!))
    }, [])
  return (
    <div>
        {
            character === null ? <h1>Cargando....</h1> :
            <>
            <Title title={`Character : ${character?.name}`}/>
            <Card character={character!}/>
            </>
        }
    </div>
  );
};
