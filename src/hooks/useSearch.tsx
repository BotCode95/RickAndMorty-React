import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { CharacterContext } from "../context/Characters/CharacterContext";
import { useForm } from "./useForm";


export const useSearch = () => {
    const {locationName, onChange, reset} = useForm({
        locationName: ''
      })
    
      const {errorMessage, location, getCharactersByLocation, removeFilter, removeError} = useContext(CharacterContext);
    
      useEffect(() => {
        if(errorMessage) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${errorMessage}`,
            });
    
            removeError()
          }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[errorMessage, location])
      
      const deleteFilter = () => {
        removeFilter();
        reset();
      }
      const handleSubmit = (e: any) => {
        e.preventDefault();
        getCharactersByLocation(locationName)
      }
    return {
        locationName,
        location,
        errorMessage,
        onChange,
        deleteFilter,
        handleSubmit
    }
};
