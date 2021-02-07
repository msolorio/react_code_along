import AllPosts from '../components/AllPosts';
import PostDetail from '../components/PostDetail';

function PostsPage() {
  return (
    <div className="row">
      <AllPosts />
      <PostDetail />
    </div>
  );
}

export default PostsPage;
