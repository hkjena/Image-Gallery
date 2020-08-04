import React, { useEffect, useState } from 'react';

const ImageCard = ({ image }) => {
  const { urls, description, likes } = image;
  return (
    <>
      <div class='hover column'>
        <figure className='relative'>
          <img
            src={urls.regular}
            alt={description}
            className='w-full h-auto rounded shadow-full'
            style={{
              height: 'auto',
              marginBottom: '0.5vw',
            }}
          />
          <div
            className='likes text-white bg-black bg-opacity-50 rounded px-2 py-2'
          >
            <i className='far fa-heart mr-1 font-bold text-xl'></i>
            {<span className='text-xl'>{likes}</span> || (
              <span className='text-xl'>0</span>
            )}
          </div>
        </figure>
      </div>
    </>
  );
};

export default ImageCard;
