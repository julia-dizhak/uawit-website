import Link from 'next/link';
import Container from './Container';

export default function NoData() {
  return (
    <Container>
      <div className="flex flex-col aligns-center p-2">
        <div className="flex-col">
          <h1 className="text-3xl font-bold pt-10 pb-10 text-center">
            No Data
          </h1>
          <h2 className="text-2xl max-w-[750px] text-center pb-10">
            Please provide data in Sanity studio
          </h2>

          <h3 className="pb-2 text-1xl">Next steps</h3>
          <ul>
            <li>
              <h3 className="text-1xl pb-2">Publish a post in your Studio</h3>
              <p className="pb-10">
                Visit the{' '}
                <Link
                  href="/studio"
                  className="text-blue-700 hover:text-blue-800"
                >
                  Sanity Studio
                </Link>{' '}
                and publish a new document of type post.
              </p>
            </li>
            <li>
              <h4 className="pb-2">Dive into the documentation</h4>
              <p className="pb-10">
                Check out{' '}
                <a
                  className="text-blue-700 hover:text-blue-800"
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
    </Container>
  );
}
