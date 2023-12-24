const ImageCard = ({ image }) => {
  const { urls, alt_description, likes, links } = image;
  return (
    <>
      <div className='hover column'>
        <figure className='relative'>
          <img
            src={urls.regular}
            alt={alt_description}
            className='w-full h-auto rounded shadow-full'
            style={{
              height: "auto",
              marginBottom: "0.5vw",
            }}
          />
          <div className='likes text-white bg-black bg-opacity-50 rounded px-2 py-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6 mr-1 font-bold text-xl'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
              />
            </svg>

            {<span className='text-xl'>{likes}</span> || (
              <span className='text-xl'>0</span>
            )}
          </div>
          <a href={`${links?.download}&force=true`} download>
            <div className='downloads text-white bg-black bg-opacity-50 rounded px-2 py-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='white'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
                />
              </svg>
            </div>
          </a>
        </figure>
      </div>
    </>
  );
};

export default ImageCard;
