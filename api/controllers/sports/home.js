module.exports = async function(req,res) {
    try {
        const blogs = await Blog.find({isReviewed: true, isArchived: false, category: 'Sports'})
        .sort('createdAt DESC')
        .populate('writer')
        const sanitizedBlogs = JSON.parse(JSON.stringify(blogs))
    
        return res.view("pages/categories/sports", {
          blogs: sanitizedBlogs,
        });
      } catch(err) {
        res.serverError(error.toString())
      }
};