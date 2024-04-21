import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'
import { LogoType } from '~/lib/sanity.queries/logo/types'

type Props = {
  logo: LogoType
}

export const Logo = ({ logo }: Props) => {
  const { logoImage, href, caption } = logo

  return (
    <a href={href} className="block" aria-current="page">
      {Boolean(logoImage) && (
        <Image
          src={urlForImage(logoImage)?.url() || ''}
          height={70}
          width={70}
          alt={caption || 'Logo UA WIT in Stockholm'}
        />
      )}
    </a>
  )
}
