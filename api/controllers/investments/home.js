module.exports = async function(req,res) {
    try {
        const blogs = await Blog.find({isReviewed: true, isArchived: false, category: 'Investments'})
        .sort('updatedAt DESC')
        .populate('writer')
        const sanitizedBlogs = JSON.parse(JSON.stringify(blogs))
    
        return res.view("pages/categories/investments", {
          blogs: sanitizedBlogs,
        });
      } catch(err) {
        res.serverError(error.toString())
      }
};