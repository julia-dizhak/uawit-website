import Container from '../common/Container'
import PostCard from './PostCard'
import { PostType, PostsType } from '~/lib/sanity.queries/posts/types'
import Image from 'next/image'
import decorativeImage from '~/assets/images/bg_image_for_news.png'

type Props = {
  posts: PostsType
}

export const Posts = ({ posts }: Props) => {
  return (
    <div className="bg-backgroundColorGray relative" id="news">
      <div className="absolute top-0 left-0 z-1 invisible md:visible">
        <div className="w-[200]px h-[150px]">
          <Image
            src={decorativeImage}
            alt="top decorative image top"
            width={200}
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
          {posts.map((post: PostType) => (
            <PostCard
              key={post._id}
              post={post}
              className="block m-auto w-1/4 p-4"
            />
          ))}
        </div>
      </Container>
    </div>
  )
}
