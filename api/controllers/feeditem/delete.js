module.exports = async function(req, res) {
    const blogId = req.param('id')

    try {
        await FeedItem.destroy({
            blog: blogId, 
            user: req.session.userId
        })
        res.end()
    } catch (err) {
        res.serverError(err.toString())
    }
}