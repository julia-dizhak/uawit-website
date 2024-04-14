import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'
import { PostType } from '~/lib/sanity.queries/posts/types'
import { formatDate } from '~/utils'

interface CardProps {
  post: PostType
  className: string
}

export default function Card({ post }: CardProps) {
  return (
    <div className="flex flex-col mt-10 w-1/4 p-4">
      {post.mainImage ? (
        <div className="rounded-2xl w-auto h-[150px] relative bg-white">
          <Image
            className="rounded-2xl"
            src={urlForImage(post.mainImage)?.url() || ''}
            layout="fill"
            objectFit="contain"
            alt={post.title || 'post image'}
          />
        </div>
      ) : (
        <div className="bg-black h-[150px]" />
      )}
      <div className="mt-4 text-left">
        <h3 className="text-primaryBlack text-1xl pb-4">
          {post.slug && <a href={`/post/${post.slug.current}`}>{post.title}</a>}
        </h3>
        <div className=" text-primaryGray text-sm line-clamp-3 pb-4">
          {post.body && <PortableText value={post.body} />}
        </div>
        <p>{post.excerpt}</p>
        <p className="text-xs pt-4">
          {post._createdAt && formatDate(post._createdAt)}
        </p>
      </div>
    </div>
  )
}
