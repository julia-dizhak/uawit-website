import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'
import { LogoType } from '~/lib/sanity.queries/logo/types'

type Props = {
  logo: LogoType
}

export const Logo = ({ logo }: Props) => {
  const { logoImage, href, caption } = logo

  return (
    <a href={`#${href}`} className="block" aria-current="page">
      {Boolean(logoImage) && (
        <Image
          src={urlForImage(logoImage).url()}
          height={50}
          width={50}
          alt={caption || 'ogo UA WIT'}
        />
      )}
    </a>
  )
}
