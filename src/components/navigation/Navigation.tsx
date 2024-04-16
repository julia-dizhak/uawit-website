import React, { useState } from 'react'
import { Button } from '../buttons/Button'
import Container from '../common/Container'
import { Logo } from '../Logo'
import { FaLinkedinIn } from 'react-icons/fa'
import navigationItems from '~/utils/constants'

interface MenuItemsProps {
  path: string
  title: string
  onClick: () => void
}

const MenuItems = ({ path, title, onClick }: MenuItemsProps) => {
  return (
    <a
      href={`#${path}`}
      className="block py-2 text-slate-600 font-bold rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 hover:underline"
      aria-current="page"
      onClick={onClick}
    >
      {title}
    </a>
  )
}

const Navigation = ({ linkedIn, logo }) => {
  const { link, buttonText } = linkedIn

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleMenu = () => {
    setIsExpanded((prev) => !prev)
  }

  const handleButtonClick = () => {
    window.open(link, '_blank')
  }

  const handleMenuClick = () => {
    toggleMenu()
  }

  return (
    <Container className="pt-3">
      <nav className="flex items-center justify-between mx-auto">
        <div className="flex items-center space-x-3 rtl:space-x-reverse pr-20">
          <Logo logo={logo} />
        </div>
        {/* mobile view => burger menu */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isExpanded}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* ./mobile view => burger menu */}

        <div
          className={`${
            isExpanded
              ? 'block z-50 bg-white absolute top-16 right-0 left-0 py-6 rounded-md md:p-0'
              : 'hidden'
          }  md:static md:w-full md:shrink md:flex md:items-center md:justify-between gap-20 md:bg-transparent`}
          id="navbar-default"
        >
          <ul className="px-6 mb-6 rounded-lg md:bg-transparent md:flex md:items-center md:p-0 md:flex-row md:space-x-8 md:m-0  ">
            {navigationItems.map((menuItem) => (
              <li key={menuItem.id}>
                <MenuItems
                  path={menuItem.path}
                  title={menuItem.title}
                  onClick={handleMenuClick}
                />
              </li>
            ))}
          </ul>

          <div className="px-6 md:flex items-center gap-4">
            <FaLinkedinIn
              className="text-primaryBlue cursor-pointer my-3 hover:opacity-75 transition duration-300"
              size={20}
              onClick={handleButtonClick}
            />

            <Button
              buttonText={buttonText}
              handleClick={handleButtonClick}
              className="m-0 bg-primaryBlue text-red my-3 hover:opacity-75 transition duration-300"
            />
          </div>
        </div>
      </nav>
    </Container>
  )
}

export default Navigation
