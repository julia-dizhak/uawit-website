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
      <div className="flex flex-wrap justify-center text-center align-center">
        {partners.map((partner: Partner, index) => (
          <a
            href={partner.href}
            key={index}
            className="block m-auto p-4 lg:w-1/6 md:w-1/4 sm:2/4"
          >
            <Image
              className="block m-auto "
              src={urlForImage(partner.partnerLogo)?.url() || ''}
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
