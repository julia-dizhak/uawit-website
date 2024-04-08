import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'
import Navigation from '~/components/navigation/Navigation'
import { HeroType } from '~/lib/sanity.queries/hero/types'
import { NavigationType } from '~/lib/sanity.queries/navbar/types'

type Props = {
  hero: HeroType
  navbar: NavigationType
}

const Hero = ({ hero, navbar }: Props) => {
  const { backgroundImage, description, title, fontColor, logo } = hero

  const renderRestOfHeader = (title) => {
    const firstSpaceIndex = title.indexOf(' ')
    return title.substring(firstSpaceIndex + 1)
  }

  const firstWord = title.split(' ')[0]
  const restOfTitle = renderRestOfHeader(title)

  return (
    <>
      <div className="relative bg-center bg-cover">
        {backgroundImage && (
          <div>
            <Image
              className="absolute top-0 left-0 w-full h-[500px] object-cover z-[-1]"
              src={urlForImage(backgroundImage)?.url() || ''}
              fill
              alt="Logo UAWIT"
            />
            <div className="absolute inset-0 z-[-1] hero-overlay"></div>
          </div>
        )}
        {(navbar || logo) && <Navigation logo={logo} navbar={navbar} />}

        <div
          className={`pt-[180px] pb-[140px] flex flex-col justify-center items-center gap-4 md:mt-0 text-${fontColor} `}
        >
          <h1 className="mb-10 text-6xl font-bold text-center">
            {firstWord} <br />
            <span>{restOfTitle}</span>
          </h1>
          <p className="text-2xl max-w-[750px] text-center">{description}</p>
        </div>
      </div>
    </>
  )
}

export default Hero
