module.exports = async function(req, res) {
    console.log('User id to follow: ' + req.param('id'))

    // assocation
    const currentUserId = req.session.userId
    const userIdToFollow = req.param('id')

    await User.addToCollection(currentUserId, 'following', 
        userIdToFollow)

    // // first find all blog objects for user i am following
    // const blogsForUserImFollowing = await Blog.find({user: userIdToFollow})
    // blogsForUserImFollowing.forEach(async p => {
    //     console.log(p.text)
    //     await FeedItem.create({
    //         blog: p.id,
    //         blogOwner: userIdToFollow,
    //         user: currentUserId,
    //         blogCreatedAt: p.createdAt
    //     })
    //     console.log("Finished creating feed item")
    // })

    // gen feed items


    await User.addToCollection(userIdToFollow, 'followers', 
        currentUserId)

    res.end()
}