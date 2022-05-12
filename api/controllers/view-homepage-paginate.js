module.exports = async function (req,res) {
    const pageNum = req.param('pageNum');
    try {
      const blogs = await Blog.find({isReviewed: true, isArchived: false})
      .sort('createdAt DESC')
      .populate('writer')
      .paginate(pageNum, 25)
      const sanitizedBlogs = JSON.parse(JSON.stringify(blogs))
      //compute pctg of blogs here and pass it to homepage
      const isMore = sanitizedBlogs.length == 25 ? true : false
      return res.send({
        moreBlogs: sanitizedBlogs,
        pageNum: pageNum,
        isMore: isMore
      });
    } catch(err) {
      res.serverError(err.toString())
    }
  };