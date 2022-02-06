
interface Props {
    title : string
}

export const Title = (props : Props) => {
  return (
    <h2 className="title">{props.title}</h2>
  );
};
