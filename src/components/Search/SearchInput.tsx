import { useSearch } from "../../hooks/useSearch";
import { Button } from "../Buttons/Button";
import { Icon } from "../Layout/Icon";


export const SearchInput = () => {
  const {locationName, location, deleteFilter, handleSubmit, onChange} =useSearch();
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
            <span><Icon className="bi bi-search"></Icon></span>
          </Button>
        )} 
      </form>
      {
        location !== null && (
          <Button className="btn-delete-filter" onClick={deleteFilter}>
            <Icon className="bi bi-dash-circle"></Icon>
          </Button>
        )
      }
    </div>
  )
};
