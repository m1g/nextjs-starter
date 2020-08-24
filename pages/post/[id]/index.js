import Header from '../../../components/Header';

const Post = ({ title, body }) => (
  <>
    <Header />
    <h1>{title}</h1>
    <p>{body}</p>
  </>
);

Post.getInitialProps = async ({ query }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${query.id}`
  );
  const post = res.json();

  return post;
};

export default Post;
