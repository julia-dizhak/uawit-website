import navigationItems from '~/utils/constants'
import Container from './common/Container'
import { Logo } from './Logo'
import { FaLinkedinIn } from 'react-icons/fa'

interface MenuItemsProps {
  path: string
  title: string
}

const MenuItems = ({ path, title }: MenuItemsProps) => {
  return (
    <a href={`#${path}`} aria-current="page">
      {title}
    </a>
  )
}

export const Footer = ({ logo, contacts }) => {
  const { email, linkedIn } = contacts
  const { link } = linkedIn ?? {}

  return (
    <Container>
      <footer className="bg-white bottom-0">
        <hr className="my-2 border-gray-100 sm:mx-auto lg:my-8" />
        <div className="mx-auto w-full py-2 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-4 flex items-start space-x-2 rtl:space-x-reverse">
              <Logo logo={logo} />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
              {navigationItems.length > 0 && (
                <div>
                  <h2 className="mb-3 font-bold">Categories</h2>
                  <ul>
                    {navigationItems.map((menuItem) => (
                      <li key={menuItem.id} className="mb-2 hover:underline">
                        <MenuItems
                          path={menuItem.path}
                          title={menuItem.title}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <h2 className="mb-3 font-bold">Contacts</h2>
                <ul>
                  {Boolean(email) && (
                    <li className="mb-2">
                      <a href={`mailto:${email}`} className="hover:underline ">
                        Email
                      </a>
                    </li>
                  )}
                  {Boolean(link) && (
                    <li>
                      <a
                        href={link}
                        rel="noopener, noreferrer"
                        target="_blank"
                        className="hover:underline"
                      >
                        LinkedIn
                        <FaLinkedinIn
                          className="text-primaryBlue inline ml-1 align-middle"
                          size={14}
                        />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
              <div className="invisible lg:visible">
                <div className="text-sm text-gray-500 sm:text-center">
                  © 2024. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>

          <div className="visible lg:invisible">
            <hr className="my-2 border-gray-100 sm:mx-auto lg:my-8" />
            <div className="text-sm text-gray-500 sm:text-center">
              © 2024. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </Container>
  )
}
