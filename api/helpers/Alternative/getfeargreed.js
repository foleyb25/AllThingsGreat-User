module.exports = {
    friendlyName: 'getfeargreedalternative',
    description: 'Calls Alternative.me api to get fear greed data',
  
  
    exits: {
  
      success: {
        description: 'Success',
      },
  
      badUpload: {
        description: 'API call to alternative failed'
      }
  
    },
  
  
    fn: async function (inputs, exits) {
        var _ = require("underscore")
        const axios = require("axios");
        const options = {
            method: 'GET',
            url: 'https://api.alternative.me/fng/',
            headers: {
            }
          };
          axios.request(options).then(function (response) {
              return exits.success(response.data.data[0])
          }).catch(function (error) {
              console.error(error);
          });
        
    
      }
  };