import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CharacterContext } from "../../context/Characters/CharacterContext";
import { useForm } from "../../hooks/useForm";
import { Button } from "../Buttons/Button";


export const SearchInput = () => {
  let navigate = useNavigate();
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
    reset('locationName');
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    getCharactersByLocation(locationName)
    // navigate('location')

  }
  return (
    <div className="aling-center input-search">
      <form onSubmit={handleSubmit}>
        <input 
            id="locationName" 
            name="locationName" 
            className="input-search-box"
            placeholder=" Search by Location..."
            onChange={(value : React.ChangeEvent<HTMLInputElement>) => onChange(value, 'locationName')}
            required
            type="text" 
            value={locationName}
            />
      { 
        locationName !== '' && (
          <Button type="submit" className="btn-search ms-2">
            <span><i className="bi bi-search"></i></span>
          </Button>
        )} 
      </form>
      {
        location !== null && (
          <Button className="btn-delete-filter" onClick={deleteFilter}>
            <i className="bi bi-dash-circle"></i>
          </Button>
        )
      }
    </div>
  )
};
