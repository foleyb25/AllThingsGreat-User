parasails.registerPage('investments', {
    //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
    //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
    //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
    data: {
      blogs: window.SAILS_LOCALS.blogs,
      pageNum: window.SAILS_LOCALS.pageNum,
      moreBlogs: window.SAILS_LOCALS.moreBlogs,
      isMore: window.SAILS_LOCALS.isMore,
      feargreedData: window.SAILS_LOCALS.feargreedData,
      showDetails: false,
      shouldShowInfoModal: false,
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
      toggleDetails: async function() {
        this.showDetails = !this.showDetails
      },

      toggleModal: async function() {
        this.shouldShowInfoModal = !this.shouldShowInfoModal
      },

    addkeyframes(feargreedData) {
      const bigPointerAngle = feargreedData.crypto.value * .01 * 180
      const littlePointerAngle = feargreedData.stocks.fgi.now.value * .01 * 180

      return {
        '--big-pointer-deg': bigPointerAngle+'deg',
        '--little-pointer-deg': littlePointerAngle+'deg'
      }
    }

    },

    computed: {
    }
  });
  