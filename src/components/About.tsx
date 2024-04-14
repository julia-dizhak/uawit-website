import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlForImage } from '~/lib/sanity.image'
import { AboutType } from '~/lib/sanity.queries/about/types'
import { Partner } from '~/lib/sanity.queries/partners/types'
import { Partners } from '~/components/Partners'
import Container from './Container'

type Props = {
  about: AboutType
  partnersData: Partner[]
}

export default function About({ about, partnersData }: Props) {
  return (
    <div className="bg-white rounded-[28px] -my-6" id="about-us">
      <Container className="flex flex-col py-20 gap-y-4 md:gap-y-20">
        {about.mainImage && (
          <div className="w-full">
            <Image
              src={urlForImage(about.mainImage)?.url() || ''}
              layout="responsive"
              height={500}
              width={500}
              alt="Our community"
              className="rounded-2xl"
            />
          </div>
        )}
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-[48%]">
            <h3 className="mb-8 text-5xl font-bold leading-none tracking-tight text-gray-900 block ml-auto mr-auto text-center md:text-left">
              {about.title}
            </h3>
          </div>
          <div className="w-full md:w-[48%] text-lg">
            <PortableText value={about.shortDescription} />
          </div>
        </div>
        {partnersData.length > 0 && (
          <div className="w-full">
            <Partners partners={partnersData} />
          </div>
        )}
      </Container>
    </div>
  )
}
