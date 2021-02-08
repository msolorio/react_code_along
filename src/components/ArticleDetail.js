function ArticleDetail(props) {
  // console.log('*** props in ArticleDetail', props);

  return (
    <article className="col-md-6">
      <main className="card shadow-sm card-body">
      <h2 className="mb-4">{props.article.articleTitle}</h2>
        <p>
          <img className="float-left mr-4" src={props.article.imageUrl} alt=""/>
          {props.article.articleContent}
        </p>
      </main>
    </article>
  )
}

export default ArticleDetail;