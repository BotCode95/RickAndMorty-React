import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CharacterContext } from "../context/Characters/CharacterContext";
import { Result } from "../interfaces/data";

interface Props {
    character: Result
}
export const useCard = ({character}: Props) => {
    const {addFavorite, favorites, removeFavorite} = useContext(CharacterContext)
    const navigate = useNavigate();
  
    const [favoriteStar, setFavoriteStar] = useState<boolean>(false);
  
    const goBack = () => {
      navigate('/')
    }
  
    useEffect(() => {
      isFavoriteCheck()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [favorites])
  
    const isFavoriteCheck = () => {
      const isFavorite  = favorites!.some((favorite) : boolean => (
          favorite.id === character.id
      ))
      if(isFavorite) {
        setFavoriteStar(true)
       
      }
    }
    const isFavoriteBtn = () => { 
      setFavoriteStar(!favoriteStar)
      if(!favoriteStar) {
          addFavorite(character)
      } 
      else {
          removeFavorite(character.id)
      }
    }
  return {
    favoriteStar,
    goBack,
    isFavoriteBtn,
  }
};
