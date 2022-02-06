import {useEffect, useContext, useRef, useState} from "react";
import { CharacterContext } from "../../context/Characters/CharacterContext";
import { Title } from "../Layout/Title";
import { Card } from "./Card";
import { Character } from "./Character";

export const Listado = () => {
    const characterContext = useContext(CharacterContext);
    const {results, getCharacters} = characterContext;
    const pageRef : React.MutableRefObject<number> = useRef(1);
    const [finalPage, setFinalPage] = useState<boolean>(false)
    useEffect(() => {
        // getCharacters(pageRef.current)
        loadingData()
    }, [])

    const loadingData = () => {
        // Verificar que la data este vacia seria la ultima pagina
        // console.log(results)
        if(results!.length === 20 || results!.length === 0) {  
            getCharacters(pageRef.current)
        }else {
            pageRef.current --;
            setFinalPage(true)       
 
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
    <section className="bg-page">    
    <div className="row justify-content-center m-2">
        <form className="col-4 form-search">
            <div className="aling-center input-search">
            <input 
                type="text" 
                name="" 
                id="" 
                placeholder=" Search Location"
                />
            <i className="bi bi-search"></i>
            </div>
        </form>
    </div>
        {results?.map((item) : React.ReactElement => (
            <div className="container-listado" key={item.id}>
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
    </section>
  )
};
