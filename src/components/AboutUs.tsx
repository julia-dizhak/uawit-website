import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlForImage } from '~/lib/sanity.image'
import { AboutType } from '~/lib/sanity.queries/about/types'
import { Partner } from '~/lib/sanity.queries/partners/types'
import { Partners } from '~/components/Partners'
import Container from './common/Container'
import React from 'react'

type Props = {
  about: AboutType
  partners: Partner[]
}

export default React.memo(function AboutUs({ about, partners }: Props) {
  return (
    <div id="about-us" className="bg-white rounded-[28px] -my-6">
      <Container className="flex flex-col pt-14 pb-16 gap-y-4 md:gap-y-20 px-8">
        {about.mainImage && (
          <div className="w-full overflow-hidden h-[440px]">
            <Image
              src={urlForImage(about.mainImage)?.url() || ''}
              layout="responsive"
              width={400}
              height={440}
              alt="Our community"
              className="rounded-2xl"
            />
          </div>
        )}
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-[40%]">
            <h3 className="mb-8 text-5xl font-bold leading-none tracking-tight text-gray-900 block ml-auto mr-auto text-center md:text-left">
              {about.title}
            </h3>
          </div>
          <div className="w-full md:w-[60%] text-lg">
            <PortableText value={about.shortDescription} />
          </div>
        </div>
        {partners.length > 0 && (
          <div className="w-full">
            <Partners partners={partners} />
          </div>
        )}
      </Container>
    </div>
  )
})
