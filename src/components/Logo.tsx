import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'

export const Logo = ({ logo }) => {
  const { logoImage, href, caption } = logo

  return (
    <a href={`#${href}`} className="block" aria-current="page">
      {logoImage && (
        <Image
          src={urlForImage(logoImage).url()}
          height={50}
          width={50}
          alt={caption}
        />
      )}
    </a>
  )
}
