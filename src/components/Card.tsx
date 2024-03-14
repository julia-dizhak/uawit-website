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
    <div className="flex flex-col mt-10 w-1/3 p-4">
      {post.mainImage ? (
        <Image
          src={urlForImage(post.mainImage)?.url() || ''}
          height={300}
          width={500}
          alt={post.title || 'image of post'}
        />
      ) : (
        <div className="bg-black w-100 h-[200]px" />
      )}
      <div className="bg-slate-100">
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
