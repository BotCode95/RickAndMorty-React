import { Title } from "../components/Layout/Title";
import { Listado } from "../components/Listado/Listado";
// import { Navegation } from "../navegation/Navegation";


export const HomePage = () => {
  return (
      <>
        {/* <Navegation/> */}
        <Title title="Rick and Morty"/>
        <Listado/>
      </>
  );
};
