module.exports = async function (req,res) {
    //parseInt(req.param('userRating'))
    console.log(req.param('pageNum'))
    const pageNum = req.param('pageNum');
    try {
      const blogs = await Blog.find({isReviewed: true, isArchived: false})
      .sort('updatedAt DESC')
      .populate('writer')
      .paginate({page:pageNum, limit:25})
      const sanitizedBlogs = JSON.parse(JSON.stringify(blogs))
      //compute pctg of blogs here and pass it to homepage
      const isMore = sanitizedBlogs.length == 25 ? true : false
      return res.send({
        moreBlogs: sanitizedBlogs,
        pageNum: pageNum,
        isMore: isMore
      });
      // return res.view("pages/homepage", {
      //   moreBlogs: sanitizedBlogs,
      //   pageNum: pageNum,
      // });
    } catch(err) {
      res.serverError(err.toString())
    }
  };