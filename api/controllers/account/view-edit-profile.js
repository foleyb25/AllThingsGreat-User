module.exports = async function(req, res) {

  const currentUser = await User.findOne({id: req.session.userId})
      .populate('following').populate('followers')
  
  if (req.wantsJSON) {
      return res.send(currentUser)
  }
  const email = currentUser.emailAddress
  // customToJSON
  const sanitizedUser = JSON.parse(JSON.stringify(currentUser))
  sanitizedUser.emailAddress = email

  res.view('pages/user/profile', {
      user: sanitizedUser
  })
}