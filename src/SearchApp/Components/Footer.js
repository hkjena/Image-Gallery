import React from 'react';

const Footer = () => {
  return (
    <div className='mt-10 flex flex-wrap justify-center bg-purple-200 items-center py-1 fixed bottom-0 w-full'>
      &copy; <p>Copyright {new Date().getFullYear()}.</p>
      <p>Made With </p>
      <i className='far fa-heart m-2 font-bold text-red-600'></i>
      <span>
        By{' '}
        <a
          href='https://twitter.com/dev_hkjena'
          target='_blank'
          className='hover:underline hover:text-purple-700'
        >
          Harekrishna Jena
        </a>
      </span>
    </div>
  );
};

export default Footer;
