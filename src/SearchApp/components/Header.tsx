import { useState } from "react";

const Header = () => {
  const [visible, SetVisible] = useState("block");
  return (
    <>
      <div
        className={
          visible === "none"
            ? "text-transparent h-0 ease-out duration-500"
            : "shadow-md bg-purple-200 px-4 py-3 rounded relative"
        }
        role='alert'
      >
        <h1 className='text-center mr-8'>Search Over 1,000,000 Stock Photos</h1>
        <span className='absolute top-0 bottom-0 right-0 px-4 py-3'>
          <svg
            className={
              visible === "none"
                ? "text-transparent h-0 ease-out duration-500"
                : "fill-current h-6 w-6 text-red-500 hover:text-red-900"
            }
            role='button'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            onClick={() => SetVisible("none")}
          >
            <title>Close</title>
            <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
          </svg>
        </span>
      </div>
    </>
  );
};

export default Header;
