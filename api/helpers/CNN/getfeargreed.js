module.exports = {
    friendlyName: 'getfeargreedcnn',
    description: 'Calls Rapid api to get fear greed data',
  
  
    exits: {
  
      success: {
        description: 'Success',
      },
  
      badUpload: {
        description: 'API call to rapid api cnn fear greed failed'
      }
  
    },
  
  
    fn: async function (inputs, exits) {
        var _ = require("underscore")
        const axios = require("axios");
        const options = {
            method: 'GET',
            url: 'https://fear-and-greed-index.p.rapidapi.com/v1/fgi',
            headers: {
              'X-RapidAPI-Key': '0378cb559emsha92428365269fe8p1f4409jsnfb71711af35c',
              'X-RapidAPI-Host': 'fear-and-greed-index.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
            return exits.success(response.data)
          }).catch(function (error) {
            console.error(error);
          });
        
    
      } 
  };