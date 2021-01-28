module.exports = async function(req, res) {
    const likes = await Like.find({blog: req.param('id')})
        .populate('user')
    res.send(likes)
}