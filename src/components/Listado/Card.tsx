import { Result } from "../../interfaces/data";

interface Props {
    item : Result
}

export const Card = (data : Props ) => {
  const {item} = data;
//   console.log(item.id)
  return (
    //   <section className="row">
          <tr>
              <td>{item.name}</td>
              <td>  <img src={item.image} alt="image" /></td>
              <td>{item.status}</td>
              <td>{item.species}</td>
              <td>{item.origin.name}</td>
              <td>{item.location.name}</td>
          </tr>
    //     {/* <div>{item.name}</div>
    //     <div> 
    //         <img src={item.image} alt="image" />
    //     </div>
    //     <div>{item.status}</div>
    //     <div>{item.species}</div>
    //     <div>{item.origin.name}</div>
    //     <div>{item.location.name}</div>
    //   </section> */}
    )
};
