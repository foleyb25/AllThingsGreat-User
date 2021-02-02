module.exports = async function(req,res) {
    const blogId = req.param("blogId")
    var isRated = false;
    var loggedIn = false
    try {
      const blog = await Blog.findOne({id: blogId}).populate("writer")
      const sanitizedBlog = JSON.parse(JSON.stringify(blog))
      const comments = await Comment.find({
          blog: blogId
      }).sort('createdAt DESC').populate('user')
      const sanitizedComments = JSON.parse(JSON.stringify(comments))
      sanitizedBlog.comments = sanitizedComments
      await Blog.updateOne({id: blogId})
      .set({
        numComments: sanitizedComments.length
      });
      if(req.session.userId) {
        loggedIn = true
        const userWithBlog = await User.findOne({id: req.session.userId}).populate('ratedBlogs', {
          where: {
              id: blogId
          }
        })

        if(userWithBlog.ratedBlogs.length > 0) {
          isRated = true
        }
      }
      
      return res.view("pages/blog/view", {
          blog: sanitizedBlog,
          isRated: isRated,
          isLoggedIn: loggedIn
      });
    } catch(err) {
        res.serverError(err.toString())
    }
  };