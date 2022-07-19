module.exports = async function (req,res) {
    var searchString = req.param('searchString');
    searchString = searchString.replace(' ', '%20')
    //TODO: Replace spaces in search string


    try {
        
      const movieList = await sails.helpers.searchmovie(searchString);
      return res.send({
        movieList: movieList.results,
      });
    } catch(err) {
      res.serverError(err.toString())
    }
  };