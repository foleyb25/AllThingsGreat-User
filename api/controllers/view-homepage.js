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
      isMore: isMore,
      summary: "summary",
      ogTitle: "This is All Things Great",
      ogDesc: "All Things Great is a multimedia entertainment company based in Montana. Bring on the challenges and no laws apply",
      ogImage: "https://all-things-great.s3.us-west-2.amazonaws.com/AllThingsGreat.png",
      ogSite: "@allthingsgrea_",
      ogUrl: "https://allthingsgreat.com",
      ogCreator: "@allthingsgrea_",

    });
  } catch(err) {
    res.serverError(error.toString())
  }
};