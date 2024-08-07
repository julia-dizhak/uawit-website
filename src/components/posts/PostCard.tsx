import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'
import { PostType } from '~/lib/sanity.queries/posts/types'
import { formatDate } from '~/utils'
import defaultPostImage from '~/assets/images/default_post_image.png'

interface PostCardProps {
  post: PostType
  className: string
}

export default function PostCard({ post }: PostCardProps) {
  const date = post.date ? post.date : post._createdAt

  return (
    <div className="flex flex-col lg:w-1/4 p-4 md:w-2/4 sm:w-full">
      {post.slug && (
        <a href={`/post/${post.slug.current}`}>
          <div className="rounded-xl border overflow-hidden h-[200px] relative lg:w-auto sm:w-full">
            <Image
              className="object-cover w-full h-auto transition-transform duration-200 ease-out group-hover:scale-105"
              src={
                post.mainImage
                  ? urlForImage(post.mainImage)?.url() || ''
                  : defaultPostImage
              }
              alt={post.title || 'news image'}
              fill
              sizes="(min-width: 1040px) calc(33.32vw - 87px), (min-width: 780px) calc(50vw - 119px), (min-width: 640px) calc(100vw - 212px), calc(100vw - 50px)"
            />
          </div>
          <div className="mt-4 text-left">
            <h3 className="text-primaryBlack text-xl pb-4">{post.title}</h3>

            {post.body && (
              <div className="text-primaryGray text-sm line-clamp-3 mb-1">
                <PortableText value={post.body} />{' '}
              </div>
            )}

            {date && (
              <p className="text-xs text-right pt-4 text-primaryGray">
                {date && formatDate(date)}
              </p>
            )}
          </div>
        </a>
      )}
    </div>
  )
}
