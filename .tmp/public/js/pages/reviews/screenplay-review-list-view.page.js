parasails.registerPage('screenplay-review-list-view', {
    //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
    //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
    //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
    data: {
      screenplays: window.SAILS_LOCALS.screenplays,
      navScreenplays: window.SAILS_LOCALS.navScreenplays,
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
      paginate: async function()  {
        console.log("Paginate")
        const nextPage = this.pageNum + 1
        const formData = new FormData()
        formData.append('pageNum', nextPage)
        try {
            const res = await axios.put('/paginate', formData)
            this.isMore = res.data.isMore
            this.blogs.push.apply(this.blogs, res.data.moreBlogs)
            this.pageNum = nextPage
        } catch (err) {
            console.error(err.toString())
        }
    },

    addkeyframes(review) {
      const score = review.score*.1*180
      var bgColor1
      var bgColor2
      if (review.score == 10) {
        bgColor1 = '#b9f2ff'
        bgColor2 = '#BC64E3'
      }else if(review.score >= 8 && review.score < 10) {
        bgColor1 = 'green'
        bgColor2 = 'green'
      } else if (review.score < 8 && review.score >= 6) {
        bgColor1 = 'yellow'
        bgColor2 = 'yellow'
      } else {
        bgColor1 = 'red'
        bgColor2 = 'red'
      }
      return {
        '--deg': score+'deg',
        '--bg-gradient': 'linear-gradient(to bottom right, '+bgColor1+', '+bgColor2+')',
        '--nav-bg-gradient': 'linear-gradient(to bottom right, '+bgColor1+', '+bgColor2+')',
        '--nav-deg': score+'deg'
      }
    }

    
    },

    computed: {
      
    }
  });
  