import { useContext, useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import { Title } from "../components/Layout/Title";
import { Card } from "../components/Listado/Card";
import { Spinner } from "../components/Spinner/Spinner";
import { CharacterContext } from "../context/Characters/CharacterContext";


export const DetailsPage = () => {

    const {id} : Readonly<Params<string>>= useParams();
    const characterContext = useContext(CharacterContext);
    const {cargando, character, getCharacterById} = characterContext;

    useEffect(() => {
        getCharacterById(parseInt(id!))
    }, [])
  return (
    <div>
        {cargando ? <Spinner/> : null}
        {
            character !== null && !cargando ? 
            <>
            <Title title={`Character : ${character?.name}`}/>
            <Card character={character!}/>
            </>
            : null
        }
    </div>
  );
};
