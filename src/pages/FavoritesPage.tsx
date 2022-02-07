import { useContext, useEffect } from "react";
import { Title } from "../components/Layout/Title";
import { Card } from "../components/Listado/Card";
import { CharacterContext } from "../context/Characters/CharacterContext";


export const FavoritesPage = () => {

  const {favorites} = useContext(CharacterContext)

  useEffect(() => {

  },[favorites])
  return (
      <>
      <Title title="Favorites"/>
      {favorites?.length === 0 ? <h2 className="subtitle">Add items to favorites</h2> : 
        <>
          <section className="bg-page">
              <div>
                {favorites?.map((favorite) => (
                  <div key={favorite.id} className="favorite-card">
                    <Card character={favorite}/>
                  </div>
                ))}
              </div>
          </section>
          </>
        }
      </>
  );
};
