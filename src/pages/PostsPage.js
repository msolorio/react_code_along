import AllPosts from '../components/AllPosts';
import PostDetail from '../components/PostDetail';

function PostsPage(props) {
  return (
    <div className="row">
      <AllPosts allPosts={props.allPosts} />
      <PostDetail post={props.allPosts[0]} />
    </div>
  )
}

export default PostsPage;