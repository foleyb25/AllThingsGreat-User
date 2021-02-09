module.exports = async function(req, res) {
    const blogId = req.param('id')
    console.log("Create comment here: " + blogId)

    
    try {
        // store a comment in our database
        await Comment.create({
            text: req.body.comment,
            blog: blogId,
            user: req.session.userId
        })
    
        const blog = await Blog.findOne({id: blogId})
    
        const comments = await Comment.find({
            blog: blogId
        }).sort('updatedAt DESC').populate('user')
        const sanitizedComments = JSON.parse(JSON.stringify(comments))
        await Blog.updateOne({id: blogId})
        .set({
          numComments: sanitizedComments.length,
          updatedAt: blog.updatedAt
        });
    
        res.redirect('/blog/view/' + blogId)
    } catch(err) {
        res.serverError(err.toString())
    }
    
    
}