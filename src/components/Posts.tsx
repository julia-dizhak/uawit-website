import Container from './Container'
import Card from './Card'
import { PostType } from '~/lib/sanity.interfaces'

export const Posts = ({ posts }) => {
  return (
    <Container>
      {posts.map((post: PostType) => (
        <Card key={post._id} post={post} />
      ))}
    </Container>
  )
}
