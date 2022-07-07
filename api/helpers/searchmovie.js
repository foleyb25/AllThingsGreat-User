const { globals } = require("../../config/globals");

module.exports = {
    friendlyName: 'getscores',
    description: 'Get scores via api call to rapidAPI sportspage feeds',
  
    inputs: {
      search_string: {
        type: 'ref',
        description: 'id of data to persist'
      }
    },
  
  
    exits: {
  
      success: {
        description: 'Success',
      },
  
      badUpload: {
        description: 'API Persist call failed.'
      }
  
    },
  
  
    fn: async function (inputs, exits) {
        var _ = require("underscore")
        const axios = require("axios");
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/multi?api_key=47e95b6f1f16930b4bab4ac1677815c7&language=en-US&query=+'+inputs.search_string+'&page=1&include_adult=false',
            headers: {

            }
          };
          
          axios.request(options).then(function (response) {
              return exits.success(response.data)
          }).catch(function (error) {
              console.error(error);
          });
        
    
      }
  };