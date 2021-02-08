import Article from './Article';

function AllArticles(props) {
  // console.log('*** props in AllArticles', props);

  function renderArticles(articles) {
    return articles.map((article) => {
      return (
        <Article
          key={article.id}
          article={article} 
          updateCurrentArticleIdx={props.updateCurrentArticleIdx}
        />
      );
    });
  }

  return (
    <div className="col-md-6 mb-4">
      <h2 className="mb-4">All Articles</h2>
      <ul>
        {renderArticles(props.allArticles)}
      </ul>
    </div>
  );
}

export default AllArticles;
