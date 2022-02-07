import { useContext } from "react";
import { Title } from "../components/Layout/Title";
import { ListCharacters } from "../components/Listado/ListCharacters";
import { ListLocation } from "../components/Search/ListLocation";
import { SearchInput } from "../components/Search/SearchInput";
import { CharacterContext } from "../context/Characters/CharacterContext";


export const HomePage = () => {

  const {location} = useContext(CharacterContext)
  return (
      <> 
        <Title title="Rick and Morty"/>
        <section className="bg-page">
        <div className="row justify-content-center m-2">
          <SearchInput/>
        </div>
          {
            location !== null ? <ListLocation/>
            : <ListCharacters/>
          }
        </section>
        
        
      </>
  );
};
