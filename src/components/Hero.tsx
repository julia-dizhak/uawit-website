import Image from 'next/image';
import { urlForImage } from '~/lib/sanity.image';
import Navigation from '~/components/Navigation'
import Container from './Container';
import { HeroType } from '~/lib/sanity.queries/hero/types';

const Hero = ({
  backgroundImage,
  description,
  title,
  fontColor,
  navbar,
  logo
}: HeroType) => {
;
  const renderRestOfHeader = (title) => {
    const firstSpaceIndex = title.indexOf(' ');
    return title.substring(firstSpaceIndex + 1);
  };

  const firstWord = title.split(' ')[0];
  const restOfTitle = renderRestOfHeader(title);

  return (
    <>
    {(navbar || logo) && <Navigation logo={logo} navbar={navbar} />}
    <div className='relative bg-cover bg-center md:h-[40vh] flex flex-col justify-center items-center gap-4'>
      {backgroundImage && (
        <div className=''>
          <Image
            className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
            src={urlForImage(backgroundImage)?.url() || ''}
            fill={true}
            objectFit='cover'
            alt='Logo UAWIT'
          />
          <div className='absolute inset-0 bg-black opacity-20 z-[-1]'></div>
        </div>
      )}
      <Container>
        <div
          className={`mt-10 flex flex-col justify-center items-center md:mt-0 text-${fontColor}`}
        >
          <h1 className='text-6xl font-bold mb-10 text-center'>
            {firstWord} <br />
            <span>{restOfTitle}</span>
          </h1>
          <p className='text-2xl max-w-[750px] text-center'>{description}</p>
        </div>
      </Container>
    </div>
    </>
  );
};

export default Hero;
