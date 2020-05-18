import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ photos }) => {
  return (
    <>
      <div
        className='grid mb-20 col-gap-1 px-2'
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr)',
          gridAutoRows: '10px',
          placeItems: 'center',
        }}
      >
        {photos.map(image => {
          return <ImageCard key={image.id} image={image} />;
        })}
      </div>
    </>
  );
};

export default ImageList;
