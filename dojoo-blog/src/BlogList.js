const BlogList = (props) => {
  // props: way of reusing other components in other components
  const blogs = props.blogs
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  )
}
export default BlogList
