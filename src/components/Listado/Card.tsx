import { useCard } from "../../hooks/useCard";
import { Result } from "../../interfaces/data";
import { Button } from "../Buttons/Button";
import { Icon } from "../Layout/Icon";

interface Props {
    character : Result,
    favoritePage?: boolean
}

export const Card = ({character, favoritePage= false} : Props ) => {

  const {image,name, species, status, origin,location} : Result = character;
  const {favoriteStar,goBack,isFavoriteBtn} = useCard();
  return (
    <section className="row container container-card">
        <div className="col-1">
            <Button className="btn btn-back" onClick={goBack} >
                <Icon className="bi bi-arrow-left"></Icon>
            </Button>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-8 img-container">
            <img src={image} className="img-character" alt={name}/>
        </div>
        <article className="col-md-7 col-lg-7 col-sm-12 article-card">
            <div className="row">
                <h3 className="col-10">{name}</h3>
                <div className="col-2 favorite">
                   { !favoritePage && (
                        <Button className="btn btn-info" onClick={isFavoriteBtn}>
                                {favoriteStar ? (
                                    <Icon className="bi bi-star-fill favorite-icon"></Icon> 
                                ): (
                                    <Icon className="bi bi-star"></Icon>
                                )}
                        </Button>
                        )
                    }
                </div>
            </div>
            <Icon className={`bi bi-circle-fill icon-status ${(status === 'Alive')  ? 'alive-icon' : 'dead-icon'}`}></Icon>
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
