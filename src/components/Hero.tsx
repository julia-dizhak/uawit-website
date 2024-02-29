import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'
import { Button } from './Button'
import Container from './Container'
import { HeroType } from '~/lib/sanity.queries/hero/types'

const Hero = ({
  backgroundImage,
  description,
  title,
  buttonName,
}: HeroType) => {
  const handleButtonClick = () => {
    window.open(buttonName.redirectTo, '_blank')
  }

  return (
    <div className="relative bg-cover bg-center md:h-[40vh] flex flex-col justify-center items-center gap-4">
      {backgroundImage && (
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src={urlForImage(backgroundImage).url()}
          fill={true}
          objectFit="cover"
          alt="Logo UAWIT"
        />
      )}
      <Container>
        <div className="mt-10 flex flex-col justify-center items-center md:mt-0">
          <h1 className="text-3xl font-bold mb-10 text-center">{title}</h1>

          <p className="text-2xl max-w-[750px] text-center">{description}</p>

          {buttonName && (
            <Button
              buttonText={buttonName?.buttonText}
              handleClick={handleButtonClick}
              className="mt-16"
            />
          )}
        </div>
      </Container>
    </div>
  )
}

export default Hero
