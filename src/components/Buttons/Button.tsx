import React from 'react';

interface Props {
    className : string,
    onClick? : () => void | JSX.Element,
    children: string | JSX.Element
}
export const Button = ({className,onClick, children} : Props) => {
  return (
      <button className={className} onClick={onClick}>
          {children}
      </button>
  );
};
