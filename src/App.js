// import logo from './logo.svg';
// import './App.css';
import NavBar from './components/NavBar';
import PostsPage from './pages/PostsPage';
// import CreatePostPage from './pages/CreatePostPage';
import postsData from './postData';

function App() {
  // console.log('****', postsData);
  return (
    // <h1>My First App Component!</h1>
    <div className="container">
      <NavBar />
      <PostsPage allPosts={postsData} />
      {/* <CreatePostPage /> */}
    </div>
  );
}

export default App;
