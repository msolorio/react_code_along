function PostDetail(props) {
  console.log('*** props in PostDetail', props);

  return (
    <div className="col-md-6">
      <main className="card shadow-sm card-body">
      <h2 className="mb-4">{props.post.postTitle}</h2>
        <p>
          <img className="float-left mr-4" src={props.post.imageUrl} alt=""/>
          {props.post.postContent}
        </p>
      </main>
    </div>
  )
}

export default PostDetail;