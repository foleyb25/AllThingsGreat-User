parasails.registerPage('screenplay-review-details', {
    //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
    //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
    //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
    data: {
      screenplay: window.SAILS_LOCALS.screenplay,
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
          '--bg-gradient': 'linear-gradient(to bottom right, '+bgColor1+', '+bgColor2+')'
        }
      }
    
    },

    computed: {
      
    }
  });
  