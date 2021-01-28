module.exports = async function(req, res) {
    console.log("Show blog details here")

    const blogId = req.param('id')
    const blog = await Blog.findOne({id: blogId})
        .populate('user')

    const comments = await Comment.find({
        blog: blogId
    }).sort('createdAt DESC').populate('user')

    comments.forEach(c => {
        c.fromNow = sails.moment(c.createdAt).fromNow()
    })

    blog.comments = comments

    if (req.wantsJSON) {
        return res.send(blog)
    }

    res.view('pages/blog/index', {
        layout: 'layouts/nav-layout',
        blog: JSON.parse(JSON.stringify(blog))
    })
}