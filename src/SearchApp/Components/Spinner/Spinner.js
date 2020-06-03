import React from 'react';
import './spinner.css';

const Spinner = () => {
  return (
    <>
      <section className='space-y-10 w-11/12 spinner1'>
        <div className='sk-fading-circle'>
          <div className='sk-circle sk-circle-1'></div>
          <div className='sk-circle sk-circle-2'></div>
          <div className='sk-circle sk-circle-3'></div>
          <div className='sk-circle sk-circle-4'></div>
          <div className='sk-circle sk-circle-5'></div>
          <div className='sk-circle sk-circle-6'></div>
          <div className='sk-circle sk-circle-7'></div>
          <div className='sk-circle sk-circle-8'></div>
          <div className='sk-circle sk-circle-9'></div>
          <div className='sk-circle sk-circle-10'></div>
          <div className='sk-circle sk-circle-11'></div>
          <div className='sk-circle sk-circle-12'></div>
        </div>
        <h2 className='font-medium text-center text-purple-700 sm:text-lg  md:text-lg lg:text-xl xl:text-2xl w-full'>
          <span role='img' aria-label='bear image'>
            🐻
          </span>{' '}
          Bear with us while we are searching the photos for you.
        </h2>
      </section>
    </>
  );
};

export default Spinner;
