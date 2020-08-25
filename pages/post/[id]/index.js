const Post = ({ title, body }) => (
  <>
    <h1>{title}</h1>
    <p>{body}</p>
  </>
);

// Post.getInitialProps = async ({ query }) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${query.id}`
//   );
//   const post = res.json();

//   return post;
// };

export default Post;
