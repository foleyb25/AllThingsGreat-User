module.exports = {
    attributes: {
        blog: {
            model: 'blog', required: true
        },

        blogOwner: {
            model: 'user'
        },

        user: {
            model: 'user'
        },

        blogCreatedAt: {
            type: 'number'
        },
        
        hasLiked: {
            type: 'boolean',
            defaultsTo: false
        }

        // additional props that I'll show you later
    }
}