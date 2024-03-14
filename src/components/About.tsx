import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { Button } from './Button'
import { urlForImage } from '~/lib/sanity.image'
import { AboutType } from '~/lib/sanity.queries/about/types'

type Props = {
  about: AboutType
}

export default function About({ about }: Props) {
  const handleButtonClick = () => {}
  return (
    <div className="items-center flex flex-wrap">
      <div className="w-full md:w-5/12 ml-auto mr-auto">
        <h3 className="mb-8 text-4xl font-bold leading-none tracking-tight text-gray-900">
          <a className="" href="">
            {about.title}
          </a>
        </h3>
        <PortableText value={about.shortDescription} />
        <Button
          buttonText="Learn More"
          handleClick={handleButtonClick}
          className="border border-blue-700 text-blue-700 py-2 my-4 px-4 rounded-full "
        />
      </div>
      {about.mainImage && (
        <div className="w-full md:w-5/12 ml-auto mr-auto">
          <Image
            src={urlForImage(about.mainImage).url()}
            layout="responsive"
            height={500}
            width={500}
            alt="Our comunity"
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  )
}
