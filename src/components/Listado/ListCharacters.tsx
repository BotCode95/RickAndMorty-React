import { usePageList } from "../../hooks/usePageList";
import { Button } from "../Buttons/Button";
import { Spinner } from "../Spinner/Spinner";
import { Character } from "./Character";

export const ListCharacters = () => {
    const {cargando,finalPage,results,pageRef, pageNext, pagePrev} = usePageList();
  return (
    <>    
    {cargando ? <Spinner/> : null }    
    {results?.map((item) : React.ReactElement => (
        <div className="container container-listado" key={item.id}>
            <Character id={item.id} name={item.name}/>
        </div>
    ))}
        <div className="row justify-content-center">
            {pageRef.current !== 1 && (
                <Button 
                  className="btn btn-danger col-2 ms-2 mb-5 btn-pages" 
                  onClick={pagePrev} 
                >
                  Anterior
                </Button>
            )}
            {!finalPage && (
                <Button 
                    className="btn btn-info col-2 ms-2 mb-5 btn-pages" 
                    onClick={pageNext} 
                >
                    Siguiente
                </Button>
            )}
        </div>
    </>
  )
};
