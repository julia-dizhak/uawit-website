import Container from './Container'
import Card from './Card'
import { PostType, PostsType } from '~/lib/sanity.queries/posts/types'

type Props = {
  posts: PostsType
}

export const Posts = ({ posts }: Props) => {
  return (
    <Container className="text-center">
      <div className="flex flex-wrap justify-center text-center align-center">
        {posts.map((post: PostType) => (
          <Card key={post._id} post={post} className="block m-auto w-1/4 p-4" />
        ))}
      </div>
    </Container>
  )
}
