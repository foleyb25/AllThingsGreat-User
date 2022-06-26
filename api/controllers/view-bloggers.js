module.exports = async function(req,res) {
    try {
        const writers = await Writer.find({isArchived:false}).sort('isSuperAdmin DESC')
        const sanitizedWriters = JSON.parse(JSON.stringify(writers))
    
        return res.view("pages/bloggers", {
          writers: sanitizedWriters,
        });
      } catch(err) {
        res.serverError(error.toString())
      }
};