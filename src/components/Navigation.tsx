import React, { useState } from 'react';
import { Button } from './Button';
import Container from './Container';
import { Logo } from './Logo';
import { MdLanguage } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';
import { CgSearch } from 'react-icons/cg';
import Select from 'react-select';

interface MenuItemsProps {
  path: string;
  title: string;
  onClick: () => void;
}

const MenuItems = ({ path, title, onClick }: MenuItemsProps) => {
  return (
    <a
      href={`#${path}`}
      className='block py-2 px-3 text-slate-600 font-bold rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500'
      aria-current='page'
      onClick={onClick}
    >
      {title}
    </a>
  );
};

const Navigation = ({ navbar, logo }) => {
  const { buttonName, items, languages } = navbar;

  const [isExpanded, setIsExpanded] = useState(false);
  const [language, setLanguage] = useState(null);

  const toggleMenu = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleButtonClick = () => {
    window.open(buttonName.redirectTo, '_blank');
  };

  const handleMenuClick = () => {
    toggleMenu();
  };

  return (
    <nav className='pt-4'>
      <Container>
        <div className='flex items-center  justify-between mx-auto'>
          <div className='flex items-center space-x-3 rtl:space-x-reverse pr-20'>
            <Logo logo={logo} />
          </div>
          {/* mobile view => burger menu */}
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-default'
            aria-expanded={isExpanded}
            onClick={toggleMenu}
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
          {/* ./mobile view => burger menu */}

          <div
            className={`${
              isExpanded
                ? 'block z-50 bg-white absolute top-16 right-0 left-0 h-screen md:h-fit'
                : 'hidden  '
            }  md:static md:w-full md:shrink md:flex md:items-center md:justify-between gap-20 md:bg-transparent`}
            id='navbar-default'
          >
            <ul className='p-4 mt-4 rounded-lg   md:bg-transparent md:flex md:items-center  md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 '>
              {items.length > 0 &&
                items.map((menuItem) => (
                  <li key={menuItem.id}>
                    <MenuItems
                      path={menuItem.path}
                      title={menuItem.title}
                      onClick={handleMenuClick}
                    />
                  </li>
                ))}
            </ul>

            <div className='p-4 md:flex items-center gap-4'>
              <FaLinkedinIn 
              className='text-primaryBlue cursor-pointer my-3 hover:opacity-75 transition duration-300' 
              size={20}  
              onClick={handleButtonClick}
              />

              <Button
                buttonText={buttonName?.buttonText}
                handleClick={handleButtonClick}
                className="m-0 bg-primaryBlue text-red my-3  hover:opacity-75 transition duration-300"
              />

              {languages.length > 0 && (
                <Select
                  value={language}
                  onChange={setLanguage}
                  options={languages.map((language) => ({
                    value: language.key,
                    label: language.name,
                  }))}
                  placeholder={<MdLanguage className='text-slate-600' />}
                  isSearchable={false}
                  className='w-32'
                />
              )}

              <CgSearch className="text-slate-600 cursor-pointer my-3" size={18}/>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
