/* eslint-disable react-hooks/exhaustive-deps */
import {useContext, useEffect, useRef, useState} from 'react';
import { CharacterContext } from "../context/Characters/CharacterContext";


export const usePageList = () => {

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
    const pageNext = () => {
        pageRef.current ++;
        loadingData()
    }

    const pagePrev = () => {
        if(pageRef.current > 1) {
            pageRef.current --;
            loadingData();
            setFinalPage(false)   
        }
    }
  return {
    finalPage,
    results,
    pageRef,
    pageNext,
    pagePrev,
  }
};
