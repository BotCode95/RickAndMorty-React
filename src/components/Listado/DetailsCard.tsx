import { useContext, useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import { CharacterContext } from "../../context/Characters/CharacterContext";
import { Title } from "../Layout/Title";
import { Spinner } from "../Spinner/Spinner";
import { Card } from "./Card";


export const DetailsCard = () => {

    const {id} : Readonly<Params<string>>= useParams();
    const {cargando, character, getCharacterById} = useContext(CharacterContext);

    useEffect(() => {
        getCharacterById(parseInt(id!))
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
