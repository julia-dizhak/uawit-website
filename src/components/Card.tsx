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
        <div className="w-full">
          <Image
            className="rounded-2xl"
            src={urlForImage(post.mainImage)?.url() || ''}
            height={180}
            width={200}
            alt={post.title || 'image of post'}
          />
        </div>
      ) : (
        <div className="bg-black w-100 h-[200]px" />
      )}
      <div className="mt-4 text-left">
        <h3>
          {post.slug && <a href={`/post/${post.slug.current}`}>{post.title}</a>}
        </h3>
        <div className="line-clamp-3">
          {post.body && <PortableText value={post.body} />}
        </div>
        <p>{post.excerpt}</p>
        <p>{post._createdAt && formatDate(post._createdAt)}</p>
      </div>
    </div>
  )
}
