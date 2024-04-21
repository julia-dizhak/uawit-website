import Link from 'next/link'
import Image from 'next/image'
import { SendMessageType } from '~/lib/sanity.queries/sendMessage/types'
import { urlForImage } from '~/lib/sanity.image'
import Container from './common/Container'

interface SendMessageSectionProps {
  sendMessage: SendMessageType
  email: string
}

export default function SendMessageSection({
  sendMessage,
  email,
}: SendMessageSectionProps) {
  const { title, blockImage, linkText } = sendMessage

  return (
    <div className="bg-backgroundColorGray">
      <Container className="text-center pt-[100px] pb-2">
        <div className="relative z-10 w-full overflow-hidden border sm:rounded-xl max-h-[368px]">
          <div className="absolute inset-0 z-20 bg-white bg-opacity-20 saturate-40"></div>
          {blockImage && (
            <Image
              src={urlForImage(blockImage)?.url() || ''}
              alt={title}
              fill
              sizes="(min-width: 1300px) 1225px, calc(94.39vw + 17px)"
              className="inset-0 z-10 object-cover object-center"
            />
          )}
          <div className="relative flex flex-col w-full sm:w-3/4 md:w-3/6 lg:w-1/2">
            <div className="absolute inset-0 z-20 bg-[#5298AB] md:rounded-br-[160px] bg-opacity-[.85] saturate-40 "></div>
            <div className="relative z-40 px-8 lg:px-[60px] py-8 lg:py-[74px] ">
              {title && (
                <h3 className="mb-8 lg:text-4xl md:text-2xl text-center text-white sm:text-start">
                  {title}
                </h3>
              )}

              <div className="lg:flex lg:float-left">
                <Link
                  href={`mailto:${email}`}
                  className="bg-white text-secondaryBlack hover:bg-backgroundColorGray focus:ring-4 font-medium rounded-lg text-sm px-10 py-3"
                >
                  {linkText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
