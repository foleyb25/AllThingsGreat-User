module.exports = async function(req, res) {
    const blogId = req.param('id')
    try {
        await FeedItem.update({
            blog: blogId,
            user: req.session.userId
        }).set({hasLiked: false})

        await Like.destroy({
            blog: blogId,
            user: req.session.userId
        })

        const numLikes = await Like.count({blog: blogId})

        await Blog.update({
            id: blogId
        }).set({numLikes: numLikes})

        res.end()
    } catch (err) {
        res.serverError(err.toString())
    }
}