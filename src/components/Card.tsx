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
    <div className="flex flex-col mt-10 lg:w-1/4 p-4 md:w-2/4 sm:w-full">
      {post.mainImage ? (
        <div className="rounded-xl border overflow-hidden h-[200px] relative lg:w-auto sm:w-full">
          <Image
            src={urlForImage(post.mainImage)?.url() || ''}
            alt={post.title || 'news image'}
            fill
            sizes="(min-width: 1040px) calc(33.32vw - 87px), (min-width: 780px) calc(50vw - 119px), (min-width: 640px) calc(100vw - 212px), calc(100vw - 50px)"
            className="object-cover w-full h-auto transition-transform duration-200 ease-out group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="bg-black h-[200px]" />
      )}
      <div className="mt-4 text-left">
        <h3 className="text-primaryBlack text-1xl pb-4">
          {post.slug && <a href={`/post/${post.slug.current}`}>{post.title}</a>}
        </h3>
        <div className=" text-primaryGray text-sm line-clamp-5 pb-4">
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
