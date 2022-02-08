
interface Props {
    className : string,
    onClick? : () => void | JSX.Element,
    children: string | JSX.Element,
    type? : 'submit' | 'button' | 'reset'
}
export const Button = ({className,onClick, children, type = "button"} : Props) => {
  return (
      <button className={className} onClick={onClick} type={type}>
          {children}
      </button>
  );
};

