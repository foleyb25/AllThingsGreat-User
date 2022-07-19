const { globals } = require("../../config/globals");

module.exports = {
    friendlyName: 'getscores',
    description: 'Get scores via api call to rapidAPI sportspage feeds',
  
    inputs: {
      APIID: {
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
            url: 'https://sportspage-feeds.p.rapidapi.com/games',
            headers: {
              'X-RapidAPI-Key': '0378cb559emsha92428365269fe8p1f4409jsnfb71711af35c',
              'X-RapidAPI-Host': 'sportspage-feeds.p.rapidapi.com'
            }
          };
          axios.request(options).then(function (response) {
              // console.log(response.data);
              // sails.config.globals.scores = response.data

              sails.config.globals.filteredMLB = _.filter(response.data.results, function(result) {
                return result.details.league == "MLB"
              })
          
              sails.config.globals.filteredNFL = _.filter(response.data.results, function(result) {
                return result.details.league == "NFL"
              })
          
              sails.config.globals.filteredNCAAF = _.filter(response.data.results, function(result) {
                return result.details.league == "NCAAF"
              })
          
              sails.config.globals.filteredMLS = _.filter(response.data.results, function(result) {
                return result.details.league == "MLS"
              })
          
              sails.config.globals.filteredNBA = _.filter(response.data.results, function(result) {
                return result.details.league == "NBA"
              })
          
              sails.config.globals.filteredNHL = _.filter(response.data.results, function(result) {
                return result.details.league == "NHL"
              })

              return exits.success("Success")
          }).catch(function (error) {
              console.error(error);
          });
        
    
      }
  };