import Link from 'next/link'
import Image from 'next/image'
import { EventsSectionType } from '~/lib/sanity.queries/eventsSection/types'
import SecondaryButton from '../SecondaryButton';
import { urlForImage } from '~/lib/sanity.image'

interface ActionSectionProps {
  section: EventsSectionType;
}

export default function ActionContainer({ section }: ActionSectionProps) {
  
  const imageOverlayUrl = typeof section.ctaImageOverlay === 'string' ? section.ctaImageOverlay : ''


  const backgroundImageUrl = typeof section.ctaBackgroundImage === 'string' ? section.ctaBackgroundImage : ''

//px-6 sm:px-[6.563rem
  return <div className="flex flex-wrap items-center justify-center py-16 font-manrope ">
    <div className="relative z-20 min-h-[368px]">
    {section.backgroundImage && (
        <Image
          src={backgroundImageUrl}
          alt={section.sectionTitle}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 w-full h-ful"
        />
      )}
      <div className="relative flex w-3/6">
        {section.backgroundImage && (
        <Image
          src={imageOverlayUrl}
          alt={section.sectionTitle}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-10"
        />
      )}
        <div className="relative z-20 flex flex-col px-[60px] py-[74px]">
        <h3 className="mb-8 leading-[44px] text-4xl text-white">{section.ctaSubsectionDescription}</h3>
        <SecondaryButton  buttonText={section?.ctaButton?.buttonText} btnClasses={`bg-white text-secondaryBlack px-[60px] `}       />
      </div>
      </div> 
   </div>
    </div>
}
