function AllPosts(props) {
  // console.log('*** props in AllPosts', props);

  function renderPosts(posts) {
    return posts.map((post) => {
      return <li className="card-body card mb-4" key={post.id}>{post.postTitle}</li>
    });
  }

  return (
    <div className="col-md-6 mb-4">
      <h2 className="mb-4">All Posts</h2>
      <ul>
        {renderPosts(props.allPosts)}
      </ul>
    </div>
  );
}

export default AllPosts;
