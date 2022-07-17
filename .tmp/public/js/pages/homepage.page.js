parasails.registerPage('homepage', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    blogs: window.SAILS_LOCALS.blogs,
    pageNum: window.SAILS_LOCALS.pageNum,
    moreBlogs: window.SAILS_LOCALS.moreBlogs,
    isMore: window.SAILS_LOCALS.isMore,
    screenplayReviewList: window.SAILS_LOCALS.screenplayList,
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

  search: async function() {
    const searchString = document.querySelector("input[name=search]").value
    const formData = new FormData()
    formData.append('searchString', searchString)
    try {
      const res = await axios.put('/entertainment/search', formData)
      this.movieList = res.data.movieList
  } catch (err) {
      console.error(err.toString())
  }
  }
  }
});
