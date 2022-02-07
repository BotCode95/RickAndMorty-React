import React from 'react';
import { Link } from 'react-router-dom';
import { Navegation } from '../navegation/Navegation';

export const NoMatch = () => {
  return (
      <>
        <Navegation/>
        <h1>No Match</h1>
        <Link to="/">go to home</Link>
      </>
  );
};
