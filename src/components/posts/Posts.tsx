import Container from '../common/Container'
import PostCard from './PostCard'
import { PostType, PostsType } from '~/lib/sanity.queries/posts/types'
import Image from 'next/image'
import decorativeImage from '~/assets/images/bg_image_for_news.png'
import SecondaryButton from '../buttons/SecondaryButton'
import { useState } from 'react'

type Props = {
  posts: PostsType
}

const DISPLAY_POSTS_COUNT = 4

export const Posts = ({ posts }: Props) => {
  const [displayCount, setDisplayCount] = useState(DISPLAY_POSTS_COUNT)

  const handleLoadMoreNews = () => {
    setDisplayCount((prevCount) => prevCount + DISPLAY_POSTS_COUNT)
  }

  const showLoadMoreButton = posts.length > displayCount

  const sortedPosts = [...posts].slice(0, displayCount)

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
        <h2 className="font-medium text-primaryBlack text-6xl">News</h2>
        <p className="text-center mt-4 mb-4 text-lg text-primaryGray max-w-5xl m-auto">
          Read the latest news, discover stories from the world of IT
        </p>
        <div className="flex flex-wrap justify-center text-center align-center">
          {sortedPosts.map((post: PostType) => (
            <PostCard
              key={post._id}
              post={post}
              className="block m-auto w-1/4 p-4"
            />
          ))}
        </div>
        <div className="text-center pt-20">
          {showLoadMoreButton && (
            <SecondaryButton
              buttonText={'See more news'}
              btnClasses="text-primaryBlue border-primaryBlue px-4 py-2"
              handleClick={handleLoadMoreNews}
            />
          )}
        </div>
      </Container>
    </div>
  )
}
