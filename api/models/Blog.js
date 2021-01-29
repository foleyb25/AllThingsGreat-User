module.exports = {

    customToJSON: function() {
        return {id: this.id, rating: this.rating,
            isReviewed: this.isReviewed,
            title: this.title,
            bodyHTML: this.bodyHTML,
            imageUrl: this.imageUrl,
            writer: this.writer,
            category: this.category,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            previewText: this.previewText,
            numComments: this.numComments,
            numberOfRatings: this.numberOfRatings,
          }
    },

    attributes: {
        numComments: {
            type: 'number', defaultsTo: 0
        },

        rating: {
            type: 'number', defaultsTo: 0
        },

        numberOfRatings: {
            type: 'number', defaultsTo: 0
        },

        isReviewed: {
            type: 'boolean', defaultsTo: false
        },

        title: {
            type: 'string', required: true
        },

        bodyHTML: {
            type: 'string', required: true
        },

        imageUrl: {
            type: 'string',
            required: true,
        },

        writer: {
            model: 'writer'
        },

        category: {
            type: 'string',
            defaultsTo: "AllThingsGreat",
        },
        
        previewText: {
            type: 'string',
            defaultsTo: '',
        },
    }
}