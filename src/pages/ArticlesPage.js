import ArticlesList from '../components/ArticlesList';
import ArticleDetail from '../components/ArticleDetail';

function ArticlesPage(props) {
  if (props.allArticles.length === 0) {
    return <p>Please create an article ...</p>;
  }

  return (
    <div className="row">
      <ArticlesList 
        allArticles={props.allArticles} 
        updateCurrentArticleIdx={props.updateCurrentArticleIdx}
      />
      <ArticleDetail article={props.currentArticle} />
    </div>
  )
}

export default ArticlesPage;