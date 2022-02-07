/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useContext, useRef, useState} from "react";
import { CharacterContext } from "../../context/Characters/CharacterContext";
import { SearchInput } from "../Search/SearchInput";
import { Character } from "./Character";

export const Listado = () => {
    const characterContext = useContext(CharacterContext);
    const {info, results, getCharacters} = characterContext;
    const pageRef : React.MutableRefObject<number> = useRef(1);
    const [finalPage, setFinalPage] = useState<boolean>(false)
    
    useEffect(() => {
        loadingData()
    }, [info?.next]) 

    const loadingData = () => {
        getCharacters(pageRef.current)
        if(info){
            if(!info?.next){
                setFinalPage(true)       
            }
        }
    }
    const paginaSiguiente = () => {
        pageRef.current ++;
        loadingData()
    }

    const paginaAnterior = () => {
        if(pageRef.current > 1) {
            pageRef.current --;
            loadingData();
            setFinalPage(false)   
        }
    }
  return (
    <>    
 
        {results?.map((item) : React.ReactElement => (
            <div className="container container-listado" key={item.id}>
                {/* <Card item={item}/> */}
                <Character item={item}/>
            </div>
        ))}
        <div className="row justify-content-center">
            {pageRef.current !== 1 && (
                <button 
                    type="button" 
                    className="btn btn-danger col-2 ms-2 mb-5"
                    onClick={paginaAnterior} 
                >
                    Anterior
                </button>
            )}
            {!finalPage && (
                <button 
                    type="button" 
                    className="btn btn-info col-2 ms-2 mb-5"
                    onClick={paginaSiguiente} 
                >
                    Siguiente
                </button>
            )}
        </div>
    </>
  )
};
