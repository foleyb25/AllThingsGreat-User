module.exports = async function(req,res) {
    const blogId = req.param("blogId")
  
    try {
      const blog = await Blog.findOne({id: blogId}).populate("writer")
      const sanitizedBlog = JSON.parse(JSON.stringify(blog))
      return res.view("pages/blog/view", {
          blog: sanitizedBlog,
      });
    } catch(err) {
        res.serverError(err.toString())
    }
  };