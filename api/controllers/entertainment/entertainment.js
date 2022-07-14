module.exports = async function(req,res) {
    try {
        const blogs = await Blog.find({isReviewed: true, isArchived: false, category: 'Entertainment'})
        .sort('updatedAt DESC')
        .populate('writer')
        const sanitizedBlogs = JSON.parse(JSON.stringify(blogs))

        const screenplay_result = await Screenplay.find({})
      .sort('createdAt DESC')
      .populate('reviews')
      .paginate(0,20)
      .then(async function(screenplays) {
            var review_ids = []
        for(var i  in screenplays) {
          for(var x in screenplays[i].reviews)
            review_ids.push(_.pluck(screenplays[i].reviews, 'id')[x])
        }
            
        var scrn_play_reviews = await Screenplayreview.find({
            id: review_ids
                //_.pluck: Retrieves the value of a 'user' property from all elements in the post.comments collection.
            })
            .populate('writer')
            .then(function(scrn_play_reviews) {
            return scrn_play_reviews;
            });
        return [screenplays, scrn_play_reviews]
        
      })
      .spread(function(screenplays, scrn_play_reviews) {

        scrn_play_reviews = _.indexBy(scrn_play_reviews, 'id');
        
        for(var i in screenplays) {
            //_.indexBy: Creates an object composed of keys generated from the results of running each element of the collection through the given callback. The corresponding value of each key is the last element responsible for generating the key
            screenplays[i].reviews = _.map(screenplays[i].reviews, function(review) {
            review.writer = scrn_play_reviews[review.id].writer;
            return review;
          });
        }
        
        return screenplays;

        
      })
      .catch(function(err) {
        return res.serverError(err);
      });

        const sanitizedScreenplays = JSON.parse(JSON.stringify(screenplay_result))

        return res.view("pages/categories/entertainment", {
          blogs: sanitizedBlogs,
          navScreenplays: sanitizedScreenplays,
        });
      } catch(err) {
        res.serverError(error.toString())
      }
};