import Container from './Container'
import Card from './Card'
import { PostType, PostsType } from '~/lib/sanity.queries/posts/types'

type Props = {
  posts: PostsType
}

export const Posts = ({ posts }: Props) => {
  return (
    <Container>
      {posts.map((post: PostType) => (
        <Card key={post._id} post={post} />
      ))}
    </Container>
  )
}
