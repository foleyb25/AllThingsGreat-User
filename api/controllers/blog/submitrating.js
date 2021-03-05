module.exports = async function(req,res) {
    const userRating = parseInt(req.param('userRating'))
    const blogRating = parseInt(req.param('blogRating'))
    var numberOfRatings = parseInt(req.param('numberOfRatings'))
    const blogId = req.param('blogId')
    const newRating = userRating+blogRating
    numberOfRatings += 1

    try {
        const blog = await Blog.findOne({id: blogId})
        await Blog.update({id: blogId}).set({numberOfRatings: numberOfRatings, rating: newRating, updatedAt: blog.updatedAt})
        await User.addToCollection(req.session.userId, 'ratedBlogs', blogId)
    } catch(error) {
        console.log(error)
    }
    res.end()
}