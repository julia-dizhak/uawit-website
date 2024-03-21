import Container from './Container'
import Card from './Card'
import { PostType, PostsType } from '~/lib/sanity.queries/posts/types'

type Props = {
  posts: PostsType
}

export const Posts = ({ posts }: Props) => {
  return (
    <Container className="text-center">
      <h2 className="font-bold text-4xl">News</h2>
      <p className=" mt-4  text-lg">News some more description here ...</p>
      <div className="flex flex-wrap justify-center text-center align-center">
        {posts.map((post: PostType) => (
          <Card key={post._id} post={post} className="block m-auto w-1/4 p-4" />
        ))}
      </div>
    </Container>
  )
}
