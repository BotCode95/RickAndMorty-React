import React from 'react';

interface Props {
    resident : string
}
export const Resident = ({resident} : Props) => {
  return (
      <div>
             <p className="container container-location">{resident}</p>
      </div>
  );
};
