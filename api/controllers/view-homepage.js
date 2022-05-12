module.exports = async function (req,res) {
  try {
    const blogs = await Blog.find({isReviewed: true, isArchived: false})
    .sort('createdAt DESC')
    .populate('writer')
    .paginate(0,25)
    const sanitizedBlogs = JSON.parse(JSON.stringify(blogs))
    //compute pctg of blogs here and pass it to homepage
    const isMore = sanitizedBlogs.length == 25 ? true : false
    return res.view("pages/homepage", {
      blogs: sanitizedBlogs,
      pageNum: 0,
      isMore: isMore
    });
  } catch(err) {
    res.serverError(error.toString())
  }
};