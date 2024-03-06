import { Partner } from '~/lib/sanity.queries/partners/types'
import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'

type Props = {
  partners: Partner[]
}

export const Partners = ({ partners }: Props) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold my-4">Our Partners</h2>
      <div className="flex flex-wrap justify-center">
        {partners.map((partner: Partner, index) => (
          <a href={partner.href} key={index} className="block w-1/4 p-4">
            <Image
              className="w-full h-auto"
              src={urlForImage(partner.partnerLogo).url()}
              height={50}
              width={50}
              alt={partner.partnerName}
            />
          </a>
        ))}
      </div>
    </div>
  )
}
