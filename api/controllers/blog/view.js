module.exports = async function(req,res) {
    const blogId = req.param("blogId")
    var isRated = false;
    var loggedIn = false
    try {
      const blog = await Blog.findOne({id: blogId}).populate("writer")
      if(blog.isArchived) {
        return res.view("404")
      }
      const sanitizedBlog = JSON.parse(JSON.stringify(blog))
      const comments = await Comment.find({
          blog: blogId
      }).sort('updatedAt DESC').populate('user')
      const sanitizedComments = JSON.parse(JSON.stringify(comments))
      sanitizedBlog.comments = sanitizedComments
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

      await Blog.updateOne({id: blogId}).set({views: sanitizedBlog.views+1, updatedAt: sanitizedBlog.updatedAt})

      // res.set("Content-Type", 'text/html')

      if (req.wantsJSON) {
        return res.send(blog, isRated, isLoggedIn)
      }

      return res.view("pages/blog/view", {
          blog: sanitizedBlog,
          isRated: isRated,
          isLoggedIn: loggedIn,
          summary: "summary",
          ogTitle: sanitizedBlog.title,
          ogDesc: sanitizedBlog.previewText,
          ogImage: sanitizedBlog.imageUrl,
          ogSite: "@allthingsgrea_",
          ogUrl: "https://allthingsgreat.com/blog/view/"+blog.blogId,
          ogCreator: "@allthingsgrea_",
      });
      
    } catch(err) {
        res.serverError(err.toString())
    }
  };