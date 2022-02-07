import { useContext } from "react";
import { Title } from "../components/Layout/Title";
import { Listado } from "../components/Listado/Listado";
import { ListLocation } from "../components/Search/ListLocation";
import { SearchInput } from "../components/Search/SearchInput";
import { Spinner } from "../components/Spinner/Spinner";
import { CharacterContext } from "../context/Characters/CharacterContext";


export const HomePage = () => {

  const {location, cargando} = useContext(CharacterContext)
  return (
      <> {
        cargando ? <Spinner/> : null }
          <> 
        <Title title="Rick and Morty"/>
        <section className="bg-page">
        <div className="row justify-content-center m-2">
          <SearchInput/>
        </div>
          {
            location !== null ? <ListLocation/>
            : <Listado/>
          }
        </section>
          </>
        
        
      </>
  );
};
