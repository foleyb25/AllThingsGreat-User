module.exports = async function(req,res) {
    try {
        const writers = await Writer.find({})
        const sanitizedWriters = JSON.parse(JSON.stringify(writers))
    
        return res.view("pages/aboutus", {
          writers: sanitizedWriters,
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