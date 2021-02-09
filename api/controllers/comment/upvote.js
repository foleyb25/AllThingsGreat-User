module.exports = async function(req, res) {
    const commentid = req.param('commentid')

    try {
        const comment = await Comment.findOne({id: commentid})
        await Comment.updateOne({id: commentid}).set({upVotes: comment.upVotes+1})
    
        res.end()
    } catch(err) {
        res.serverError(err.toString())
    }
}