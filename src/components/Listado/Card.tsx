import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CharacterContext } from "../../context/Characters/CharacterContext";
import { Result } from "../../interfaces/data";
import { Button } from "../Buttons/Button";

interface Props {
    character : Result
}

export const Card = ({character} : Props ) => {

  const {image,name, species, status, origin,location} : Result = character;
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
  return (
    <section className="row container container-card">
        <div className="col-1">
            <Button className="btn btn-back" onClick={goBack} >
                <i className="bi bi-arrow-left"></i>
            </Button>
        </div>
        <div className="col-4 img-container">
            <img src={image} className="img-character" alt={name}/>
        </div>
        <article className="col-7 article-card">
            <div className="row">
                <h3 className="col-10">{name}</h3>
                <div className="col-2 favorite">
                    <Button className="btn btn-info" onClick={isFavoriteBtn}>
                        {favoriteStar ? (
                            <i className="bi bi-star-fill favorite-icon"></i> 
                        ): (
                            <i className="bi bi-star"></i>
                        )}
                    </Button>
                </div>
            </div>
            <i className={`bi bi-circle-fill icon-status ${(status === 'Alive')  ? 'alive-icon' : 'dead-icon'}`}></i>
             {status} - {species}
            <div> 
                <span>First seen in:</span>
                <p>{origin.name}</p>
            </div>
            <div>
                <span>Last known location:</span>
                <p>{location.name}</p>
            </div>
        </article>
    </section>
    
    )
};
