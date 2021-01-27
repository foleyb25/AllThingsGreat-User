module.exports = async function(req, res) {
    console.log("123List out all users in system")
    // Waterline ORM tool

    const allUsers = await User.find()
    res.send(allUsers)
    // res.end()
}