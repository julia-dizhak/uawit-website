import Container from './Container'
import { Logo } from './Logo'

interface MenuItemsProps {
  path: string
  title: string
}

const MenuItems = ({ path, title }: MenuItemsProps) => {
  return (
    <a
      href={`#${path}`}
      aria-current="page"
      
    >
      {title}
    </a>
  )
}


export const Footer = ({ navbar, logo }) => {
    const { items} = navbar

  return (
    <Container>
      <footer className="bg-white bottom-0">
        <hr className="my-2 border-gray-100 sm:mx-auto lg:my-8" />
        <div className="mx-auto w-full p-4 py-2 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-4 flex items-start space-x-2 rtl:space-x-reverse">
              <Logo logo={logo} />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
              {items.length > 0 && (
                <div>
                  <h2 className="mb-4 font-bold">Categories</h2>
                  <ul className="text-sm">
                    {items.map((menuItem) => (
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
                <h2 className="mb-4 font-bold">Regulations</h2>
                <ul className="text-sm">
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Cookie settings
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 font-bold">Contacts</h2>
                <ul className="text-sm">
                  <li className="mb-2">
                    <a
                      href="mailto:someone@example.com"
                      className="hover:underline "
                    >
                      Email
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div className="invisible lg:visible">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-2 mb-4 ps-10 text-sm text-gray-900 rounded-full bg-gray-50 focus:ring-grey-500 focus:border-grey-500 "
                    placeholder="Search here..."
                    required
                  />
                </div>
                <div className="text-sm text-gray-500 sm:text-center">
                  © 2024. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
          <div className="visible lg:invisible">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 my-4 ps-10 text-sm text-gray-900 rounded-full bg-gray-50 focus:ring-grey-500 focus:border-grey-500 "
                placeholder="Search here..."
                required
              />
            </div>
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
