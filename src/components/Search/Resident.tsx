import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
    resident : string
}
export const Resident = ({resident} : Props) => {

  const [idPage, setIdPage] = useState<number>(0);

  useEffect(() => {
    id();
  })

  const id = () => {
    const splitUrl =resident.split('/')
    const id = splitUrl[splitUrl.length - 1]
    setIdPage(parseInt(id))
  }
  
  return (
      <div className="container container-location">
        <Link to={`/details/${idPage}`} className="nav-active">{resident}</Link>
      </div>
  );
};
