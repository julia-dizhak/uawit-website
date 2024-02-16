import Image from 'next/image'
import Link from 'next/link'

import SanityLogo from './sanity.svg'

export default function Welcome() {
  return (
    <div className="flex flex-col aligns-center p-2">
      
      <div className="flex-col">
        <p>Welcome page</p>
        <h2 className="">Next steps</h2>
        <ul className="">
          <li className="mb-2">
            <h3 className="">Publish a post in your Studio</h3>
            <p className="">
              Visit the <Link href="/studio">Sanity Studio</Link> and publish a
              new document of type post.
            </p>
          </li>
          <li className="">
            <h3 className="">Dive into the documentation</h3>
            <p className="">
              Check out{' '}
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://www.sanity.io/docs"
              >
                the documentation
              </a>{' '}
              to learn more about Sanity.
            </p>
          </li>

        </ul>
      </div>
    </div>
  )
}
