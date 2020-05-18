import React from 'react';
import './spinner.css';

const Spinner = ({ hidden }) => {
  return (
    <>
      <div className='container'>
        <div className='spinner' hidden={hidden}>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
