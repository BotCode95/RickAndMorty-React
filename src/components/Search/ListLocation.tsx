import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { CharacterContext } from '../../context/Characters/CharacterContext';
import { Resident } from './Resident';

export const ListLocation = () => {
    const { location, results, errorMessage} = useContext(CharacterContext)

    // const [residentsOrd, setResidentOrd] = useState<String[]>()

    // useEffect(() => {
    //   // const residentsSort = getCharacterByLocationSort();
    //   // setResidentOrd(residentsSort)
    //   console.log(errorMessage)
    //   if(errorMessage) {
    //       //mostrar el mensaje de error y un timeout que lo elimine
    //       alert(`${errorMessage}`)
    //       // Swal.fire({
    //       //   icon: 'error',
    //       //   title: 'Oops...',
    //       //   text: `${errorMessage}`,
    //       // })
    //   }
    // },[errorMessage])

    // const getCharacterByLocation = () => {
    //   const residentsOrd = getCharacterByLocationSort()
    //   results!.filter((item) => {
    //     const res = item.url === residentsOrd[item.id - 1]
    //     return res;
    //   })
    // }

    // const getCharacterByLocationSort = () => {
    //   const residents = location!.residents;
    //   const residentId = residents.map((resid, index) => {
    //     const splitUrl =residents[index].split('/')
    //     const id = splitUrl[splitUrl.length - 1]
    //     return id; 
    //   })
    //   return residentId.sort()
    // }

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
