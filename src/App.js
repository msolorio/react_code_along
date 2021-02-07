// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    // <h1>My First App Component!</h1>
    <div className="container">
      {/* NavBar */}
      <nav className="navbar row">
        <h1 className="">Tech Bits</h1>
        <ul className="navbar-nav flex-row">
          <li class="mr-4"><a href="/">Posts</a></li>
          <li><a href="/">Create Post</a></li>
        </ul>
      </nav>

      {/* Posts Page */}
      <div className="row">

        {/* All Posts */}
        <div className="col-md-6 mb-4">
          <h2 className="mb-4">All Posts</h2>
          <ul>
            <li className="card card-body mb-4 shadow-sm">Tech Giants Battle</li>
            <li className="card card-body mb-4 shadow-sm">Adjust Privacy Settings on Your Apps</li>
            <li className="card card-body mb-4 shadow-sm">Cool Tech Blog Post</li>
            <li className="card card-body mb-4 shadow-sm">Cool Tech Blog Post</li>
            <li className="card card-body mb-4 shadow-sm">Cool Tech Blog Post</li>
          </ul>
        </div>

        {/* PostDetail */}
        <div className="col-md-6">
          <main className="card shadow-sm card-body">
          <h2 className="mb-4">Tech Giants Battle</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis voluptatem, assumenda numquam quisquam a unde eius voluptas accusamus minus praesentium, facilis animi repudiandae. Non qui facilis debitis numquam nobis temporibus?</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis voluptatem, assumenda numquam quisquam a unde eius voluptas accusamus minus praesentium, facilis animi repudiandae. Non qui facilis debitis numquam nobis temporibus?</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis voluptatem, assumenda numquam quisquam a unde eius voluptas accusamus minus praesentium, facilis animi repudiandae. Non qui facilis debitis numquam nobis temporibus?</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis voluptatem, assumenda numquam quisquam a unde eius voluptas accusamus minus praesentium, facilis animi repudiandae. Non qui facilis debitis numquam nobis temporibus?</p>
          </main>
        </div>
      </div>
    </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
