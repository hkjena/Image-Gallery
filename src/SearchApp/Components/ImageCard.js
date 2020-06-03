import React, { useEffect, useState } from 'react';

const ImageCard = ({ image }) => {
  const { urls, description, likes } = image;
  const ImageRef = React.createRef();
  const [visivility, Setvisivility] = useState(0);
  useEffect(() => {
    ImageRef.current.addEventListener('load', () => Setvisivility(1));
  }, [ImageRef]);
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
            ref={ImageRef}
          />
          <div
            className='likes text-white bg-black bg-opacity-50 rounded px-2 py-2'
            // style={{ opacity: visivility }}
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
