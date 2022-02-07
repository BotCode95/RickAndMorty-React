import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CharacterContext } from "../context/Characters/CharacterContext";
import { Result } from "../interfaces/data";

interface Props {
    character: Result
}
export const useCard = ({character}: Props) => {
    // const {image,name, species, status, origin,location} : Result = character;
    const {addFavorite, favorites, removeFavorite, characterId} = useContext(CharacterContext)
    const navigate = useNavigate();
  
    const [favoriteStar, setFavoriteStar] = useState<boolean>(false);
  
    const goBack = () => {
      navigate('/')
    }
  
    useEffect(() => {
      isFavoriteCheck()
    }, [favorites, characterId])
  
    const isFavoriteCheck = () => {
      const isFavorite = favorites!.filter((favorite) => (
          favorite.id === character.id
      ))
      // console.log(isFavorite)
      // setFavorite(!favorite)
      // console.log("Favorite" + favorite)
      // if(!favorite) {
      //     addFavorite(character)
      // } else {
      //     //remove
      // }
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
