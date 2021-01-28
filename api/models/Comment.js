module.exports = {
    attributes: {
        text: {
            type: 'string', required: true
        },

        Blog: {
            model: 'blog', required: true,
        },

        user: {
            model: 'user', required: true,
        }
    }
}