// import logo from './logo.svg';
// import './App.css';
import NavBar from './components/NavBar';
import AllPosts from './components/AllPosts';
import PostDetail from './components/PostDetail';

function App() {
  return (
    // <h1>My First App Component!</h1>
    <div className="container">
      <NavBar />
      <div className="row">
        <AllPosts />
        <PostDetail />
      </div>
    </div>
  );
}

export default App;
