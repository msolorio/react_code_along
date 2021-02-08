// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import ArticlesPage from './pages/ArticlesPage';
// import CreateArticlePage from './pages/CreateArticlePage';
import articlesData from './articlesData';

class App extends React.Component {
  state = {
    articlesData: articlesData,
    currentArticleIdx: 0
  }

  updateCurrentArticleIdx = (articleIdx) => {
    // console.log('*** called update function: ', articleIdx);
    this.setState({ currentArticleIdx: articleIdx });
  }
  
  render() {
    const currentArticle = this.state.articlesData[this.state.currentArticleIdx];

    return (
      // <h1>My First App Component!</h1>
      <div className="container">
        <NavBar />
        <ArticlesPage
          allArticles={this.state.articlesData}
          currentArticle={currentArticle}
          updateCurrentArticleIdx={this.updateCurrentArticleIdx}
        />
        {/* <CreateArticlePage /> */}
      </div>
    );
  }
}

export default App;
