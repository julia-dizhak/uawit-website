import { Partner } from '~/lib/sanity.queries/partners/types'
import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'
import Container from './Container'

type Props = {
  partners: Partner[]
}

export const Partners = ({ partners }: Props) => {
  return (
    <Container className="text-center">
      <h2 className="text-2xl font-bold my-4">Our Partners</h2>
      <div className="flex flex-wrap justify-center text-center align-center">
        {partners.map((partner: Partner, index) => (
          <a href={partner.href} key={index} className="block m-auto w-1/4 p-4">
            <Image
              className="block text-center m-auto"
              src={urlForImage(partner.partnerLogo).url()}
              height={60}
              width={60}
              alt={partner.partnerName}
            />
          </a>
        ))}
      </div>
    </Container>
  )
}
