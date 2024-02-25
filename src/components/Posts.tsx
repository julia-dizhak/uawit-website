import Container from './Container';
import Card from './Card';

export const Posts = ({posts}) => {
  return (
    <Container>
        {posts.length && posts.map((post) => <Card key={post._id} post={post} /> )}
    </Container>
  );
};

