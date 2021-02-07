function NavBar() {
  return (
    <nav className="navbar row">
      <h1 className="">Tech Bits</h1>
      <ul className="navbar-nav flex-row">
        <li class="mr-4"><a href="/">Posts</a></li>
        <li><a href="/">Create Post</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;