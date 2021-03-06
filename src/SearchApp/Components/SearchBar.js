import React, { useState } from 'react';

const SearchBar = ({ OnSubmit, visibility }) => {
  const [term, setTerm] = useState('');
  const formSubmit = e => {
    e.preventDefault();
    e.target.getElementsByTagName('input')[0].blur();
    if (!term) return;
    if (!term.trim()) return;
    OnSubmit(term);
    setTerm('');
  };
  return (
    <form id='frm' onSubmit={formSubmit} className='flex justify-center'>
      <div className='flex items-center justify-center w-full sm:w-2/4 md:w-2/5 lg:w-2/5 xl:w-2/5'>
        <input
          id='input'
          className='outline-none appearance-none w-8/12 ease-out duration-500 bg-transparent rounded-full border shadow border-purple-500 my-4  placeholder-purple-400 py-2 px-2 leading-tight focus:ouline-none'
          type='search'
          placeholder='Search Photos'
          value={term}
          required
          onChange={e => setTerm(e.target.value)}
        />
        <button
          className='flex-shrink height-full -ml-24 rounded-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded max-w-lg'
          type='submit'
        >
          Search{' '}
          <i
            className='fas fa-circle-notch'
            style={{
              animation: '1s linear infinite wheel',
            }}
            hidden={visibility}
          ></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
