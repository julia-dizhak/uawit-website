import Link from 'next/link'
import Image from 'next/image'
import { EventsSectionType } from '~/lib/sanity.queries/eventsSection/types'
import SecondaryButton from '../SecondaryButton';


interface ActionSectionProps {
  section: EventsSectionType;
}

export default function ActionContainer({ section }: ActionSectionProps) {

  {/* Image Overlay is an optional element, not sure if it's should be added from the Sanity */}
  // const imageOverlayUrl = typeof section.ctaImageOverlay === 'string' ? section.ctaImageOverlay : ''

  const backgroundImageUrl = typeof section.ctaBackgroundImage === 'string' ? section.ctaBackgroundImage : ''

  return <div className="flex flex-wrap items-center justify-center max-w-screen-xl mx-auto sm:px-6 font-manrope pt-[100px] bg-backgroundColor ">
     
    <div className="relative z-20  w-full overflow-hidden border sm:rounded-xl max-h-[368px] 
      ">
         <div className="absolute inset-0 z-20 bg-white bg-opacity-20 saturate-40"></div>
    {section.backgroundImage && (
        <Image
          src={backgroundImageUrl}
          alt={section.sectionTitle}
          fill
          sizes="(min-width: 1300px) 1225px, calc(94.39vw + 17px)"
          className="inset-0 z-10 object-cover object-center "
        />
      )}
      <div className="relative flex flex-col w-full sm:w-3/4 md:w-3/6 lg:w-1/2">
      {/* Image Overlay is an optional element, not sure if it's should be added from the Sanity */}

        {/* {section.imageOverlayUrl && (
        <Image
          src={imageOverlayUrl}
          alt={section.sectionTitle}
          fill
          sizes="(min-width: 1300px) 612px, (min-width: 640px) calc(45.63vw + 28px), 100vw"
          className="inset-0 z-30 object-cover h-auto"
        />
      )} */}
          <div className="absolute inset-0 z-20 bg-[#5298AB] md:rounded-br-[160px] bg-opacity-[.85] saturate-40 " ></div>
        <div className="relative z-40 px-8 lg:px-[60px] py-8 lg:py-[74px] ">
        <h3 className="mb-8 text-3xl text-4xl text-center text-white sm:text-start">{section.ctaSubsectionDescription}</h3>
        <div className="flex sm:float-left">
              <SecondaryButton buttonText={section?.ctaButton?.buttonText} btnClasses={`bg-white text-secondaryBlack px-[60px]`} />
            </div>
      </div>
      </div> 
   </div>
    </div>
}
