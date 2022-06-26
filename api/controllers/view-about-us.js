module.exports = async function(req,res) {
    try {
        const writers = await Writer.find({})
        const sanitizedWriters = JSON.parse(JSON.stringify(writers))
    
        return res.view("pages/aboutus", {
          writers: sanitizedWriters,
        });
      } catch(err) {
        res.serverError(error.toString())
      }
      
};