import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ photos }) => {
  return (
    <>
      <div id='photos' className='photos'>
        {photos.map(image => {
          return <ImageCard key={image.id} image={image} />;
        })}
      </div>
    </>
  );
};

export default ImageList;
