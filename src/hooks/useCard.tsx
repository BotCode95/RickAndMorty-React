import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CharacterContext } from "../context/Characters/CharacterContext";

export const useCard = () => {
    const {addFavorite,character, favorites, removeFavorite} = useContext(CharacterContext);
    const navigate = useNavigate();
  
    const [favoriteStar, setFavoriteStar] = useState<boolean>(false);
  
    const goBack = () => {
      navigate('/')
    }
  
    useEffect(() => {
      isFavoriteCheck()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [favorites, character])
  
    const isFavoriteCheck = () => {
        const isFavorite = favorites!.filter((favorite)  => (
          favorite.id === character!.id
        ))
      if(isFavorite[0] !== undefined && (isFavorite[0]?.id === character!.id)) {
        setFavoriteStar(true)
      }else {
        setFavoriteStar(false)
      }
    }
    const isFavoriteBtn = () => { 
      setFavoriteStar(!favoriteStar)
      if(!favoriteStar) {
          addFavorite(character!)
      } 
      else {
          removeFavorite(character!.id)
      }
    }
  return {
    favoriteStar,
    goBack,
    isFavoriteBtn,
  }
};
