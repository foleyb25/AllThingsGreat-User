module.exports = async function(req,res) {
    try {
        const blogs = await Blog.find({isReviewed: true, category: 'Entertainment'})
        .sort('updatedAt DESC')
        .populate('writer')
        const sanitizedBlogs = JSON.parse(JSON.stringify(blogs))
    
        return res.view("pages/homepage", {
          blogs: sanitizedBlogs,
          NFLScores: sails.config.globals.filteredNFL,
          MLBScores: sails.config.globals.filteredMLB,
          NHLScores: sails.config.globals.filteredNHL,
          NCAAFScores: sails.config.globals.filteredNCAAF,
          MLSScores: sails.config.globals.filteredMLS,
          NBAScores: sails.config.globals.filteredNBA,
        });
      } catch(err) {
        res.serverError(error.toString())
      }
};