module.exports = async function(req,res) {
    try {
        const blogs = await Blog.find({isReviewed: true, isArchived: false, category: 'Outdoors'})
        .sort('updatedAt DESC')
        .populate('writer')
        const sanitizedBlogs = JSON.parse(JSON.stringify(blogs))
    
        return res.view("pages/categories/outdoors", {
          blogs: sanitizedBlogs,
        });
      } catch(err) {
        res.serverError(error.toString())
      }
};