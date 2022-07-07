module.exports = {

    customToJSON: function() {
     const createdFromNow = sails.moment(this.createdAt).fromNow()
        return {id: this.id,
          createdFromNow: createdFromNow,
            score: this.score,
            blog_url: this.blog_url,
            writer: this.writer,
            screenplay: this.screenplay,
          }
    },

    attributes: {
       writer: {
            model: 'writer',
       },

       screenplay: {
            model: 'screenplay',
       },

       score: {
            type: 'number'
       },

       blog_url: {
            type: 'string'
       }
    }
}