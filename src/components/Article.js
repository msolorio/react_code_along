function Article(props) {
  return (
    <li
      className="card-body card mb-4"
      key={props.article.id}
      onClick={() => props.updateCurrentArticleIdx(props.article.id)}
    >
      {props.article.articleTitle}
    </li>
  );
}

export default Article;