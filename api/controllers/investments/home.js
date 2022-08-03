module.exports = async function(req,res) {
  var mcache = require('memory-cache')
  let cacheKey = "cacheKey"
  var alternativefeargreedData
  var cnnfeargreedData
  var feargreedData
  var cacheDuration = 60 //1 minute
    try {
        const blogs = await Blog.find({isReviewed: true, isArchived: false, category: 'Investments'})
        .sort('updatedAt DESC')
        .populate('writer')
        const sanitizedBlogs = JSON.parse(JSON.stringify(blogs))
        let cachedAPIReq = mcache.get(cacheKey)
        if (cachedAPIReq) {
          feargreedData = cachedAPIReq
        } else {
          alternativefeargreedData = await sails.helpers.alternative.getfeargreed()
          cnnfeargreedData = await sails.helpers.cnn.getfeargreed()
          feargreedData = {crypto: alternativefeargreedData, stocks: cnnfeargreedData}
          feargreedData.lastUpdated = Date.now()
          feargreedData.nextUpdate = Date.now() + (cacheDuration*60_000)
          
          if (feargreedData.crypto.value > -1 && feargreedData.crypto.value < 16) {
            feargreedData.cryptoIndicator = "Extreme Fear"
            feargreedData.cryptoIndicatorColor = "red"
          } else if (feargreedData.crypto.value > 15 && feargreedData.crypto.value < 41) {
            feargreedData.cryptoIndicator = "Fear"
            feargreedData.cryptoIndicatorColor = "orange"
          } else if (feargreedData.crypto.value > 40 && feargreedData.crypto.value < 61) {
            feargreedData.cryptoIndicator = "Neutral"
            feargreedData.cryptoIndicatorColor = "yelow"
          } else if (feargreedData.crypto.value > 60 && feargreedData.crypto.value < 86) {
            feargreedData.cryptoIndicator = "Greed"
            feargreedData.cryptoIndicatorColor = "green"
          } else if (feargreedData.crypto.value > 85 && feargreedData.crypto.value < 101) {
            feargreedData.cryptoIndicator = "Extreme Greed"
            feargreedData.cryptoIndicatorColor = "darkgreen"
          }

          if (feargreedData.stocks.fgi.now.value > -1 && feargreedData.stocks.fgi.now.value < 16) {
            feargreedData.stockIndicator = "Extreme Fear"
            feargreedData.stockIndicatorColor = "red"
          } else if (feargreedData.stocks.fgi.now.value > 15 && feargreedData.stocks.fgi.now.value < 41) {
            feargreedData.stockIndicator = "Fear"
            feargreedData.stockIndicatorColor = "orange"
          } else if (feargreedData.stocks.fgi.now.value > 40 && feargreedData.stocks.fgi.now.value < 61) {
            feargreedData.stockIndicator = "Neutral"
            feargreedData.stockIndicatorColor = "yellow"
          } else if (feargreedData.stocks.fgi.now.value > 60 && feargreedData.stocks.fgi.now.value < 86) {
            feargreedData.stockIndicator = "Greed"
            feargreedData.stockIndicatorColor = "green"
          } else if (feargreedData.stocks.fgi.now.value > 85 && feargreedData.stocks.fgi.now.value < 101) {
            feargreedData.stockIndicator = "Extreme Greed"
            feargreedData.stockIndicatorColor = "darkgreen"
          }

          mcache.put(cacheKey, feargreedData, cacheDuration * 60_000)
        }
        feargreedData.last_updated_moment = sails.moment(feargreedData.lastUpdated).fromNow()
        feargreedData.time_until_update_moment = sails.moment(feargreedData.nextUpdate).fromNow()
        
        return res.view("pages/categories/investments", {
          blogs: sanitizedBlogs,
          feargreedData: feargreedData,
        });
      } catch(err) {
        res.serverError(error.toString())
      }
};