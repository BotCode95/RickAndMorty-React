import { useContext} from 'react';
import { CharacterContext } from '../../context/Characters/CharacterContext';
import { Resident } from './Resident';

export const ListLocation = () => {
    const { location} = useContext(CharacterContext)
  return (
    <>
    {
      location !== null && ( 
        location.residents.map((resident, index) => (
          <div key={index}>
            <Resident resident={resident}/>
          </div>
      ))
       )
    }
    </>
  )
};
