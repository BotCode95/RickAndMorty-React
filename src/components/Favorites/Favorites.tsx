import { useContext, useEffect } from 'react';
import { CharacterContext } from '../../context/Characters/CharacterContext';
import { Card } from '../Listado/Card';

export const Favorites = () => {
    const {favorites} = useContext(CharacterContext)

    useEffect(() => {
    },[favorites])

  return (
    <>
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
  )
};
