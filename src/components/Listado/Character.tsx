import { Link } from "react-router-dom";
import { Result } from "../../interfaces/data";


interface Props {
    item : Result
}

export const Character = ({item} : Props ) => {
    const {id, name} = item;
  return (
    <Link to={`/details/${id}`} className="item-list">
        {name}
    </Link>
  );
};
