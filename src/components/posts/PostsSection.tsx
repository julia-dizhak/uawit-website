import PostCard from './PostCard'
import SecondaryButton from '../buttons/SecondaryButton'
import decorativeImage from '~/assets/images/bg_image_for_news.png'
import Image from 'next/image'
import Container from '../common/Container'
import { PortableText } from '@portabletext/react'
import { useState } from 'react'
import { PostsSectionType } from '~/lib/sanity.queries/postsSection/types'
import { PostType, PostsType } from '~/lib/sanity.queries/posts/types'

interface PostsSectionProps {
  section: PostsSectionType
  posts: PostsType
}

const DISPLAY_POSTS_COUNT = 4

export default function PostsSection({ section, posts }: PostsSectionProps) {
  const { postsTitle, postsDescription, moreButtonText } = section

  const [displayCount, setDisplayCount] = useState(DISPLAY_POSTS_COUNT)

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + DISPLAY_POSTS_COUNT)
  }

  const showLoadMoreButton = posts.length > displayCount

  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date || a._createdAt).getTime()
    const dateB = new Date(b.date || b._createdAt).getTime()
    return dateB - dateA
  })

  const formattedPosts = [...sortedPosts].slice(0, displayCount)

  return (
    <div
      id="news"
      className="bg-backgroundColorGray relative rounded-[28px] -my-6"
    >
      <div className="absolute top-[10px] left-0 z-1 invisible md:visible">
        <div className="w-[200]px h-[150px]">
          <Image
            src={decorativeImage}
            alt="top decorative image"
            width={100}
            height={100}
          />
        </div>
      </div>

      <Container className="text-center pt-[100px] relative">
        {postsTitle && (
          <h2 className="font-medium text-center text-[48px] text-primaryBlack ">
            {postsTitle}
          </h2>
        )}

        {postsDescription && (
          <div className="text-primaryGray mt-4 max-w-5xl m-auto text-center mb-10">
            {postsDescription && <PortableText value={postsDescription} />}
          </div>
        )}

        <div className="flex flex-wrap justify-center text-center align-center">
          {formattedPosts.map((post: PostType) => (
            <PostCard
              key={post._id}
              post={post}
              className="block m-auto w-1/4 p-4"
            />
          ))}
        </div>

        {showLoadMoreButton && (
          <div className="text-center pt-20">
            <SecondaryButton
              buttonText={moreButtonText}
              btnClasses="text-primaryBlue border-primaryBlue px-4 py-2"
              handleClick={handleLoadMore}
            />
          </div>
        )}
      </Container>
    </div>
  )
}
