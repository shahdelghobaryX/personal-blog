
function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <img
        src={post.image}
        alt={post.title}
        className="blog-image"
      />

      <div className="blog-content">
        <span className="blog-category">{post.category}</span>

        <h2>{post.title}</h2>

        <p>{post.description}</p>

        <div className="blog-date">{post.date}</div>
      </div>
    </article>
  );
}

export default BlogCard;
