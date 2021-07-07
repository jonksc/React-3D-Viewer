import React from 'react';
import loader from './Loader.gif';

const Spinner = () => {
  return (
    <>
      <img className='loader' src={loader} alt="loader" />
    </>
  );
};

export default Spinner;