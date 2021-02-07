// import logo from './logo.svg';
// import './App.css';
import NavBar from './components/NavBar';
import AllPosts from './components/AllPosts';
import PostDetail from './components/PostDetail';
import postData from './postData';

function App() {
  // console.log('****', postData);
  return (
    // <h1>My First App Component!</h1>
    <div className="container">
      <NavBar />
      <div className="row">
        <AllPosts allPosts={postData} />
        <PostDetail post={postData[0]} />
      </div>
    </div>
  );
}

export default App;
