import Link from 'next/link'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-screen-xl px-6">
      {/* <header className="flex p-2 bg-white">
        <Link className="no-underline" href="/">
          <h1 className="text-3xl font-bold">
            Ukrainian Women in Tech
          </h1>
        </Link>
      </header> */}

      {children}

      {/* <footer className="m-4 p-4 bg-slate-500">
        <p className='mb-2'>Footer ...</p>
        <p className="flex mt-2 mb-2">
          Made with{' '}
          <svg
            datasanity-icon="heart-filled"
            width="1em"
            height="1em"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.2"
            ></path>
          </svg>{' '}
          at UAWIT
        </p>
      </footer> */}
    </div>
  )
}
