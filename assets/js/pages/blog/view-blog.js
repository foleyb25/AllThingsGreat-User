parasails.registerPage('view-blog', {
    //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
    //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
    //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
    data: {
        blog: window.SAILS_LOCALS.blog,
        isRated: window.SAILS_LOCALS.isRated,
        isLoggedIn: window.SAILS_LOCALS.isLoggedIn,
    },
  
    //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
    //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
    //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
    beforeMount: function() {
      // Attach any initial data from the server.
      _.extend(this, SAILS_LOCALS);
    },
    mounted: async function(){
  
    },
  
    //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
    //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
    methods: {
        submitRating: async function() {
            var score = 0;
            $('#rating-container').find('input').each(function () {
                if(!this.checked && this.value == '1') {
                    score = 0;
                }
                if(this.checked) {
                    score = parseInt(this.value)
                    return false
                } 
            });
            const formData = new FormData()
            formData.append("userRating", score)
            formData.append('blogRating', this.blog.rating)
            formData.append('numberOfRatings', this.blog.numberOfRatings)
            formData.append('blogId', this.blog.id)
            try {
                await axios.put('/blog/submitrating', formData)
                location.reload()
                $("#rating-container :input").attr("disabled", this.isRated);
            } catch (err) {
                console.error(err.toString())
            }
        },
        clear: function() {
            $('#rating-container').find('input').each(function () {
                this.checked = false
            });
        },
        upvote: async function(commentid) {
            const formData = new FormData()
            formData.append('commentid', commentid)
            try {
                $("#upvote"+commentid).attr("disabled", true);
                await axios.put('/comment/upvote', formData)
                const downval = $("#upvotecount"+commentid).text();
                var val = parseInt(downval)
                val += 1
                $("#upvotecount"+commentid).text(val);
            } catch (err) {
                console.error(err.toString())
            }
        },
        downvote: async function(commentid) {
            const formData = new FormData()
            formData.append('commentid', commentid)
            try {
                $("#downvote"+commentid).attr("disabled", true);
                await axios.put('/comment/downvote', formData)
                const downval = $("#downvotecount"+commentid).text();
                var val = parseInt(downval)
                val += 1
                $("#downvotecount"+commentid).text(val);
            } catch (err) {
                console.error(err.toString())
            }
        }

    },
  });
  