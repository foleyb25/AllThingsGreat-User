module.exports = async function (req,res) {
  try {
    const blogs = await Blog.find({isReviewed: true})
    .sort('createdAt DESC')
    .populate('writer')
    const sanitizedBlogs = JSON.parse(JSON.stringify(blogs))

    const percentage = 50;

    //compute pctg of blogs here and pass it to homepage

    return res.view("pages/homepage", {
      blogs: sanitizedBlogs,
      pct: percentage,
    });
  } catch(err) {
    res.serverError(error.toString())
  }
};