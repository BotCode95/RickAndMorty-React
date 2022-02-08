import { Link } from "react-router-dom";
interface Props {
    id : number,
    name: string
}

export const Character = ({id,name} : Props ) => {
  return (
    <Link to={`/details/${id}`} className="item-list">
        {name}
    </Link>
  );
};
