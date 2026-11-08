
import { useState } from "react";
import Header from "./components/Header";
import BlogCard from "./components/BlogCard";
import CategoryFilter from "./components/CategoryFilter";
import Pagination from "./components/Pagination";
import posts from "./data/posts";
import "./App.css";

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;

  const categories = ["All", "Tech", "Travel", "Food"];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;

    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;

  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  function handleCategoryChange(category) {
    setActiveCategory(category);
    setCurrentPage(1);
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  }

  return (
    <>
      <Header />

      <main id="home" className="main-container">
        <section className="hero-section">
          <p className="hero-label">WELCOME TO MY BLOG</p>
          <h1>Stories, Ideas & Inspiration.</h1>
          <p>
            A little space on the internet where I share my thoughts,
            experiences, and discoveries.
          </p>
        </section>

        <section id="blog" className="blog-section">
          <div className="section-heading">
            <div>
              <p className="section-label">EXPLORE</p>
              <h2>Latest Articles</h2>
            </div>

            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
          </div>

          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />

          <div className="blog-grid">
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))
            ) : (
              <p className="no-posts">
                No articles found. Try another search!
              </p>
            )}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />

          <p className="results-count">
            Showing {currentPosts.length} of {filteredPosts.length} articles
          </p>
        </section>
      </main>

      <footer id="about" className="footer">
        <h2>The Daily Journal.</h2>
        <p>Sharing thoughts, one story at a time.</p>
        <p>© 2026 The Daily Journal. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
