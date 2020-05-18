import React, { useEffect, useState } from 'react';

const ImageCard = ({ image }) => {
  const { urls, description, likes } = image;
  const ImageRef = React.createRef();
  const [Span, SetSpan] = useState(0);
  useEffect(() => {
    ImageRef.current.addEventListener('load', () =>
      SetSpan(Math.ceil(ImageRef.current.clientHeight / 10) + 1)
    );
  }, [ImageRef]);
  return (
    <>
      <div
        className='max-w-sm relative rounded overflow-hidden shadow-lg'
        style={{ gridRowEnd: `span ${Span}` }}
      >
        <img
          ref={ImageRef}
          className='w-full relative'
          src={urls.regular}
          alt={description}
        />
        <div
          className='absolute text-white bg-black bg-opacity-50 rounded px-2'
          style={{ bottom: 2, right: 5 }}
        >
          <i className='far fa-heart mr-1 font-bold text-xl'></i>
          {<span className='text-xl'>{likes}</span> || (
            <span className='text-xl'>0</span>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageCard;
