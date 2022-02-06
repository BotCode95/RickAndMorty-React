import { Result } from "../../interfaces/data";

interface Props {
    character : Result
}

export const Card = ({character} : Props ) => {
  const {image,name, species, status, origin,location} : Result = character;
  return (
    <section className="row container-card">
        <div className="col-4 img-container">
            <img src={image} className="img-character" alt={name}/>
        </div>
        <article className="col-8 article-card">
            <div className="row">
                <h3 className="col-10">{name}</h3>
                <div className="col-2 favorite">
                    {/* Validar por clase el tipo de estrella */}
                    <i className="bi bi-star"></i>
                    {/* <i class="bi bi-star-fill"></i>  star fill*/}
                </div>
            </div>
            {/* add icon status alive  = green |dead = red | unknokw = orange */}
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
