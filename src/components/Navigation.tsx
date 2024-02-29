import React, { useState } from 'react'
import { Button } from './Button'
import Container from './Container'
import { Logo } from './Logo'

type MenuItemsProps = {
  path: string
  title: string
  onClick: () => void
}

const MenuItems = ({ path, title, onClick }: MenuItemsProps) => {
  const handleClick = () => {
    onClick && onClick()
  }
  return (
    <a
      href={`#${path}`}
      className="block py-2 px-3 text-slate-600 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
      aria-current="page"
      onClick={handleClick}
    >
      {title}
    </a>
  )
}

const Dropdown = ({ languages, className }) => {
  const [language, setLanguage] = useState(languages[0].key)

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value
    setLanguage(newLanguage)
  }

  return (
    <div
      id="dropdownNavbar"
      className={`z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg  w-fit dark:bg-gray-700 dark:divide-gray-600 ${className}`}
    >
      <select
        value={language}
        onChange={handleLanguageChange}
        className="py-2 pl-2 text-sm text-gray-700 dark:text-gray-400"
        aria-labelledby="dropdownLargeButton"
      >
        {languages.map((lang) => (
          <option
            key={lang.key}
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            value={lang.key}
          >
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  )
}

const Navigation = ({ navbar, logo }) => {
  const { buttonName, items, languages } = navbar
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleMenu = () => {
    setIsExpanded((prev) => !prev)
  }

  const handleButtonClick = () => {
    window.open(buttonName.redirectTo, '_blank')
  }

  const handleMenuClick = () => {
    toggleMenu()
  }

  return (
    <Container>
      <nav className="bg-white border-gray-200 mt-4">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Logo logo={logo} />
          </div>
          {/* mobile view => burger menu */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                ? 'block z-50 absolute top-16 right-4 left-4'
                : 'hidden'
            } w-full md:flex items-center gap-20 md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium md:flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
              {items?.length &&
                items.map((menuItem) => (
                  <li key={menuItem.id}>
                    <MenuItems
                      path={menuItem.path}
                      title={menuItem.title}
                      onClick={handleMenuClick}
                    />
                  </li>
                ))}

              <div className="md:flex items-center gap-2 md:pl-8">
                {languages?.length && (
                  <Dropdown languages={languages} className="py-4 md:p-0" />
                )}
                <Button
                  buttonText={buttonName?.buttonText}
                  handleClick={handleButtonClick}
                />
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  )
}

export default Navigation
