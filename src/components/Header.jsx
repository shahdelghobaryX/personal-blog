
function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="blog-logo">The Daily Journal<span>.</span></h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#blog">Articles</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
